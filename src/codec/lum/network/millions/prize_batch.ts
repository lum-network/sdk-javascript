/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.millions';

export interface PrizeBatch {
    poolPercent: Long;
    quantity: Long;
    drawProbability: string;
    isUnique: boolean;
}

function createBasePrizeBatch(): PrizeBatch {
    return { poolPercent: Long.UZERO, quantity: Long.UZERO, drawProbability: '', isUnique: false };
}

export const PrizeBatch = {
    encode(message: PrizeBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolPercent.isZero()) {
            writer.uint32(8).uint64(message.poolPercent);
        }
        if (!message.quantity.isZero()) {
            writer.uint32(16).uint64(message.quantity);
        }
        if (message.drawProbability !== '') {
            writer.uint32(26).string(message.drawProbability);
        }
        if (message.isUnique === true) {
            writer.uint32(32).bool(message.isUnique);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeBatch {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolPercent = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.quantity = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.drawProbability = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.isUnique = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PrizeBatch {
        return {
            poolPercent: isSet(object.poolPercent) ? Long.fromValue(object.poolPercent) : Long.UZERO,
            quantity: isSet(object.quantity) ? Long.fromValue(object.quantity) : Long.UZERO,
            drawProbability: isSet(object.drawProbability) ? String(object.drawProbability) : '',
            isUnique: isSet(object.isUnique) ? Boolean(object.isUnique) : false,
        };
    },

    toJSON(message: PrizeBatch): unknown {
        const obj: any = {};
        if (!message.poolPercent.isZero()) {
            obj.poolPercent = (message.poolPercent || Long.UZERO).toString();
        }
        if (!message.quantity.isZero()) {
            obj.quantity = (message.quantity || Long.UZERO).toString();
        }
        if (message.drawProbability !== '') {
            obj.drawProbability = message.drawProbability;
        }
        if (message.isUnique === true) {
            obj.isUnique = message.isUnique;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<PrizeBatch>, I>>(base?: I): PrizeBatch {
        return PrizeBatch.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PrizeBatch>, I>>(object: I): PrizeBatch {
        const message = createBasePrizeBatch();
        message.poolPercent = object.poolPercent !== undefined && object.poolPercent !== null ? Long.fromValue(object.poolPercent) : Long.UZERO;
        message.quantity = object.quantity !== undefined && object.quantity !== null ? Long.fromValue(object.quantity) : Long.UZERO;
        message.drawProbability = object.drawProbability ?? '';
        message.isUnique = object.isUnique ?? false;
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
