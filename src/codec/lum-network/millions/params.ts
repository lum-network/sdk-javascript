/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../google/protobuf/duration';

export const protobufPackage = 'lum.network.millions';

export interface Params {
    minDepositAmount: string;
    maxPrizeStrategyBatches: Long;
    maxPrizeBatchQuantity: Long;
    minDrawScheduleDelta?: Duration;
    maxDrawScheduleDelta?: Duration;
    prizeExpirationDelta?: Duration;
    feesStakers: string;
}

const baseParams: object = { minDepositAmount: '', maxPrizeStrategyBatches: Long.UZERO, maxPrizeBatchQuantity: Long.UZERO, feesStakers: '' };

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minDepositAmount !== '') {
            writer.uint32(10).string(message.minDepositAmount);
        }
        if (!message.maxPrizeStrategyBatches.isZero()) {
            writer.uint32(16).uint64(message.maxPrizeStrategyBatches);
        }
        if (!message.maxPrizeBatchQuantity.isZero()) {
            writer.uint32(24).uint64(message.maxPrizeBatchQuantity);
        }
        if (message.minDrawScheduleDelta !== undefined) {
            Duration.encode(message.minDrawScheduleDelta, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            Duration.encode(message.maxDrawScheduleDelta, writer.uint32(42).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            Duration.encode(message.prizeExpirationDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.feesStakers !== '') {
            writer.uint32(58).string(message.feesStakers);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams } as Params;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDepositAmount = reader.string();
                    break;
                case 2:
                    message.maxPrizeStrategyBatches = reader.uint64() as Long;
                    break;
                case 3:
                    message.maxPrizeBatchQuantity = reader.uint64() as Long;
                    break;
                case 4:
                    message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.feesStakers = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Params {
        const message = { ...baseParams } as Params;
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = String(object.minDepositAmount);
        } else {
            message.minDepositAmount = '';
        }
        if (object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null) {
            message.maxPrizeStrategyBatches = Long.fromString(object.maxPrizeStrategyBatches);
        } else {
            message.maxPrizeStrategyBatches = Long.UZERO;
        }
        if (object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null) {
            message.maxPrizeBatchQuantity = Long.fromString(object.maxPrizeBatchQuantity);
        } else {
            message.maxPrizeBatchQuantity = Long.UZERO;
        }
        if (object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null) {
            message.minDrawScheduleDelta = Duration.fromJSON(object.minDrawScheduleDelta);
        } else {
            message.minDrawScheduleDelta = undefined;
        }
        if (object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null) {
            message.maxDrawScheduleDelta = Duration.fromJSON(object.maxDrawScheduleDelta);
        } else {
            message.maxDrawScheduleDelta = undefined;
        }
        if (object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null) {
            message.prizeExpirationDelta = Duration.fromJSON(object.prizeExpirationDelta);
        } else {
            message.prizeExpirationDelta = undefined;
        }
        if (object.feesStakers !== undefined && object.feesStakers !== null) {
            message.feesStakers = String(object.feesStakers);
        } else {
            message.feesStakers = '';
        }
        return message;
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.maxPrizeStrategyBatches !== undefined && (obj.maxPrizeStrategyBatches = (message.maxPrizeStrategyBatches || Long.UZERO).toString());
        message.maxPrizeBatchQuantity !== undefined && (obj.maxPrizeBatchQuantity = (message.maxPrizeBatchQuantity || Long.UZERO).toString());
        message.minDrawScheduleDelta !== undefined && (obj.minDrawScheduleDelta = message.minDrawScheduleDelta ? Duration.toJSON(message.minDrawScheduleDelta) : undefined);
        message.maxDrawScheduleDelta !== undefined && (obj.maxDrawScheduleDelta = message.maxDrawScheduleDelta ? Duration.toJSON(message.maxDrawScheduleDelta) : undefined);
        message.prizeExpirationDelta !== undefined && (obj.prizeExpirationDelta = message.prizeExpirationDelta ? Duration.toJSON(message.prizeExpirationDelta) : undefined);
        message.feesStakers !== undefined && (obj.feesStakers = message.feesStakers);
        return obj;
    },

    fromPartial(object: DeepPartial<Params>): Params {
        const message = { ...baseParams } as Params;
        message.minDepositAmount = object.minDepositAmount ?? '';
        if (object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null) {
            message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches as Long;
        } else {
            message.maxPrizeStrategyBatches = Long.UZERO;
        }
        if (object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null) {
            message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity as Long;
        } else {
            message.maxPrizeBatchQuantity = Long.UZERO;
        }
        if (object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null) {
            message.minDrawScheduleDelta = Duration.fromPartial(object.minDrawScheduleDelta);
        } else {
            message.minDrawScheduleDelta = undefined;
        }
        if (object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null) {
            message.maxDrawScheduleDelta = Duration.fromPartial(object.maxDrawScheduleDelta);
        } else {
            message.maxDrawScheduleDelta = undefined;
        }
        if (object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null) {
            message.prizeExpirationDelta = Duration.fromPartial(object.prizeExpirationDelta);
        } else {
            message.prizeExpirationDelta = undefined;
        }
        message.feesStakers = object.feesStakers ?? '';
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
