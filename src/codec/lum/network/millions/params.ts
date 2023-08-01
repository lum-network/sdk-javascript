/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../google/protobuf/duration';

export const protobufPackage = 'lum.network.millions';

export interface Params {
    /**
     * min_deposit_amount the minimum deposit amount accepted by pool
     * configurations
     */
    minDepositAmount: string;
    /**
     * max_prize_strategy_batches the maximum prize strategy batches accepted by
     * pool configurations
     */
    maxPrizeStrategyBatches: Long;
    /**
     * max_prize_batch_quantity the maximum prize batch quantity accepted by pool
     * configurations
     */
    maxPrizeBatchQuantity: Long;
    /**
     * min_draw_schedule_delta the minimum delta between draws accepted by pool
     * configurations
     */
    minDrawScheduleDelta?: Duration | undefined;
    /**
     * max_draw_schedule_delta the maximum delta between draws accepted by pool
     * configurations
     */
    maxDrawScheduleDelta?: Duration | undefined;
    /**
     * prize_expiration_delta the prize clawback expiration delta (common to all
     * pools)
     */
    prizeExpirationDelta?: Duration | undefined;
    /**
     * fees_stakers the fees distributed by stakers over prize won (common to all
     * pools)
     */
    feesStakers: string;
    /**
     * min_deposit_draw_delta the minimum delta before a draw for a deposit to be
     * accepted during the time weighted balance computation for a draw
     */
    minDepositDrawDelta?: Duration | undefined;
}

function createBaseParams(): Params {
    return {
        minDepositAmount: '',
        maxPrizeStrategyBatches: Long.UZERO,
        maxPrizeBatchQuantity: Long.UZERO,
        minDrawScheduleDelta: undefined,
        maxDrawScheduleDelta: undefined,
        prizeExpirationDelta: undefined,
        feesStakers: '',
        minDepositDrawDelta: undefined,
    };
}

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
        if (message.minDepositDrawDelta !== undefined) {
            Duration.encode(message.minDepositDrawDelta, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.minDepositAmount = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.maxPrizeStrategyBatches = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.maxPrizeBatchQuantity = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.feesStakers = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.minDepositDrawDelta = Duration.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Params {
        return {
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            maxPrizeStrategyBatches: isSet(object.maxPrizeStrategyBatches) ? Long.fromValue(object.maxPrizeStrategyBatches) : Long.UZERO,
            maxPrizeBatchQuantity: isSet(object.maxPrizeBatchQuantity) ? Long.fromValue(object.maxPrizeBatchQuantity) : Long.UZERO,
            minDrawScheduleDelta: isSet(object.minDrawScheduleDelta) ? Duration.fromJSON(object.minDrawScheduleDelta) : undefined,
            maxDrawScheduleDelta: isSet(object.maxDrawScheduleDelta) ? Duration.fromJSON(object.maxDrawScheduleDelta) : undefined,
            prizeExpirationDelta: isSet(object.prizeExpirationDelta) ? Duration.fromJSON(object.prizeExpirationDelta) : undefined,
            feesStakers: isSet(object.feesStakers) ? String(object.feesStakers) : '',
            minDepositDrawDelta: isSet(object.minDepositDrawDelta) ? Duration.fromJSON(object.minDepositDrawDelta) : undefined,
        };
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        if (message.minDepositAmount !== '') {
            obj.minDepositAmount = message.minDepositAmount;
        }
        if (!message.maxPrizeStrategyBatches.isZero()) {
            obj.maxPrizeStrategyBatches = (message.maxPrizeStrategyBatches || Long.UZERO).toString();
        }
        if (!message.maxPrizeBatchQuantity.isZero()) {
            obj.maxPrizeBatchQuantity = (message.maxPrizeBatchQuantity || Long.UZERO).toString();
        }
        if (message.minDrawScheduleDelta !== undefined) {
            obj.minDrawScheduleDelta = Duration.toJSON(message.minDrawScheduleDelta);
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            obj.maxDrawScheduleDelta = Duration.toJSON(message.maxDrawScheduleDelta);
        }
        if (message.prizeExpirationDelta !== undefined) {
            obj.prizeExpirationDelta = Duration.toJSON(message.prizeExpirationDelta);
        }
        if (message.feesStakers !== '') {
            obj.feesStakers = message.feesStakers;
        }
        if (message.minDepositDrawDelta !== undefined) {
            obj.minDepositDrawDelta = Duration.toJSON(message.minDepositDrawDelta);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
        return Params.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
        const message = createBaseParams();
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null ? Long.fromValue(object.maxPrizeStrategyBatches) : Long.UZERO;
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null ? Long.fromValue(object.maxPrizeBatchQuantity) : Long.UZERO;
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? '';
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
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
