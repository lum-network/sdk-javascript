/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PrizeBatch } from './prize_batch';

export const protobufPackage = 'lum.network.millions';

export interface PrizeStrategy {
    prizeBatches: PrizeBatch[];
}

function createBasePrizeStrategy(): PrizeStrategy {
    return { prizeBatches: [] };
}

export const PrizeStrategy = {
    encode(message: PrizeStrategy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.prizeBatches) {
            PrizeBatch.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeStrategy {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeStrategy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.prizeBatches.push(PrizeBatch.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PrizeStrategy {
        return {
            prizeBatches: Array.isArray(object?.prizeBatches) ? object.prizeBatches.map((e: any) => PrizeBatch.fromJSON(e)) : [],
        };
    },

    toJSON(message: PrizeStrategy): unknown {
        const obj: any = {};
        if (message.prizeBatches?.length) {
            obj.prizeBatches = message.prizeBatches.map((e) => PrizeBatch.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<PrizeStrategy>, I>>(base?: I): PrizeStrategy {
        return PrizeStrategy.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PrizeStrategy>, I>>(object: I): PrizeStrategy {
        const message = createBasePrizeStrategy();
        message.prizeBatches = object.prizeBatches?.map((e) => PrizeBatch.fromPartial(e)) || [];
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
