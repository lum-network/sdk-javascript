/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Duration } from '../../google/protobuf/duration';
import { DrawSchedule } from './draw_schedule';
import { PrizeStrategy } from './prize_strategy';

export const protobufPackage = 'lum.network.millions';

export interface MsgUpdateParams {
    minDepositAmount: string;
    maxPrizeStrategyBatches: string;
    maxPrizeBatchQuantity: string;
    minDrawScheduleDelta?: Duration;
    maxDrawScheduleDelta?: Duration;
    prizeExpirationDelta?: Duration;
    feesStakers: string;
    minDepositDrawDelta?: Duration;
    updaterAddress: string;
}

export interface MsgUpdateParamsResponse {}

export interface MsgRegisterPool {
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
    creatorAddress: string;
}

export interface MsgRegisterPoolResponse {
    poolId: Long;
}

export interface MsgUpdatePool {
    poolId: Long;
    validators: string[];
    minDepositAmount: string;
    drawSchedule?: DrawSchedule;
    prizeStrategy?: PrizeStrategy;
    updaterAddress: string;
}

export interface MsgUpdatePoolResponse {}

export interface MsgDeposit {
    poolId: Long;
    amount?: Coin;
    depositorAddress: string;
    winnerAddress: string;
    isSponsor: boolean;
}

export interface MsgDepositResponse {
    depositId: Long;
}

export interface MsgDepositRetry {
    poolId: Long;
    depositId: Long;
    depositorAddress: string;
}

export interface MsgDepositRetryResponse {}

export interface MsgClaimPrize {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
    winnerAddress: string;
}

export interface MsgClaimPrizeResponse {}

export interface MsgWithdrawDeposit {
    poolId: Long;
    depositId: Long;
    depositorAddress: string;
    toAddress: string;
}

export interface MsgWithdrawDepositResponse {
    withdrawalId: Long;
}

export interface MsgWithdrawDepositRetry {
    poolId: Long;
    withdrawalId: Long;
    depositorAddress: string;
}

export interface MsgWithdrawDepositRetryResponse {}

export interface MsgDrawRetry {
    poolId: Long;
    drawId: Long;
    drawRetryAddress: string;
}

export interface MsgDrawRetryResponse {}

export interface MsgRestoreInterchainAccounts {
    poolId: Long;
    restorerAddress: string;
}

export interface MsgRestoreInterchainAccountsResponse {}

function createBaseMsgUpdateParams(): MsgUpdateParams {
    return {
        minDepositAmount: '',
        maxPrizeStrategyBatches: '',
        maxPrizeBatchQuantity: '',
        minDrawScheduleDelta: undefined,
        maxDrawScheduleDelta: undefined,
        prizeExpirationDelta: undefined,
        feesStakers: '',
        minDepositDrawDelta: undefined,
        updaterAddress: '',
    };
}

export const MsgUpdateParams = {
    encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.minDepositAmount !== '') {
            writer.uint32(10).string(message.minDepositAmount);
        }
        if (message.maxPrizeStrategyBatches !== '') {
            writer.uint32(18).string(message.maxPrizeStrategyBatches);
        }
        if (message.maxPrizeBatchQuantity !== '') {
            writer.uint32(26).string(message.maxPrizeBatchQuantity);
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
        if (message.updaterAddress !== '') {
            writer.uint32(74).string(message.updaterAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
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
                    if (tag !== 18) {
                        break;
                    }

                    message.maxPrizeStrategyBatches = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.maxPrizeBatchQuantity = reader.string();
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
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.updaterAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateParams {
        return {
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            maxPrizeStrategyBatches: isSet(object.maxPrizeStrategyBatches) ? String(object.maxPrizeStrategyBatches) : '',
            maxPrizeBatchQuantity: isSet(object.maxPrizeBatchQuantity) ? String(object.maxPrizeBatchQuantity) : '',
            minDrawScheduleDelta: isSet(object.minDrawScheduleDelta) ? Duration.fromJSON(object.minDrawScheduleDelta) : undefined,
            maxDrawScheduleDelta: isSet(object.maxDrawScheduleDelta) ? Duration.fromJSON(object.maxDrawScheduleDelta) : undefined,
            prizeExpirationDelta: isSet(object.prizeExpirationDelta) ? Duration.fromJSON(object.prizeExpirationDelta) : undefined,
            feesStakers: isSet(object.feesStakers) ? String(object.feesStakers) : '',
            minDepositDrawDelta: isSet(object.minDepositDrawDelta) ? Duration.fromJSON(object.minDepositDrawDelta) : undefined,
            updaterAddress: isSet(object.updaterAddress) ? String(object.updaterAddress) : '',
        };
    },

    toJSON(message: MsgUpdateParams): unknown {
        const obj: any = {};
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.maxPrizeStrategyBatches !== undefined && (obj.maxPrizeStrategyBatches = message.maxPrizeStrategyBatches);
        message.maxPrizeBatchQuantity !== undefined && (obj.maxPrizeBatchQuantity = message.maxPrizeBatchQuantity);
        message.minDrawScheduleDelta !== undefined && (obj.minDrawScheduleDelta = message.minDrawScheduleDelta ? Duration.toJSON(message.minDrawScheduleDelta) : undefined);
        message.maxDrawScheduleDelta !== undefined && (obj.maxDrawScheduleDelta = message.maxDrawScheduleDelta ? Duration.toJSON(message.maxDrawScheduleDelta) : undefined);
        message.prizeExpirationDelta !== undefined && (obj.prizeExpirationDelta = message.prizeExpirationDelta ? Duration.toJSON(message.prizeExpirationDelta) : undefined);
        message.feesStakers !== undefined && (obj.feesStakers = message.feesStakers);
        message.minDepositDrawDelta !== undefined && (obj.minDepositDrawDelta = message.minDepositDrawDelta ? Duration.toJSON(message.minDepositDrawDelta) : undefined);
        message.updaterAddress !== undefined && (obj.updaterAddress = message.updaterAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
        return MsgUpdateParams.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
        const message = createBaseMsgUpdateParams();
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? '';
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? '';
        message.minDrawScheduleDelta = object.minDrawScheduleDelta !== undefined && object.minDrawScheduleDelta !== null ? Duration.fromPartial(object.minDrawScheduleDelta) : undefined;
        message.maxDrawScheduleDelta = object.maxDrawScheduleDelta !== undefined && object.maxDrawScheduleDelta !== null ? Duration.fromPartial(object.maxDrawScheduleDelta) : undefined;
        message.prizeExpirationDelta = object.prizeExpirationDelta !== undefined && object.prizeExpirationDelta !== null ? Duration.fromPartial(object.prizeExpirationDelta) : undefined;
        message.feesStakers = object.feesStakers ?? '';
        message.minDepositDrawDelta = object.minDepositDrawDelta !== undefined && object.minDepositDrawDelta !== null ? Duration.fromPartial(object.minDepositDrawDelta) : undefined;
        message.updaterAddress = object.updaterAddress ?? '';
        return message;
    },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
    return {};
}

export const MsgUpdateParamsResponse = {
    encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgUpdateParamsResponse {
        return {};
    },

    toJSON(_: MsgUpdateParamsResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
        return MsgUpdateParamsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};

function createBaseMsgRegisterPool(): MsgRegisterPool {
    return {
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
        creatorAddress: '',
    };
}

export const MsgRegisterPool = {
    encode(message: MsgRegisterPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.chainId !== '') {
            writer.uint32(10).string(message.chainId);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.nativeDenom !== '') {
            writer.uint32(26).string(message.nativeDenom);
        }
        if (message.connectionId !== '') {
            writer.uint32(34).string(message.connectionId);
        }
        for (const v of message.validators) {
            writer.uint32(42).string(v!);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(50).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            DrawSchedule.encode(message.drawSchedule, writer.uint32(58).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(66).fork()).ldelim();
        }
        if (message.bech32PrefixAccAddr !== '') {
            writer.uint32(74).string(message.bech32PrefixAccAddr);
        }
        if (message.bech32PrefixValAddr !== '') {
            writer.uint32(82).string(message.bech32PrefixValAddr);
        }
        if (message.creatorAddress !== '') {
            writer.uint32(90).string(message.creatorAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPool {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.chainId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.denom = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.nativeDenom = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.connectionId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.validators.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.minDepositAmount = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.bech32PrefixAccAddr = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.bech32PrefixValAddr = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.creatorAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgRegisterPool {
        return {
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
            creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : '',
        };
    },

    toJSON(message: MsgRegisterPool): unknown {
        const obj: any = {};
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
        message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRegisterPool>, I>>(base?: I): MsgRegisterPool {
        return MsgRegisterPool.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgRegisterPool>, I>>(object: I): MsgRegisterPool {
        const message = createBaseMsgRegisterPool();
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
        message.creatorAddress = object.creatorAddress ?? '';
        return message;
    },
};

function createBaseMsgRegisterPoolResponse(): MsgRegisterPoolResponse {
    return { poolId: Long.UZERO };
}

export const MsgRegisterPoolResponse = {
    encode(message: MsgRegisterPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPoolResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgRegisterPoolResponse {
        return { poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO };
    },

    toJSON(message: MsgRegisterPoolResponse): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRegisterPoolResponse>, I>>(base?: I): MsgRegisterPoolResponse {
        return MsgRegisterPoolResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgRegisterPoolResponse>, I>>(object: I): MsgRegisterPoolResponse {
        const message = createBaseMsgRegisterPoolResponse();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        return message;
    },
};

function createBaseMsgUpdatePool(): MsgUpdatePool {
    return {
        poolId: Long.UZERO,
        validators: [],
        minDepositAmount: '',
        drawSchedule: undefined,
        prizeStrategy: undefined,
        updaterAddress: '',
    };
}

export const MsgUpdatePool = {
    encode(message: MsgUpdatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        for (const v of message.validators) {
            writer.uint32(18).string(v!);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(26).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            DrawSchedule.encode(message.drawSchedule, writer.uint32(34).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(42).fork()).ldelim();
        }
        if (message.updaterAddress !== '') {
            writer.uint32(50).string(message.updaterAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePool {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.validators.push(reader.string());
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

                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.updaterAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdatePool {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => String(e)) : [],
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            drawSchedule: isSet(object.drawSchedule) ? DrawSchedule.fromJSON(object.drawSchedule) : undefined,
            prizeStrategy: isSet(object.prizeStrategy) ? PrizeStrategy.fromJSON(object.prizeStrategy) : undefined,
            updaterAddress: isSet(object.updaterAddress) ? String(object.updaterAddress) : '',
        };
    },

    toJSON(message: MsgUpdatePool): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        if (message.validators) {
            obj.validators = message.validators.map((e) => e);
        } else {
            obj.validators = [];
        }
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.drawSchedule !== undefined && (obj.drawSchedule = message.drawSchedule ? DrawSchedule.toJSON(message.drawSchedule) : undefined);
        message.prizeStrategy !== undefined && (obj.prizeStrategy = message.prizeStrategy ? PrizeStrategy.toJSON(message.prizeStrategy) : undefined);
        message.updaterAddress !== undefined && (obj.updaterAddress = message.updaterAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdatePool>, I>>(base?: I): MsgUpdatePool {
        return MsgUpdatePool.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdatePool>, I>>(object: I): MsgUpdatePool {
        const message = createBaseMsgUpdatePool();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.validators = object.validators?.map((e) => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.updaterAddress = object.updaterAddress ?? '';
        return message;
    },
};

function createBaseMsgUpdatePoolResponse(): MsgUpdatePoolResponse {
    return {};
}

export const MsgUpdatePoolResponse = {
    encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdatePoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgUpdatePoolResponse {
        return {};
    },

    toJSON(_: MsgUpdatePoolResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdatePoolResponse>, I>>(base?: I): MsgUpdatePoolResponse {
        return MsgUpdatePoolResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdatePoolResponse>, I>>(_: I): MsgUpdatePoolResponse {
        const message = createBaseMsgUpdatePoolResponse();
        return message;
    },
};

function createBaseMsgDeposit(): MsgDeposit {
    return { poolId: Long.UZERO, amount: undefined, depositorAddress: '', winnerAddress: '', isSponsor: false };
}

export const MsgDeposit = {
    encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositorAddress !== '') {
            writer.uint32(26).string(message.depositorAddress);
        }
        if (message.winnerAddress !== '') {
            writer.uint32(34).string(message.winnerAddress);
        }
        if (message.isSponsor === true) {
            writer.uint32(40).bool(message.isSponsor);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.isSponsor = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDeposit {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            isSponsor: isSet(object.isSponsor) ? Boolean(object.isSponsor) : false,
        };
    },

    toJSON(message: MsgDeposit): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.isSponsor !== undefined && (obj.isSponsor = message.isSponsor);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
        return MsgDeposit.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
        const message = createBaseMsgDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.depositorAddress = object.depositorAddress ?? '';
        message.winnerAddress = object.winnerAddress ?? '';
        message.isSponsor = object.isSponsor ?? false;
        return message;
    },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
    return { depositId: Long.UZERO };
}

export const MsgDepositResponse = {
    encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.depositId.isZero()) {
            writer.uint32(8).uint64(message.depositId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.depositId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDepositResponse {
        return { depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO };
    },

    toJSON(message: MsgDepositResponse): unknown {
        const obj: any = {};
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(base?: I): MsgDepositResponse {
        return MsgDepositResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
        const message = createBaseMsgDepositResponse();
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        return message;
    },
};

function createBaseMsgDepositRetry(): MsgDepositRetry {
    return { poolId: Long.UZERO, depositId: Long.UZERO, depositorAddress: '' };
}

export const MsgDepositRetry = {
    encode(message: MsgDepositRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(26).string(message.depositorAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRetry {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.depositId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDepositRetry {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
        };
    },

    toJSON(message: MsgDepositRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositRetry>, I>>(base?: I): MsgDepositRetry {
        return MsgDepositRetry.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDepositRetry>, I>>(object: I): MsgDepositRetry {
        const message = createBaseMsgDepositRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? '';
        return message;
    },
};

function createBaseMsgDepositRetryResponse(): MsgDepositRetryResponse {
    return {};
}

export const MsgDepositRetryResponse = {
    encode(_: MsgDepositRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRetryResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositRetryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgDepositRetryResponse {
        return {};
    },

    toJSON(_: MsgDepositRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositRetryResponse>, I>>(base?: I): MsgDepositRetryResponse {
        return MsgDepositRetryResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDepositRetryResponse>, I>>(_: I): MsgDepositRetryResponse {
        const message = createBaseMsgDepositRetryResponse();
        return message;
    },
};

function createBaseMsgClaimPrize(): MsgClaimPrize {
    return { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO, winnerAddress: '' };
}

export const MsgClaimPrize = {
    encode(message: MsgClaimPrize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        if (message.winnerAddress !== '') {
            writer.uint32(34).string(message.winnerAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPrize {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimPrize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.prizeId = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 34) {
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

    fromJSON(object: any): MsgClaimPrize {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            prizeId: isSet(object.prizeId) ? Long.fromValue(object.prizeId) : Long.UZERO,
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
        };
    },

    toJSON(message: MsgClaimPrize): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgClaimPrize>, I>>(base?: I): MsgClaimPrize {
        return MsgClaimPrize.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgClaimPrize>, I>>(object: I): MsgClaimPrize {
        const message = createBaseMsgClaimPrize();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        message.winnerAddress = object.winnerAddress ?? '';
        return message;
    },
};

function createBaseMsgClaimPrizeResponse(): MsgClaimPrizeResponse {
    return {};
}

export const MsgClaimPrizeResponse = {
    encode(_: MsgClaimPrizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPrizeResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimPrizeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgClaimPrizeResponse {
        return {};
    },

    toJSON(_: MsgClaimPrizeResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgClaimPrizeResponse>, I>>(base?: I): MsgClaimPrizeResponse {
        return MsgClaimPrizeResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgClaimPrizeResponse>, I>>(_: I): MsgClaimPrizeResponse {
        const message = createBaseMsgClaimPrizeResponse();
        return message;
    },
};

function createBaseMsgWithdrawDeposit(): MsgWithdrawDeposit {
    return { poolId: Long.UZERO, depositId: Long.UZERO, depositorAddress: '', toAddress: '' };
}

export const MsgWithdrawDeposit = {
    encode(message: MsgWithdrawDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(26).string(message.depositorAddress);
        }
        if (message.toAddress !== '') {
            writer.uint32(34).string(message.toAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDeposit {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.depositId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.toAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDeposit {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : '',
        };
    },

    toJSON(message: MsgWithdrawDeposit): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawDeposit>, I>>(base?: I): MsgWithdrawDeposit {
        return MsgWithdrawDeposit.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDeposit>, I>>(object: I): MsgWithdrawDeposit {
        const message = createBaseMsgWithdrawDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        return message;
    },
};

function createBaseMsgWithdrawDepositResponse(): MsgWithdrawDepositResponse {
    return { withdrawalId: Long.UZERO };
}

export const MsgWithdrawDepositResponse = {
    encode(message: MsgWithdrawDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.withdrawalId.isZero()) {
            writer.uint32(8).uint64(message.withdrawalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.withdrawalId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDepositResponse {
        return { withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO };
    },

    toJSON(message: MsgWithdrawDepositResponse): unknown {
        const obj: any = {};
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawDepositResponse>, I>>(base?: I): MsgWithdrawDepositResponse {
        return MsgWithdrawDepositResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDepositResponse>, I>>(object: I): MsgWithdrawDepositResponse {
        const message = createBaseMsgWithdrawDepositResponse();
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
};

function createBaseMsgWithdrawDepositRetry(): MsgWithdrawDepositRetry {
    return { poolId: Long.UZERO, withdrawalId: Long.UZERO, depositorAddress: '' };
}

export const MsgWithdrawDepositRetry = {
    encode(message: MsgWithdrawDepositRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(26).string(message.depositorAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositRetry {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.withdrawalId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDepositRetry {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
        };
    },

    toJSON(message: MsgWithdrawDepositRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawDepositRetry>, I>>(base?: I): MsgWithdrawDepositRetry {
        return MsgWithdrawDepositRetry.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDepositRetry>, I>>(object: I): MsgWithdrawDepositRetry {
        const message = createBaseMsgWithdrawDepositRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        message.depositorAddress = object.depositorAddress ?? '';
        return message;
    },
};

function createBaseMsgWithdrawDepositRetryResponse(): MsgWithdrawDepositRetryResponse {
    return {};
}

export const MsgWithdrawDepositRetryResponse = {
    encode(_: MsgWithdrawDepositRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositRetryResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDepositRetryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgWithdrawDepositRetryResponse {
        return {};
    },

    toJSON(_: MsgWithdrawDepositRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawDepositRetryResponse>, I>>(base?: I): MsgWithdrawDepositRetryResponse {
        return MsgWithdrawDepositRetryResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawDepositRetryResponse>, I>>(_: I): MsgWithdrawDepositRetryResponse {
        const message = createBaseMsgWithdrawDepositRetryResponse();
        return message;
    },
};

function createBaseMsgDrawRetry(): MsgDrawRetry {
    return { poolId: Long.UZERO, drawId: Long.UZERO, drawRetryAddress: '' };
}

export const MsgDrawRetry = {
    encode(message: MsgDrawRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.drawRetryAddress !== '') {
            writer.uint32(26).string(message.drawRetryAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetry {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRetry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.drawId = reader.uint64() as Long;
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.drawRetryAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDrawRetry {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            drawRetryAddress: isSet(object.drawRetryAddress) ? String(object.drawRetryAddress) : '',
        };
    },

    toJSON(message: MsgDrawRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.drawRetryAddress !== undefined && (obj.drawRetryAddress = message.drawRetryAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDrawRetry>, I>>(base?: I): MsgDrawRetry {
        return MsgDrawRetry.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDrawRetry>, I>>(object: I): MsgDrawRetry {
        const message = createBaseMsgDrawRetry();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.drawRetryAddress = object.drawRetryAddress ?? '';
        return message;
    },
};

function createBaseMsgDrawRetryResponse(): MsgDrawRetryResponse {
    return {};
}

export const MsgDrawRetryResponse = {
    encode(_: MsgDrawRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetryResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDrawRetryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgDrawRetryResponse {
        return {};
    },

    toJSON(_: MsgDrawRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDrawRetryResponse>, I>>(base?: I): MsgDrawRetryResponse {
        return MsgDrawRetryResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDrawRetryResponse>, I>>(_: I): MsgDrawRetryResponse {
        const message = createBaseMsgDrawRetryResponse();
        return message;
    },
};

function createBaseMsgRestoreInterchainAccounts(): MsgRestoreInterchainAccounts {
    return { poolId: Long.UZERO, restorerAddress: '' };
}

export const MsgRestoreInterchainAccounts = {
    encode(message: MsgRestoreInterchainAccounts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.restorerAddress !== '') {
            writer.uint32(18).string(message.restorerAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccounts {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestoreInterchainAccounts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.poolId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.restorerAddress = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgRestoreInterchainAccounts {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            restorerAddress: isSet(object.restorerAddress) ? String(object.restorerAddress) : '',
        };
    },

    toJSON(message: MsgRestoreInterchainAccounts): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.restorerAddress !== undefined && (obj.restorerAddress = message.restorerAddress);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRestoreInterchainAccounts>, I>>(base?: I): MsgRestoreInterchainAccounts {
        return MsgRestoreInterchainAccounts.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgRestoreInterchainAccounts>, I>>(object: I): MsgRestoreInterchainAccounts {
        const message = createBaseMsgRestoreInterchainAccounts();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.restorerAddress = object.restorerAddress ?? '';
        return message;
    },
};

function createBaseMsgRestoreInterchainAccountsResponse(): MsgRestoreInterchainAccountsResponse {
    return {};
}

export const MsgRestoreInterchainAccountsResponse = {
    encode(_: MsgRestoreInterchainAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRestoreInterchainAccountsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRestoreInterchainAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgRestoreInterchainAccountsResponse {
        return {};
    },

    toJSON(_: MsgRestoreInterchainAccountsResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgRestoreInterchainAccountsResponse>, I>>(base?: I): MsgRestoreInterchainAccountsResponse {
        return MsgRestoreInterchainAccountsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgRestoreInterchainAccountsResponse>, I>>(_: I): MsgRestoreInterchainAccountsResponse {
        const message = createBaseMsgRestoreInterchainAccountsResponse();
        return message;
    },
};

export interface Msg {
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    DepositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse>;
    ClaimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse>;
    WithdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse>;
    WithdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse>;
    DrawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse>;
    RestoreInterchainAccounts(request: MsgRestoreInterchainAccounts): Promise<MsgRestoreInterchainAccountsResponse>;
}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || 'lum.network.millions.Msg';
        this.rpc = rpc;
        this.Deposit = this.Deposit.bind(this);
        this.DepositRetry = this.DepositRetry.bind(this);
        this.ClaimPrize = this.ClaimPrize.bind(this);
        this.WithdrawDeposit = this.WithdrawDeposit.bind(this);
        this.WithdrawDepositRetry = this.WithdrawDepositRetry.bind(this);
        this.DrawRetry = this.DrawRetry.bind(this);
        this.RestoreInterchainAccounts = this.RestoreInterchainAccounts.bind(this);
    }
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deposit', data);
        return promise.then((data) => MsgDepositResponse.decode(_m0.Reader.create(data)));
    }

    DepositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse> {
        const data = MsgDepositRetry.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DepositRetry', data);
        return promise.then((data) => MsgDepositRetryResponse.decode(_m0.Reader.create(data)));
    }

    ClaimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse> {
        const data = MsgClaimPrize.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ClaimPrize', data);
        return promise.then((data) => MsgClaimPrizeResponse.decode(_m0.Reader.create(data)));
    }

    WithdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse> {
        const data = MsgWithdrawDeposit.encode(request).finish();
        const promise = this.rpc.request(this.service, 'WithdrawDeposit', data);
        return promise.then((data) => MsgWithdrawDepositResponse.decode(_m0.Reader.create(data)));
    }

    WithdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse> {
        const data = MsgWithdrawDepositRetry.encode(request).finish();
        const promise = this.rpc.request(this.service, 'WithdrawDepositRetry', data);
        return promise.then((data) => MsgWithdrawDepositRetryResponse.decode(_m0.Reader.create(data)));
    }

    DrawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse> {
        const data = MsgDrawRetry.encode(request).finish();
        const promise = this.rpc.request(this.service, 'DrawRetry', data);
        return promise.then((data) => MsgDrawRetryResponse.decode(_m0.Reader.create(data)));
    }

    RestoreInterchainAccounts(request: MsgRestoreInterchainAccounts): Promise<MsgRestoreInterchainAccountsResponse> {
        const data = MsgRestoreInterchainAccounts.encode(request).finish();
        const promise = this.rpc.request(this.service, 'RestoreInterchainAccounts', data);
        return promise.then((data) => MsgRestoreInterchainAccountsResponse.decode(_m0.Reader.create(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
