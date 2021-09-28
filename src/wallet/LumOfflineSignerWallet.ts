import { OfflineDirectSigner } from '@cosmjs/proto-signing';
import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';
import { LumUtils, LumTypes, LumConstants } from '..';
import { LumWallet } from '.';
import Long from 'long';

export class LumOfflineSignerWallet extends LumWallet {
    private readonly offlineSigner: OfflineDirectSigner;

    /**
     * Create a LumOfflineSignerWallet instance based on an OfflineDirectSigner instance compatible with Comsjs based
     * implementations.
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(offlineSigner: OfflineDirectSigner) {
        super();
        this.offlineSigner = offlineSigner;
    }

    signingMode = (): SignMode => {
        return SignMode.SIGN_MODE_DIRECT;
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

    signTransaction = async (doc: LumTypes.Doc): Promise<Uint8Array> => {
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
        const signDoc = LumUtils.generateSignDoc(doc, signerIndex, this.signingMode());
        const response = await this.offlineSigner.signDirect(this.address, signDoc);
        return LumUtils.fromBase64(response.signature.signature);
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
        const response = await this.offlineSigner.signDirect(this.address, signDoc);
        return {
            address: this.getAddress(),
            publicKey: this.getPublicKey(),
            msg: msg,
            sig: LumUtils.fromBase64(response.signature.signature),
            version: LumConstants.LumWalletSigningVersion,
            signer: LumConstants.LumMessageSigner.OFFLINE,
        };
    };
}
