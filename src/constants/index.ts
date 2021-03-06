/**
 * Lum Coin denomination
 */
export const LumDenom = 'lum';

/**
 * Lum Network Bech32 prefix of an account's address
 */
export const LumBech32PrefixAccAddr = 'lum';

/**
 * Lum Network Bech32 prefix of an account's public key
 */
export const LumBech32PrefixAccPub = 'lumpub';

/**
 * Lum Network Bech32 prefix of a validator's operator address
 */
export const LumBech32PrefixValAddr = 'lumvaloper';

/**
 * Lum Network Bech32 prefix of a validator's operator public key
 */
export const LumBech32PrefixValPub = 'lumvaloperpub';

/**
 * Lum Network Bech32 prefix of a consensus node address
 */
export const LumBech32PrefixConsAddr = 'lumvalcons';

/**
 * Lum Network Bech32 prefix of a consensus node public key
 */
export const LumBech32PrefixConsPub = 'lumvalconspub';

/**
 * Lum Network HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
export const HDPath = "m/44'/837'/0'/0/";

/**
 * Get a Lum Network HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default Lum derivation path
 */
export const getLumHdPath = (accountIndex = 0): string => {
    return HDPath + accountIndex.toString();
};

/**
 * Private Key length
 */
export const PrivateKeyLength = 32;
