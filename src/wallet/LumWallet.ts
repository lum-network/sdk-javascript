import * as utils from '../utils';
import * as constants from '../constants';

export class LumWallet {
    /**
     * Private key (secp256k1)
     */
    private readonly privateKey: Uint8Array;
    /**
     * Public key (secp256k1)
     */
    public readonly publicKey: Uint8Array;
    /**
     * Adress (bech32)
     */
    public readonly address: string;

    /**
     * Create a LumWallet instance based on a private key and a public key
     * This constructor is not intended to be used directly as mismatching privateKey and publicKey will lead
     * to undesired behaviour
     * Better use the provided static LumWallet builders
     *
     * @param privateKey wallet private key (secp256k1)
     * @param publicKey wallet public key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    constructor(privateKey: Uint8Array, publicKey: Uint8Array, addressPrefix = constants.LumAddressPrefix) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.address = utils.getAddressFromPublicKey(publicKey, addressPrefix);
    }

    /**
     * Create a LumWallet instance based on a private key (secp256k1)
     *
     * @param privateKey wallet private key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromPrivateKey = async (privateKey: Uint8Array, addressPrefix = constants.LumAddressPrefix) => {
        const publicKey = await utils.getPublicKeyFromPrivateKey(privateKey);
        return new LumWallet(privateKey, publicKey, addressPrefix);
    };

    /**
     * Create a LumWallet instance based on a mnemonic and a derivation path
     *
     * @param mnemonic mnemonic used to derive the private key
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromMnemonic = async (mnemonic: string, hdPath = constants.getLumHdPath(0), addressPrefix = constants.LumAddressPrefix) => {
        const privateKey = await utils.getPrivateKeyFromMnemonic(mnemonic, hdPath);
        return LumWallet.fromPrivateKey(privateKey, addressPrefix);
    };

    /**
     * Create a LumWallet instance based on a keystore
     *
     * @param keystore keystore used to decypher the private key
     * @param password keystore password
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromKeyStore = async (keystore: string | utils.KeyStore, password: string, addressPrefix = constants.LumAddressPrefix) => {
        const privateKey = utils.getPrivateKeyFromKeystore(keystore, password);
        return LumWallet.fromPrivateKey(privateKey, addressPrefix);
    };

    /**
     * Sign a transaction using the wallet private key
     *
     * @param hashedMessage transaction hashed message (sha256)
     */
    signTransaction = async (hashedMessage: Uint8Array): Promise<Uint8Array> => {
        return utils.generateSignature(hashedMessage, this.privateKey);
    };
}
