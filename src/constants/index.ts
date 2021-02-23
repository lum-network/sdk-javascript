/**
 * Lum Coin denomination
 */
export const LumDenom = 'lum';

/**
 * Lum Network address prefix
 */
export const LumAddressPrefix = 'lum';

/**
 * Lum Network HDPath
 * https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 */
export const HDPath = "m/44'/837'/0'/0/";

export const getLumHdPath = (accountIndex = 0): string => {
    return HDPath + accountIndex.toString();
};

/**
 * Private Key length
 */
export const PrivateKeyLength = 32;
