import * as utils from './utils';
import * as constants from './constants';

export class LumWallet {
    private readonly privateKey: Uint8Array;
    public readonly publicKey: Uint8Array;
    public readonly address: string;

    constructor(privateKey: Uint8Array, publicKey: Uint8Array, addressPrefix = constants.LumAddressPrefix) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
        this.address = utils.getAddressFromPublicKey(publicKey, addressPrefix);
    }

    static fromPrivateKey = async (privateKey: Uint8Array, addressPrefix = constants.LumAddressPrefix) => {
        const publicKey = await utils.getPublicKeyFromPrivateKey(privateKey);
        return new LumWallet(privateKey, publicKey, addressPrefix);
    };

    static fromMnemonic = async (mnemonic: string, hdPath = utils.getLumHdPath(0), addressPrefix = constants.LumAddressPrefix) => {
        const privateKey = await utils.getPrivateKeyFromMnemonic(mnemonic, hdPath);
        return LumWallet.fromPrivateKey(privateKey, addressPrefix);
    };

    static fromKeyStore = async (keystore: string | utils.KeyStore, password: string, addressPrefix = constants.LumAddressPrefix) => {
        const privateKey = utils.getPrivateKeyFromKeystore(keystore, password);
        return LumWallet.fromPrivateKey(privateKey, addressPrefix);
    };
}
