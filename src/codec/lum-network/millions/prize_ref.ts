/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.millions';

export interface PrizeRef {
    amount: string;
    prizeId: Long;
    winnerAddress: string;
}

function createBasePrizeRef(): PrizeRef {
    return { amount: '', prizeId: Long.UZERO, winnerAddress: '' };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeRef();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.amount = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.prizeId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PrizeRef {
        return {
            amount: isSet(object.amount) ? String(object.amount) : '',
            prizeId: isSet(object.prizeId) ? Long.fromValue(object.prizeId) : Long.UZERO,
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
        };
    },

    toJSON(message: PrizeRef): unknown {
        const obj: any = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<PrizeRef>, I>>(base?: I): PrizeRef {
        return PrizeRef.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PrizeRef>, I>>(object: I): PrizeRef {
        const message = createBasePrizeRef();
        message.amount = object.amount ?? '';
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? '';
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
