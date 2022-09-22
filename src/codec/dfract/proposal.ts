/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

export interface WithdrawAndMintProposal {
    title: string;
    description: string;
    withdrawalAddress: string;
    microMintRate: Long;
}

const baseWithdrawAndMintProposal: object = { title: '', description: '', withdrawalAddress: '', microMintRate: Long.ZERO };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWithdrawAndMintProposal } as WithdrawAndMintProposal;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.withdrawalAddress = reader.string();
                    break;
                case 4:
                    message.microMintRate = reader.int64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WithdrawAndMintProposal {
        const message = { ...baseWithdrawAndMintProposal } as WithdrawAndMintProposal;
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.withdrawalAddress !== undefined && object.withdrawalAddress !== null) {
            message.withdrawalAddress = String(object.withdrawalAddress);
        } else {
            message.withdrawalAddress = '';
        }
        if (object.microMintRate !== undefined && object.microMintRate !== null) {
            message.microMintRate = Long.fromString(object.microMintRate);
        } else {
            message.microMintRate = Long.ZERO;
        }
        return message;
    },

    toJSON(message: WithdrawAndMintProposal): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.withdrawalAddress !== undefined && (obj.withdrawalAddress = message.withdrawalAddress);
        message.microMintRate !== undefined && (obj.microMintRate = (message.microMintRate || Long.ZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<WithdrawAndMintProposal>): WithdrawAndMintProposal {
        const message = { ...baseWithdrawAndMintProposal } as WithdrawAndMintProposal;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.withdrawalAddress = object.withdrawalAddress ?? '';
        if (object.microMintRate !== undefined && object.microMintRate !== null) {
            message.microMintRate = object.microMintRate as Long;
        } else {
            message.microMintRate = Long.ZERO;
        }
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
