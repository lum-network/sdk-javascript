/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.millions';

export interface PrizeBatch {
    poolPercent: Long;
    quantity: Long;
    drawProbability: string;
}

const basePrizeBatch: object = { poolPercent: Long.UZERO, quantity: Long.UZERO, drawProbability: '' };

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
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeBatch {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrizeBatch } as PrizeBatch;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolPercent = reader.uint64() as Long;
                    break;
                case 2:
                    message.quantity = reader.uint64() as Long;
                    break;
                case 3:
                    message.drawProbability = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrizeBatch {
        const message = { ...basePrizeBatch } as PrizeBatch;
        if (object.poolPercent !== undefined && object.poolPercent !== null) {
            message.poolPercent = Long.fromString(object.poolPercent);
        } else {
            message.poolPercent = Long.UZERO;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Long.fromString(object.quantity);
        } else {
            message.quantity = Long.UZERO;
        }
        if (object.drawProbability !== undefined && object.drawProbability !== null) {
            message.drawProbability = String(object.drawProbability);
        } else {
            message.drawProbability = '';
        }
        return message;
    },

    toJSON(message: PrizeBatch): unknown {
        const obj: any = {};
        message.poolPercent !== undefined && (obj.poolPercent = (message.poolPercent || Long.UZERO).toString());
        message.quantity !== undefined && (obj.quantity = (message.quantity || Long.UZERO).toString());
        message.drawProbability !== undefined && (obj.drawProbability = message.drawProbability);
        return obj;
    },

    fromPartial(object: DeepPartial<PrizeBatch>): PrizeBatch {
        const message = { ...basePrizeBatch } as PrizeBatch;
        if (object.poolPercent !== undefined && object.poolPercent !== null) {
            message.poolPercent = object.poolPercent as Long;
        } else {
            message.poolPercent = Long.UZERO;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity as Long;
        } else {
            message.quantity = Long.UZERO;
        }
        message.drawProbability = object.drawProbability ?? '';
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
