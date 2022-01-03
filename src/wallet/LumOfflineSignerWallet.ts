import Long from 'long';
import { OfflineAminoSigner } from '@cosmjs/amino';
import { OfflineSigner, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';
import { LumUtils, LumTypes, LumConstants, LumAminoRegistry } from '..';
import { LumWallet } from '.';

export class LumOfflineSignerWallet extends LumWallet {
    private readonly offlineSigner: OfflineSigner;

    /**
     * Create a LumOfflineSignerWallet instance based on an OfflineSigner instance compatible with Comsjs based
     * implementations.
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(offlineSigner: OfflineSigner) {
        super();
        this.offlineSigner = offlineSigner;
    }

    signingMode = (): SignMode => {
        if (typeof (this.offlineSigner as OfflineAminoSigner).signAmino === 'function') {
            return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        } else if (typeof (this.offlineSigner as OfflineDirectSigner).signDirect === 'function') {
            return SignMode.SIGN_MODE_DIRECT;
        }
        throw 'Unknown offline signer mode';
    };

    canChangeAccount = (): boolean => {
        return false;
    };

    useAccount = async (): Promise<boolean> => {
        const accounts = await this.offlineSigner.getAccounts();
        if (accounts.length === 0) {
            throw new Error('No account available.');
        }
        this.publicKey = accounts[0].pubkey;
        this.address = accounts[0].address;
        return true;
    };

    sign = async (): Promise<Uint8Array> => {
        throw new Error('Feature not supported.');
    };

    signTransaction = async (doc: LumTypes.Doc): Promise<[LumTypes.SignDoc, Uint8Array]> => {
        if (!this.address || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signerIndex = LumUtils.uint8IndexOf(
            doc.signers.map((signer) => signer.publicKey),
            this.publicKey as Uint8Array,
        );
        if (signerIndex === -1) {
            throw new Error('Signer not found in document');
        }
        if (this.signingMode() === SignMode.SIGN_MODE_DIRECT) {
            const signDoc = LumUtils.generateSignDoc(doc, signerIndex, this.signingMode());
            const response = await (this.offlineSigner as OfflineDirectSigner).signDirect(this.address, signDoc);
            return [response.signed, LumUtils.fromBase64(response.signature.signature)];
        } else if (this.signingMode() === SignMode.SIGN_MODE_LEGACY_AMINO_JSON) {
            const response = await (this.offlineSigner as OfflineAminoSigner).signAmino(this.address, {
                'account_number': doc.signers[signerIndex].accountNumber.toString(),
                'chain_id': doc.chainId,
                'fee': doc.fee,
                'memo': doc.memo || '',
                'msgs': doc.messages.map((msg) => LumAminoRegistry.toAmino(msg)),
                'sequence': doc.signers[signerIndex].sequence.toString(),
            });
            if (response.signed) {
                // Fees and memo could have been edited by the offline signer
                doc.fee = response.signed.fee;
                doc.memo = response.signed.memo;
            }
            return [LumUtils.generateSignDoc(doc, signerIndex, this.signingMode()), LumUtils.fromBase64(response.signature.signature)];
        }
        throw 'Unknown offline signer mode';
    };

    signMessage = async (msg: string): Promise<LumTypes.SignMsg> => {
        if (!this.address || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signDoc = {
            bodyBytes: LumUtils.toAscii(msg),
            authInfoBytes: LumUtils.generateAuthInfoBytes([{ accountNumber: 0, sequence: 0, publicKey: this.getPublicKey() }], { amount: [], gas: '0' }, this.signingMode()),
            chainId: LumConstants.LumSignOnlyChainId,
            accountNumber: Long.fromNumber(0),
        };
        if (this.signingMode() === SignMode.SIGN_MODE_DIRECT) {
            const response = await (this.offlineSigner as OfflineDirectSigner).signDirect(this.address, signDoc);
            return {
                address: this.getAddress(),
                publicKey: this.getPublicKey(),
                msg: msg,
                sig: LumUtils.fromBase64(response.signature.signature),
                version: LumConstants.LumWalletSigningVersion,
                signer: LumConstants.LumMessageSigner.OFFLINE,
            };
        } else if (typeof (this.offlineSigner as OfflineAminoSigner).signAmino === 'function') {
            throw 'Feature not available for amino signers';
        }
        throw 'Unknown offline signer mode';
    };
}
