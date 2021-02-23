import * as hexEncoding from 'crypto-js/enc-hex';
import { Bech32, toHex, fromHex, toBase64, fromBase64 } from '@cosmjs/encoding';
import { sha256 } from '@cosmjs/crypto';
import SHA3 from 'crypto-js/sha3';

import { isUint8Array } from './commons';

export const sha3 = (hex: string): string => {
    const hexEncoded = hexEncoding.parse(hex);
    return SHA3(hexEncoded).toString();
};

export const keyToHex = (key: Uint8Array, xPrefix = false): string => {
    const hexKey = toHex(key);
    if (xPrefix) {
        return '0x' + hexKey;
    }
    return hexKey;
};

export const keyFromHex = (hexKey: string): Uint8Array => {
    if (hexKey.startsWith('0x')) {
        return fromHex(hexKey.substr(2));
    }
    return fromHex(hexKey);
};

export const toJSON = (data: unknown): unknown => {
    if (isUint8Array(data)) {
        // Force uppercase hex format
        return toHex(data).toUpperCase();
    } else if (data instanceof Date) {
        // Otherwise custom Date class with nanosecond will be stringified as objects instead of datetime
        // Note: Nanoseconds data will be lost in the process
        return data.toISOString();
    } else if (Array.isArray(data)) {
        return data.map((v) => toJSON(v));
    } else if (typeof data === 'object') {
        const jsonObj: { [Key: string]: unknown } = {};
        const ks = data as { [key: string]: unknown };
        for (const prop in ks) {
            jsonObj[prop] = toJSON(ks[prop]);
        }
        return jsonObj;
    }
    return data;
};

export { Bech32, toHex, fromHex, toBase64, fromBase64, sha256 };
