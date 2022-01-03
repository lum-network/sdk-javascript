import Transport from '@ledgerhq/hw-transport';
import { OfflineSigner } from '@cosmjs/proto-signing';

import { LumWallet } from './LumWallet';
import { LumLedgerWallet } from './LumLedgerWallet';
import { LumPaperWallet } from './LumPaperWallet';
import { LumOfflineSignerWallet } from './LumOfflineSignerWallet';
import { LumConstants, LumUtils } from '../';

export class LumWalletFactory {
    /**
     * Create a LumWallet instance based on a private key (secp256k1)
     *
     * @param privateKey wallet private key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromPrivateKey = async (privateKey: Uint8Array, addressPrefix = LumConstants.LumBech32PrefixAccAddr): Promise<LumWallet> => {
        const wallet = new LumPaperWallet(privateKey);
        await wallet.useAccount(LumConstants.getLumHdPath(0, 0), addressPrefix);
        return wallet;
    };

    /**
     * Create a LumWallet instance based on a mnemonic and a derivation path
     *
     * @param mnemonic mnemonic used to derive the private key
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromMnemonic = async (mnemonic: string, hdPath = LumConstants.getLumHdPath(0, 0), addressPrefix = LumConstants.LumBech32PrefixAccAddr): Promise<LumWallet> => {
        const wallet = new LumPaperWallet(mnemonic);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };

    /**
     * Create a LumWallet instance based on a keystore
     *
     * @param keystore keystore used to decypher the private key
     * @param password keystore password
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromKeyStore = async (keystore: string | LumUtils.KeyStore, password: string, addressPrefix = LumConstants.LumBech32PrefixAccAddr): Promise<LumWallet> => {
        const privateKey = LumUtils.getPrivateKeyFromKeystore(keystore, password);
        const wallet = new LumPaperWallet(privateKey);
        await wallet.useAccount(LumConstants.getLumHdPath(0, 0), addressPrefix);
        return wallet;
    };

    /**
     * Create a LumWallet instance based on an OfflineDirectSigner instance compatible with Comsjs based implementations.
     *
     * @param offlineSigner OfflineDirectSigner instance compatible with Comsjs based implementations
     */
    static fromOfflineSigner = async (offlineSigner: OfflineSigner): Promise<LumWallet> => {
        const wallet = new LumOfflineSignerWallet(offlineSigner);
        await wallet.useAccount();
        return wallet;
    };

    /**
     * Create a LumWallet instance based on a ledger transport
     *
     * @param transport Ledger transport to use (https://github.com/LedgerHQ/ledgerjs)
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: lum)
     */
    static fromLedgerTransport = async (transport: Transport, hdPath = LumConstants.getLumHdPath(0, 0), addressPrefix = LumConstants.LumBech32PrefixAccAddr): Promise<LumWallet> => {
        const wallet = new LumLedgerWallet(transport);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };
}
