/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../google/protobuf/duration';
import { DrawSchedule } from './draw_schedule';
import { PrizeStrategy } from './prize_strategy';

export const protobufPackage = 'lum.network.millions';

export interface ProposalRegisterPool {
    title: string;
    description: string;
    chainId: string;
    denom: string;
    nativeDenom: string;
    connectionId: string;
    validators: string[];
    minDepositAmount: string;
    drawSchedule?: DrawSchedule;
    prizeStrategy?: PrizeStrategy;
    bech32PrefixAccAddr: string;
    bech32PrefixValAddr: string;
    transferChannelId: string;
}

export interface ProposalUpdatePool {
    title: string;
    description: string;
    poolId: Long;
    validators: string[];
    minDepositAmount: string;
    drawSchedule?: DrawSchedule;
    prizeStrategy?: PrizeStrategy;
}

export interface ProposalUpdateParams {
    title: string;
    description: string;
    minDepositAmount: string;
    maxPrizeStrategyBatches: string;
    maxPrizeBatchQuantity: string;
    minDrawScheduleDelta?: Duration;
    maxDrawScheduleDelta?: Duration;
    prizeExpirationDelta?: Duration;
    feesStakers: string;
    minDepositDrawDelta?: Duration;
}

function createBaseProposalRegisterPool(): ProposalRegisterPool {
    return {
        title: '',
        description: '',
        chainId: '',
        denom: '',
        nativeDenom: '',
        connectionId: '',
        validators: [],
        minDepositAmount: '',
        drawSchedule: undefined,
        prizeStrategy: undefined,
        bech32PrefixAccAddr: '',
        bech32PrefixValAddr: '',
        transferChannelId: '',
    };
}

export const ProposalRegisterPool = {
    encode(message: ProposalRegisterPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.chainId !== '') {
            writer.uint32(26).string(message.chainId);
        }
        if (message.denom !== '') {
            writer.uint32(34).string(message.denom);
        }
        if (message.nativeDenom !== '') {
            writer.uint32(42).string(message.nativeDenom);
        }
        if (message.connectionId !== '') {
            writer.uint32(50).string(message.connectionId);
        }
        for (const v of message.validators) {
            writer.uint32(58).string(v!);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(66).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            DrawSchedule.encode(message.drawSchedule, writer.uint32(74).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(82).fork()).ldelim();
        }
        if (message.bech32PrefixAccAddr !== '') {
            writer.uint32(90).string(message.bech32PrefixAccAddr);
        }
        if (message.bech32PrefixValAddr !== '') {
            writer.uint32(98).string(message.bech32PrefixValAddr);
        }
        if (message.transferChannelId !== '') {
            writer.uint32(106).string(message.transferChannelId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalRegisterPool {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalRegisterPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.chainId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.denom = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.nativeDenom = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.connectionId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.validators.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.minDepositAmount = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.bech32PrefixAccAddr = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }

                    message.bech32PrefixValAddr = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }

                    message.transferChannelId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ProposalRegisterPool {
        return {
            title: isSet(object.title) ? String(object.title) : '',
            description: isSet(object.description) ? String(object.description) : '',
            chainId: isSet(object.chainId) ? String(object.chainId) : '',
            denom: isSet(object.denom) ? String(object.denom) : '',
            nativeDenom: isSet(object.nativeDenom) ? String(object.nativeDenom) : '',
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : '',
            validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [],
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            drawSchedule: isSet(object.drawSchedule) ? DrawSchedule.fromJSON(object.drawSchedule) : undefined,
            prizeStrategy: isSet(object.prizeStrategy) ? PrizeStrategy.fromJSON(object.prizeStrategy) : undefined,
            bech32PrefixAccAddr: isSet(object.bech32PrefixAccAddr) ? String(object.bech32PrefixAccAddr) : '',
            bech32PrefixValAddr: isSet(object.bech32PrefixValAddr) ? String(object.bech32PrefixValAddr) : '',
            transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : '',
        };
    },

    toJSON(message: ProposalRegisterPool): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.denom !== undefined && (obj.denom = message.denom);
        message.nativeDenom !== undefined && (obj.nativeDenom = message.nativeDenom);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e);
        } else {
            obj.validators = [];
        }
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.drawSchedule !== undefined && (obj.drawSchedule = message.drawSchedule ? DrawSchedule.toJSON(message.drawSchedule) : undefined);
        message.prizeStrategy !== undefined && (obj.prizeStrategy = message.prizeStrategy ? PrizeStrategy.toJSON(message.prizeStrategy) : undefined);
        message.bech32PrefixAccAddr !== undefined && (obj.bech32PrefixAccAddr = message.bech32PrefixAccAddr);
        message.bech32PrefixValAddr !== undefined && (obj.bech32PrefixValAddr = message.bech32PrefixValAddr);
        message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
        return obj;
    },

    create<I extends Exact<DeepPartial<ProposalRegisterPool>, I>>(base?: I): ProposalRegisterPool {
        return ProposalRegisterPool.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<ProposalRegisterPool>, I>>(object: I): ProposalRegisterPool {
        const message = createBaseProposalRegisterPool();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.chainId = object.chainId ?? '';
        message.denom = object.denom ?? '';
        message.nativeDenom = object.nativeDenom ?? '';
        message.connectionId = object.connectionId ?? '';
        message.validators = object.validators?.map((e) => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? '';
        message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? '';
        message.transferChannelId = object.transferChannelId ?? '';
        return message;
    },
};

function createBaseProposalUpdatePool(): ProposalUpdatePool {
    return {
        title: '',
        description: '',
        poolId: Long.UZERO,
        validators: [],
        minDepositAmount: '',
        drawSchedule: undefined,
        prizeStrategy: undefined,
    };
}

export const ProposalUpdatePool = {
    encode(message: ProposalUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(24).uint64(message.poolId);
        }
        for (const v of message.validators) {
            writer.uint32(34).string(v!);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(42).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            DrawSchedule.encode(message.drawSchedule, writer.uint32(50).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdatePool {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalUpdatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.validators.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.minDepositAmount = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ProposalUpdatePool {
        return {
            title: isSet(object.title) ? String(object.title) : '',
            description: isSet(object.description) ? String(object.description) : '',
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [],
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            drawSchedule: isSet(object.drawSchedule) ? DrawSchedule.fromJSON(object.drawSchedule) : undefined,
            prizeStrategy: isSet(object.prizeStrategy) ? PrizeStrategy.fromJSON(object.prizeStrategy) : undefined,
        };
    },

    toJSON(message: ProposalUpdatePool): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        if (message.validators) {
            obj.validators = message.validators.map((e) => e);
        } else {
            obj.validators = [];
        }
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.drawSchedule !== undefined && (obj.drawSchedule = message.drawSchedule ? DrawSchedule.toJSON(message.drawSchedule) : undefined);
        message.prizeStrategy !== undefined && (obj.prizeStrategy = message.prizeStrategy ? PrizeStrategy.toJSON(message.prizeStrategy) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<ProposalUpdatePool>, I>>(base?: I): ProposalUpdatePool {
        return ProposalUpdatePool.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<ProposalUpdatePool>, I>>(object: I): ProposalUpdatePool {
        const message = createBaseProposalUpdatePool();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.validators = object.validators?.map((e) => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        return message;
    },
};

function createBaseProposalUpdateParams(): ProposalUpdateParams {
    return {
        title: '',
        description: '',
        minDepositAmount: '',
        maxPrizeStrategyBatches: '',
        maxPrizeBatchQuantity: '',
        minDrawScheduleDelta: undefined,
        maxDrawScheduleDelta: undefined,
        prizeExpirationDelta: undefined,
        feesStakers: '',
        minDepositDrawDelta: undefined,
    };
}

export const ProposalUpdateParams = {
    encode(message: ProposalUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.title !== '') {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(26).string(message.minDepositAmount);
        }
        if (message.maxPrizeStrategyBatches !== '') {
            writer.uint32(34).string(message.maxPrizeStrategyBatches);
        }
        if (message.maxPrizeBatchQuantity !== '') {
            writer.uint32(42).string(message.maxPrizeBatchQuantity);
        }
        if (message.minDrawScheduleDelta !== undefined) {
            Duration.encode(message.minDrawScheduleDelta, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxDrawScheduleDelta !== undefined) {
            Duration.encode(message.maxDrawScheduleDelta, writer.uint32(58).fork()).ldelim();
        }
        if (message.prizeExpirationDelta !== undefined) {
            Duration.encode(message.prizeExpirationDelta, writer.uint32(66).fork()).ldelim();
        }
        if (message.feesStakers !== '') {
            writer.uint32(74).string(message.feesStakers);
        }
        if (message.minDepositDrawDelta !== undefined) {
            Duration.encode(message.minDepositDrawDelta, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ProposalUpdateParams {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.minDepositAmount = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.maxPrizeStrategyBatches = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.maxPrizeBatchQuantity = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.minDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.maxDrawScheduleDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.prizeExpirationDelta = Duration.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.feesStakers = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
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

    fromJSON(object: any): ProposalUpdateParams {
        return {
            title: isSet(object.title) ? String(object.title) : '',
            description: isSet(object.description) ? String(object.description) : '',
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            maxPrizeStrategyBatches: isSet(object.maxPrizeStrategyBatches) ? String(object.maxPrizeStrategyBatches) : '',
            maxPrizeBatchQuantity: isSet(object.maxPrizeBatchQuantity) ? String(object.maxPrizeBatchQuantity) : '',
            minDrawScheduleDelta: isSet(object.minDrawScheduleDelta) ? Duration.fromJSON(object.minDrawScheduleDelta) : undefined,
            maxDrawScheduleDelta: isSet(object.maxDrawScheduleDelta) ? Duration.fromJSON(object.maxDrawScheduleDelta) : undefined,
            prizeExpirationDelta: isSet(object.prizeExpirationDelta) ? Duration.fromJSON(object.prizeExpirationDelta) : undefined,
            feesStakers: isSet(object.feesStakers) ? String(object.feesStakers) : '',
            minDepositDrawDelta: isSet(object.minDepositDrawDelta) ? Duration.fromJSON(object.minDepositDrawDelta) : undefined,
        };
    },

    toJSON(message: ProposalUpdateParams): unknown {
        const obj: any = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.maxPrizeStrategyBatches !== undefined && (obj.maxPrizeStrategyBatches = message.maxPrizeStrategyBatches);
        message.maxPrizeBatchQuantity !== undefined && (obj.maxPrizeBatchQuantity = message.maxPrizeBatchQuantity);
        message.minDrawScheduleDelta !== undefined && (obj.minDrawScheduleDelta = message.minDrawScheduleDelta ? Duration.toJSON(message.minDrawScheduleDelta) : undefined);
        message.maxDrawScheduleDelta !== undefined && (obj.maxDrawScheduleDelta = message.maxDrawScheduleDelta ? Duration.toJSON(message.maxDrawScheduleDelta) : undefined);
        message.prizeExpirationDelta !== undefined && (obj.prizeExpirationDelta = message.prizeExpirationDelta ? Duration.toJSON(message.prizeExpirationDelta) : undefined);
        message.feesStakers !== undefined && (obj.feesStakers = message.feesStakers);
        message.minDepositDrawDelta !== undefined && (obj.minDepositDrawDelta = message.minDepositDrawDelta ? Duration.toJSON(message.minDepositDrawDelta) : undefined);
        return obj;
    },

    create<I extends Exact<DeepPartial<ProposalUpdateParams>, I>>(base?: I): ProposalUpdateParams {
        return ProposalUpdateParams.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<ProposalUpdateParams>, I>>(object: I): ProposalUpdateParams {
        const message = createBaseProposalUpdateParams();
        message.title = object.title ?? '';
        message.description = object.description ?? '';
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? '';
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? '';
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
