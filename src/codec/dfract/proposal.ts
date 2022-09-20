/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

export interface SpendAndAdjustProposal {
    title: string;
    description: string;
    spendDestination: string;
    mintRate: Long;
}

const baseSpendAndAdjustProposal: object = { title: '', description: '', spendDestination: '', mintRate: Long.ZERO };

export const SpendAndAdjustProposal = {
    encode(message: SpendAndAdjustProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.spendDestination !== '') {
            writer.uint32(26).string(message.spendDestination);
        }
        if (!message.mintRate.isZero()) {
            writer.uint32(32).int64(message.mintRate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SpendAndAdjustProposal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSpendAndAdjustProposal } as SpendAndAdjustProposal;
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
                    message.spendDestination = reader.string();
                    break;
                case 4:
                    message.mintRate = reader.int64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SpendAndAdjustProposal {
        const message = { ...baseSpendAndAdjustProposal } as SpendAndAdjustProposal;
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
        if (object.spendDestination !== undefined && object.spendDestination !== null) {
            message.spendDestination = String(object.spendDestination);
        } else {
            message.spendDestination = '';
        }
        if (object.mintRate !== undefined && object.mintRate !== null) {
            message.mintRate = Long.fromString(object.mintRate);
        } else {
            message.mintRate = Long.ZERO;
        }
        return message;
    },

    toJSON(message: SpendAndAdjustProposal): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.spendDestination !== undefined && (obj.spendDestination = message.spendDestination);
        message.mintRate !== undefined && (obj.mintRate = (message.mintRate || Long.ZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<SpendAndAdjustProposal>): SpendAndAdjustProposal {
        const message = { ...baseSpendAndAdjustProposal } as SpendAndAdjustProposal;
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.spendDestination = object.spendDestination ?? '';
        if (object.mintRate !== undefined && object.mintRate !== null) {
            message.mintRate = object.mintRate as Long;
        } else {
            message.mintRate = Long.ZERO;
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
