/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.millions';

export interface PrizeRef {
    amount: string;
    prizeId: Long;
    winnerAddress: string;
}

const basePrizeRef: object = { amount: '', prizeId: Long.UZERO, winnerAddress: '' };

export const PrizeRef = {
    encode(message: PrizeRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.amount !== '') {
            writer.uint32(10).string(message.amount);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(16).uint64(message.prizeId);
        }
        if (message.winnerAddress !== '') {
            writer.uint32(26).string(message.winnerAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeRef {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrizeRef } as PrizeRef;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.prizeId = reader.uint64() as Long;
                    break;
                case 3:
                    message.winnerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrizeRef {
        const message = { ...basePrizeRef } as PrizeRef;
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        } else {
            message.amount = '';
        }
        if (object.prizeId !== undefined && object.prizeId !== null) {
            message.prizeId = Long.fromString(object.prizeId);
        } else {
            message.prizeId = Long.UZERO;
        }
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
        }
        return message;
    },

    toJSON(message: PrizeRef): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<PrizeRef>): PrizeRef {
        const message = { ...basePrizeRef } as PrizeRef;
        message.amount = object.amount ?? '';
        if (object.prizeId !== undefined && object.prizeId !== null) {
            message.prizeId = object.prizeId as Long;
        } else {
            message.prizeId = Long.UZERO;
        }
        message.winnerAddress = object.winnerAddress ?? '';
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
