import { LumTypes } from '..';

export abstract class LumWallet {
    protected publicKey?: Uint8Array;
    protected address?: string;

    /**
     * Gets the current wallet address
     * @see {@link LumWallet.useAccount}
     *
     * @returns wallet address (Bech32)
     */
    getAddress = (): string => {
        if (!this.address) {
            throw new Error('No account selected.');
        }
        return this.address;
    };

    /**
     * Gets the current wallet public key
     * @see {@link LumWallet.useAccount}
     *
     * @returns wallet public key (secp256k1)
     */
    getPublicKey = (): Uint8Array => {
        if (!this.publicKey) {
            throw new Error('No account selected.');
        }
        return this.publicKey;
    };

    /**
     * Whether or not the wallet support changing account
     * Basically only wallet initialized using a private key should not be able to do so
     * @see {@link LumWallet.useAccount}
     */
    abstract canChangeAccount(): boolean;

    /**
     * Change the wallet to use
     *
     * @param hdPath BIP44 HD Path
     * @param addressPrefix prefix to use (ex: lum)
     */
    abstract useAccount(hdPath: string, addressPrefix: string): Promise<boolean>;

    /**
     * Sign a transaction using a LumWallet
     *
     * @param doc document to sign
     */
    abstract signTransaction(doc: LumTypes.SignDoc): Promise<Uint8Array>;
}
