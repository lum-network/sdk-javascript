import Long from 'long';
import { Int53 } from '@cosmjs/math';
import { Secp256k1, Secp256k1Signature } from '@cosmjs/crypto';
import { makeAuthInfoBytes, makeSignBytes } from '@cosmjs/proto-signing';

import { TxRaw } from '../codec/cosmos/tx/v1beta1/tx';

import { sha256 } from './encoding';
import { Message } from '../messages';
import { Fee, SignDoc } from '../types';
import { publicKeyToProto } from './keys';
import { LumRegistry } from '../registry';

/**
 * Generate transaction auth info payload
 *
 * @param publicKey wallet public key (secp256k1)
 * @param fee requested fee
 * @param sequence account sequence number
 */
export const generateAuthInfo = (publicKey: Uint8Array, fee: Fee, sequence: number): Uint8Array => {
    const pubkeyAny = publicKeyToProto(publicKey);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    return makeAuthInfoBytes([pubkeyAny], fee.amount, gasLimit, sequence);
};

/**
 * Generate transaction doc to be signed
 *
 * @param messages Transaction messages
 * @param memo optional memo for the transaction
 * @param authInfoBytes info bytes (as generated by the generateAuthInfo function)
 * @param chainId chain id
 * @param accountNumber account number
 */
export const generateSignDoc = (messages: Message[], memo: string | undefined, authInfoBytes: Uint8Array, chainId: string, accountNumber: number): SignDoc => {
    const txBody = {
        messages: messages,
        memo: memo,
    };
    const bodyBytes = LumRegistry.encode({
        typeUrl: '/cosmos.tx.v1beta1.TxBody',
        value: txBody,
    });

    return {
        bodyBytes,
        authInfoBytes,
        chainId,
        accountNumber: Long.fromNumber(accountNumber),
    };
};

/**
 * Generate transaction sign doc bytes used to sign the transaction
 *
 * @param signDoc sign doc (as generated by the generateSignDoc function)
 */
export const generateSignDocBytes = (signDoc: SignDoc): Uint8Array => {
    return makeSignBytes(signDoc);
};

/**
 * Generate transaction signature
 *
 * @param hashedMessage sha256 hash of the sign doc bytes (as generated by the generateSignDocBytes function)
 * @param privateKey private key used to sign the transaction (secp256k1)
 */
export const generateSignature = async (hashedMessage: Uint8Array, privateKey: Uint8Array): Promise<Uint8Array> => {
    const signature = await Secp256k1.createSignature(hashedMessage, privateKey);
    return new Uint8Array([...signature.r(32), ...signature.s(32)]);
};

/**
 * Generate transaction bytes to broadcast
 *
 * @param signDoc sign doc (as generated by the generateSignDoc function)
 * @param signature transaction signature (as generated by the generateSignature function)
 */
export const generateTxBytes = (signDoc: SignDoc, signature: Uint8Array) => {
    const txRaw = TxRaw.fromPartial({
        bodyBytes: signDoc.bodyBytes,
        authInfoBytes: signDoc.authInfoBytes,
        signatures: [signature],
    });
    return Uint8Array.from(TxRaw.encode(txRaw).finish());
};

/**
 * Verify that a transaction signature is valid
 *
 * @param signature transaction signature (as generated by the generateSignature function)
 * @param signDocBytes sign doc bytes (as generated by the generateSignDocBytes function)
 * @param publicKey public key of the signing key pair (secp256k1)
 */
export const verifySignature = async (signature: Uint8Array, signDocBytes: Uint8Array, publicKey: Uint8Array): Promise<boolean> => {
    const valid = await Secp256k1.verifySignature(Secp256k1Signature.fromFixedLength(signature), sha256(signDocBytes), publicKey);
    return valid;
};
