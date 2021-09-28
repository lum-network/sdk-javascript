import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';
import { LumUtils, LumConstants, LumTypes } from '..';
import { LumWallet } from '.';

export class LumPaperWallet extends LumWallet {
    private readonly mnemonic?: string;
    private privateKey?: Uint8Array;

    /**
     * Create a LumPaperWallet instance based on a mnemonic or a private key
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static LumPaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(mnemonicOrPrivateKey: string | Uint8Array) {
        super();
        if (LumUtils.isUint8Array(mnemonicOrPrivateKey)) {
            this.privateKey = mnemonicOrPrivateKey;
        } else {
            this.mnemonic = mnemonicOrPrivateKey;
        }
    }

    signingMode = (): SignMode => {
        return SignMode.SIGN_MODE_DIRECT;
    };

    canChangeAccount = (): boolean => {
        return !!this.mnemonic;
    };

    useAccount = async (hdPath = LumConstants.getLumHdPath(0, 0), addressPrefix = LumConstants.LumBech32PrefixAccAddr): Promise<boolean> => {
        if (this.mnemonic) {
            this.privateKey = await LumUtils.getPrivateKeyFromMnemonic(this.mnemonic, hdPath);
            this.publicKey = await LumUtils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = LumUtils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return true;
        } else if (this.privateKey) {
            this.publicKey = await LumUtils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = LumUtils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return false;
        }
        throw new Error('No available mnemonic or private key.');
    };

    sign = async (data: Uint8Array): Promise<Uint8Array> => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await LumUtils.generateSignature(data, this.privateKey);
        return signature;
    };

    signTransaction = async (doc: LumTypes.Doc): Promise<[LumTypes.SignDoc, Uint8Array]> => {
        if (!this.privateKey || !this.publicKey) {
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
        const signBytes = LumUtils.generateSignDocBytes(signDoc);
        const hashedMessage = LumUtils.sha256(signBytes);
        const signature = await LumUtils.generateSignature(hashedMessage, this.privateKey);
        return [signDoc, signature];
    };

    signMessage = async (msg: string): Promise<LumTypes.SignMsg> => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await LumUtils.generateSignature(LumUtils.sha256(LumUtils.toAscii(msg)), this.privateKey);
        return {
            address: this.getAddress(),
            publicKey: this.getPublicKey(),
            msg: msg,
            sig: signature,
            version: LumConstants.LumWalletSigningVersion,
            signer: LumConstants.LumMessageSigner.PAPER,
        };
    };
}
