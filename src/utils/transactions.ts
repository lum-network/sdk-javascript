import Long from 'long';
import { Int53 } from '@cosmjs/math';
import { Secp256k1, Secp256k1Signature } from '@cosmjs/crypto';
import { makeAuthInfoBytes, makeSignBytes } from '@cosmjs/proto-signing';

import { TxRaw, AuthInfo } from '../codec/cosmos/tx/v1beta1/tx';
import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';

import { LumMessageSigner } from '../constants';
import { Fee, Doc, SignDoc, SignMsg, DocSigner } from '../types';
import { LumRegistry } from '../registry';
import { sortJSON } from './commons';
import { sha256, toAscii, Bech32 } from './encoding';
import { getAddressFromPublicKey, publicKeyToProto } from './keys';

/**
 * Generate transaction auth info payload
 *
 * @param docSigners Document signers
 * @param fee requested fee
 * @param signMode signing mode
 */
export const generateAuthInfoBytes = (docSigners: DocSigner[], fee: Fee, signMode: SignMode): Uint8Array => {
    const authInfo = {
        signerInfos: docSigners.map((signer: DocSigner) => ({
            publicKey: publicKeyToProto(signer.publicKey),
            modeInfo: {
                single: { mode: signMode },
            },
            sequence: Long.fromNumber(signer.sequence),
        })),
        fee: {
            amount: [...fee.amount],
            gasLimit: Long.fromNumber(Int53.fromString(fee.gas).toNumber()),
        },
    };
    return AuthInfo.encode(AuthInfo.fromPartial(authInfo)).finish();
};

/**
 * Generate transaction doc to be signed
 *
 * @param doc document to create the sign version
 * @param signerIdx index of the signer in the signers field used to specify the accountNumber for signature purpose
 * @param signMode signing mode for the transaction
 */
export const generateSignDoc = (doc: Doc, signerIdx: number, signMode: SignMode): SignDoc => {
    if (signerIdx < 0 || signerIdx > doc.signers.length) {
        throw new Error('Invalid doc signer index');
    }
    const txBody = {
        messages: doc.messages,
        memo: doc.memo,
    };
    const bodyBytes = LumRegistry.encode({
        typeUrl: '/cosmos.tx.v1beta1.TxBody',
        value: txBody,
    });

    return {
        bodyBytes,
        authInfoBytes: generateAuthInfoBytes(doc.signers, doc.fee, signMode),
        chainId: doc.chainId,
        accountNumber: Long.fromNumber(doc.signers[signerIdx].accountNumber),
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
 * @param signatures transaction signatures (as generated by the generateSignature function)
 */
export const generateTxBytes = (signDoc: SignDoc, signatures: Uint8Array[]) => {
    const txRaw = TxRaw.fromPartial({
        bodyBytes: signDoc.bodyBytes,
        authInfoBytes: signDoc.authInfoBytes,
        signatures: signatures,
    });
    return Uint8Array.from(TxRaw.encode(txRaw).finish());
};

/**
 * Verify that a signature is valid
 *
 * @param signature signature (as generated by the generateSignature function)
 * @param signedBytes signed bytes (as generated by the generateSignDocBytes function or by the signMessage function)
 * @param publicKey public key of the signing key pair (secp256k1)
 */
export const verifySignature = async (signature: Uint8Array, signedBytes: Uint8Array, publicKey: Uint8Array): Promise<boolean> => {
    const valid = await Secp256k1.verifySignature(Secp256k1Signature.fromFixedLength(signature), sha256(signedBytes), publicKey);
    return valid;
};

/**
 * Verify that a message is signed by the provided publicKey
 * Will also verify that the address is indeed derivated by the provided publicKey
 *
 * @param msg Message to verify such as generated by the LumWallet.signMessage method
 */
export const verifySignMsg = async (msg: SignMsg): Promise<boolean> => {
    const { prefix } = Bech32.decode(msg.address);
    if (getAddressFromPublicKey(msg.publicKey, prefix) !== msg.address) {
        return false;
    }
    if (msg.signer === LumMessageSigner.PAPER) {
        return verifySignature(msg.sig, toAscii(msg.msg), msg.publicKey);
    } else if (msg.signer === LumMessageSigner.LEDGER) {
        // Re-generate ledger required amino payload to sign messages
        // This is basically an empty transaction payload
        // Same a used in the LumLedgerWallet > signMessage method
        const msgToSign = {
            'account_number': '0',
            'chain_id': 'lum-signature-only',
            'fee': {},
            'memo': msg.msg,
            'msgs': [],
            'sequence': '0',
        };
        return verifySignature(msg.sig, toAscii(JSON.stringify(sortJSON(msgToSign))), msg.publicKey);
    }
    throw new Error('unknown message signer');
};
