import { Secp256k1, Secp256k1Signature } from '@cosmjs/crypto';
// import { makeSignBytes, makeSignDoc } from '@cosmjs/proto-signing';
// import { Msg, encodeSecp256k1Signature } from '@cosmjs/launchpad';
// import { SignDoc } from '@cosmjs/proto-signing/build/codec/cosmos/tx/v1beta1/tx';

import { fromBase64, sha256 } from './encoding';

// export const generateSignature = async (msg: Msg, privateKey: Uint8Array, publicKey: Uint8Array) => {
//     const signBytes = makeSignDoc(fromHex(msg));
//     const hashedMessage = sha256(signBytes);
//     const signature = await Secp256k1.createSignature(hashedMessage, privateKey);
//     const signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
//     const stdSignature = encodeSecp256k1Signature(publicKey, signatureBytes);
//     return stdSignature;
// };

export const verifySignature = async (signature: string, signDocBytes: Uint8Array, publicKey: Uint8Array): Promise<boolean> => {
    const valid = await Secp256k1.verifySignature(Secp256k1Signature.fromFixedLength(fromBase64(signature)), sha256(signDocBytes), publicKey);
    return valid;
};
