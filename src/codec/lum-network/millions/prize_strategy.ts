/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PrizeBatch } from '../../lum-network/millions/prize_batch';

export const protobufPackage = 'lum.network.millions';

export interface PrizeStrategy {
    prizeBatches: PrizeBatch[];
}

const basePrizeStrategy: object = {};

export const PrizeStrategy = {
    encode(message: PrizeStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.prizeBatches) {
            PrizeBatch.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeStrategy {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrizeStrategy } as PrizeStrategy;
        message.prizeBatches = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizeBatches.push(PrizeBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrizeStrategy {
        const message = { ...basePrizeStrategy } as PrizeStrategy;
        message.prizeBatches = [];
        if (object.prizeBatches !== undefined && object.prizeBatches !== null) {
            for (const e of object.prizeBatches) {
                message.prizeBatches.push(PrizeBatch.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PrizeStrategy): unknown {
        const obj: any = {};
        if (message.prizeBatches) {
            obj.prizeBatches = message.prizeBatches.map((e) => (e ? PrizeBatch.toJSON(e) : undefined));
        } else {
            obj.prizeBatches = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrizeStrategy>): PrizeStrategy {
        const message = { ...basePrizeStrategy } as PrizeStrategy;
        message.prizeBatches = [];
        if (object.prizeBatches !== undefined && object.prizeBatches !== null) {
            for (const e of object.prizeBatches) {
                message.prizeBatches.push(PrizeBatch.fromPartial(e));
            }
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
