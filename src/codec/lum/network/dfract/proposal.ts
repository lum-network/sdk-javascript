/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

/**
 * DEPRECATED:
 * For easier management, we moved the WithdrawAndMintProposal to tx based
 * minting. The withdrawal address specified in the dFract module parameters is
 * the one authorized to withdraw and mint udfr tokens based on the
 * micro mint rate
 */
export interface WithdrawAndMintProposal {
    title: string;
    description: string;
    withdrawalAddress: string;
    microMintRate: Long;
}

function createBaseWithdrawAndMintProposal(): WithdrawAndMintProposal {
    return { title: '', description: '', withdrawalAddress: '', microMintRate: Long.ZERO };
}

export const WithdrawAndMintProposal = {
    encode(message: WithdrawAndMintProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.withdrawalAddress !== '') {
            writer.uint32(26).string(message.withdrawalAddress);
        }
        if (!message.microMintRate.isZero()) {
            writer.uint32(32).int64(message.microMintRate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawAndMintProposal {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawAndMintProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.withdrawalAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.microMintRate = reader.int64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): WithdrawAndMintProposal {
        return {
            title: isSet(object.title) ? String(object.title) : '',
            description: isSet(object.description) ? String(object.description) : '',
            withdrawalAddress: isSet(object.withdrawalAddress) ? String(object.withdrawalAddress) : '',
            microMintRate: isSet(object.microMintRate) ? Long.fromValue(object.microMintRate) : Long.ZERO,
        };
    },

    toJSON(message: WithdrawAndMintProposal): unknown {
        const obj: any = {};
        if (message.title !== '') {
            obj.title = message.title;
        }
        if (message.description !== '') {
            obj.description = message.description;
        }
        if (message.withdrawalAddress !== '') {
            obj.withdrawalAddress = message.withdrawalAddress;
        }
        if (!message.microMintRate.isZero()) {
            obj.microMintRate = (message.microMintRate || Long.ZERO).toString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<WithdrawAndMintProposal>, I>>(base?: I): WithdrawAndMintProposal {
        return WithdrawAndMintProposal.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<WithdrawAndMintProposal>, I>>(object: I): WithdrawAndMintProposal {
        const message = createBaseWithdrawAndMintProposal();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.withdrawalAddress = object.withdrawalAddress ?? '';
        message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? Long.fromValue(object.microMintRate) : Long.ZERO;
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
    ? string | number | Long
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
