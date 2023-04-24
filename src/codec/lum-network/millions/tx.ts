/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../google/protobuf/duration';
import { DrawSchedule } from '../../lum-network/millions/draw_schedule';
import { PrizeStrategy } from '../../lum-network/millions/prize_strategy';
import { Coin } from '../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'lum.network.millions';

export interface MsgUpdateParams {
    minDepositAmount: string;
    maxPrizeStrategyBatches: string;
    maxPrizeBatchQuantity: string;
    minDrawScheduleDelta?: Duration;
    maxDrawScheduleDelta?: Duration;
    prizeExpirationDelta?: Duration;
    feesStakers: string;
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
    depositorAddress: string;
}

export interface MsgDrawRetryResponse {}

const baseMsgUpdateParams: object = { minDepositAmount: '', maxPrizeStrategyBatches: '', maxPrizeBatchQuantity: '', feesStakers: '', updaterAddress: '' };

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
        if (message.updaterAddress !== '') {
            writer.uint32(66).string(message.updaterAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDepositAmount = reader.string();
                    break;
                case 2:
                    message.maxPrizeStrategyBatches = reader.string();
                    break;
                case 3:
                    message.maxPrizeBatchQuantity = reader.string();
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
                case 8:
                    message.updaterAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateParams {
        const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = String(object.minDepositAmount);
        } else {
            message.minDepositAmount = '';
        }
        if (object.maxPrizeStrategyBatches !== undefined && object.maxPrizeStrategyBatches !== null) {
            message.maxPrizeStrategyBatches = String(object.maxPrizeStrategyBatches);
        } else {
            message.maxPrizeStrategyBatches = '';
        }
        if (object.maxPrizeBatchQuantity !== undefined && object.maxPrizeBatchQuantity !== null) {
            message.maxPrizeBatchQuantity = String(object.maxPrizeBatchQuantity);
        } else {
            message.maxPrizeBatchQuantity = '';
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
        if (object.updaterAddress !== undefined && object.updaterAddress !== null) {
            message.updaterAddress = String(object.updaterAddress);
        } else {
            message.updaterAddress = '';
        }
        return message;
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
        message.updaterAddress !== undefined && (obj.updaterAddress = message.updaterAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
        const message = { ...baseMsgUpdateParams } as MsgUpdateParams;
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.maxPrizeStrategyBatches = object.maxPrizeStrategyBatches ?? '';
        message.maxPrizeBatchQuantity = object.maxPrizeBatchQuantity ?? '';
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
        message.updaterAddress = object.updaterAddress ?? '';
        return message;
    },
};

const baseMsgUpdateParamsResponse: object = {};

export const MsgUpdateParamsResponse = {
    encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgUpdateParamsResponse {
        const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
        return message;
    },

    toJSON(_: MsgUpdateParamsResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
        const message = { ...baseMsgUpdateParamsResponse } as MsgUpdateParamsResponse;
        return message;
    },
};

const baseMsgRegisterPool: object = {
    chainId: '',
    denom: '',
    nativeDenom: '',
    connectionId: '',
    validators: '',
    minDepositAmount: '',
    bech32PrefixAccAddr: '',
    bech32PrefixValAddr: '',
    creatorAddress: '',
};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterPool } as MsgRegisterPool;
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.nativeDenom = reader.string();
                    break;
                case 4:
                    message.connectionId = reader.string();
                    break;
                case 5:
                    message.validators.push(reader.string());
                    break;
                case 6:
                    message.minDepositAmount = reader.string();
                    break;
                case 7:
                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.bech32PrefixAccAddr = reader.string();
                    break;
                case 10:
                    message.bech32PrefixValAddr = reader.string();
                    break;
                case 11:
                    message.creatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgRegisterPool {
        const message = { ...baseMsgRegisterPool } as MsgRegisterPool;
        message.validators = [];
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        } else {
            message.chainId = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = '';
        }
        if (object.nativeDenom !== undefined && object.nativeDenom !== null) {
            message.nativeDenom = String(object.nativeDenom);
        } else {
            message.nativeDenom = '';
        }
        if (object.connectionId !== undefined && object.connectionId !== null) {
            message.connectionId = String(object.connectionId);
        } else {
            message.connectionId = '';
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(String(e));
            }
        }
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = String(object.minDepositAmount);
        } else {
            message.minDepositAmount = '';
        }
        if (object.drawSchedule !== undefined && object.drawSchedule !== null) {
            message.drawSchedule = DrawSchedule.fromJSON(object.drawSchedule);
        } else {
            message.drawSchedule = undefined;
        }
        if (object.prizeStrategy !== undefined && object.prizeStrategy !== null) {
            message.prizeStrategy = PrizeStrategy.fromJSON(object.prizeStrategy);
        } else {
            message.prizeStrategy = undefined;
        }
        if (object.bech32PrefixAccAddr !== undefined && object.bech32PrefixAccAddr !== null) {
            message.bech32PrefixAccAddr = String(object.bech32PrefixAccAddr);
        } else {
            message.bech32PrefixAccAddr = '';
        }
        if (object.bech32PrefixValAddr !== undefined && object.bech32PrefixValAddr !== null) {
            message.bech32PrefixValAddr = String(object.bech32PrefixValAddr);
        } else {
            message.bech32PrefixValAddr = '';
        }
        if (object.creatorAddress !== undefined && object.creatorAddress !== null) {
            message.creatorAddress = String(object.creatorAddress);
        } else {
            message.creatorAddress = '';
        }
        return message;
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

    fromPartial(object: DeepPartial<MsgRegisterPool>): MsgRegisterPool {
        const message = { ...baseMsgRegisterPool } as MsgRegisterPool;
        message.chainId = object.chainId ?? '';
        message.denom = object.denom ?? '';
        message.nativeDenom = object.nativeDenom ?? '';
        message.connectionId = object.connectionId ?? '';
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(e);
            }
        }
        message.minDepositAmount = object.minDepositAmount ?? '';
        if (object.drawSchedule !== undefined && object.drawSchedule !== null) {
            message.drawSchedule = DrawSchedule.fromPartial(object.drawSchedule);
        } else {
            message.drawSchedule = undefined;
        }
        if (object.prizeStrategy !== undefined && object.prizeStrategy !== null) {
            message.prizeStrategy = PrizeStrategy.fromPartial(object.prizeStrategy);
        } else {
            message.prizeStrategy = undefined;
        }
        message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? '';
        message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? '';
        message.creatorAddress = object.creatorAddress ?? '';
        return message;
    },
};

const baseMsgRegisterPoolResponse: object = { poolId: Long.UZERO };

export const MsgRegisterPoolResponse = {
    encode(message: MsgRegisterPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPoolResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterPoolResponse } as MsgRegisterPoolResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgRegisterPoolResponse {
        const message = { ...baseMsgRegisterPoolResponse } as MsgRegisterPoolResponse;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: MsgRegisterPoolResponse): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<MsgRegisterPoolResponse>): MsgRegisterPoolResponse {
        const message = { ...baseMsgRegisterPoolResponse } as MsgRegisterPoolResponse;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        return message;
    },
};

const baseMsgUpdatePool: object = { poolId: Long.UZERO, validators: '', minDepositAmount: '', updaterAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
        message.validators = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.validators.push(reader.string());
                    break;
                case 3:
                    message.minDepositAmount = reader.string();
                    break;
                case 4:
                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.updaterAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgUpdatePool {
        const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
        message.validators = [];
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(String(e));
            }
        }
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = String(object.minDepositAmount);
        } else {
            message.minDepositAmount = '';
        }
        if (object.drawSchedule !== undefined && object.drawSchedule !== null) {
            message.drawSchedule = DrawSchedule.fromJSON(object.drawSchedule);
        } else {
            message.drawSchedule = undefined;
        }
        if (object.prizeStrategy !== undefined && object.prizeStrategy !== null) {
            message.prizeStrategy = PrizeStrategy.fromJSON(object.prizeStrategy);
        } else {
            message.prizeStrategy = undefined;
        }
        if (object.updaterAddress !== undefined && object.updaterAddress !== null) {
            message.updaterAddress = String(object.updaterAddress);
        } else {
            message.updaterAddress = '';
        }
        return message;
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

    fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
        const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        message.validators = [];
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(e);
            }
        }
        message.minDepositAmount = object.minDepositAmount ?? '';
        if (object.drawSchedule !== undefined && object.drawSchedule !== null) {
            message.drawSchedule = DrawSchedule.fromPartial(object.drawSchedule);
        } else {
            message.drawSchedule = undefined;
        }
        if (object.prizeStrategy !== undefined && object.prizeStrategy !== null) {
            message.prizeStrategy = PrizeStrategy.fromPartial(object.prizeStrategy);
        } else {
            message.prizeStrategy = undefined;
        }
        message.updaterAddress = object.updaterAddress ?? '';
        return message;
    },
};

const baseMsgUpdatePoolResponse: object = {};

export const MsgUpdatePoolResponse = {
    encode(_: MsgUpdatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgUpdatePoolResponse {
        const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
        return message;
    },

    toJSON(_: MsgUpdatePoolResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
        const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
        return message;
    },
};

const baseMsgDeposit: object = { poolId: Long.UZERO, depositorAddress: '', winnerAddress: '', isSponsor: false };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeposit } as MsgDeposit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                case 4:
                    message.winnerAddress = reader.string();
                    break;
                case 5:
                    message.isSponsor = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgDeposit {
        const message = { ...baseMsgDeposit } as MsgDeposit;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
        }
        if (object.isSponsor !== undefined && object.isSponsor !== null) {
            message.isSponsor = Boolean(object.isSponsor);
        } else {
            message.isSponsor = false;
        }
        return message;
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

    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
        const message = { ...baseMsgDeposit } as MsgDeposit;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        message.depositorAddress = object.depositorAddress ?? '';
        message.winnerAddress = object.winnerAddress ?? '';
        message.isSponsor = object.isSponsor ?? false;
        return message;
    },
};

const baseMsgDepositResponse: object = { depositId: Long.UZERO };

export const MsgDepositResponse = {
    encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.depositId.isZero()) {
            writer.uint32(8).uint64(message.depositId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgDepositResponse {
        const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = Long.fromString(object.depositId);
        } else {
            message.depositId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: MsgDepositResponse): unknown {
        const obj: any = {};
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
        const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = object.depositId as Long;
        } else {
            message.depositId = Long.UZERO;
        }
        return message;
    },
};

const baseMsgDepositRetry: object = { poolId: Long.UZERO, depositId: Long.UZERO, depositorAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositRetry } as MsgDepositRetry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.depositId = reader.uint64() as Long;
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgDepositRetry {
        const message = { ...baseMsgDepositRetry } as MsgDepositRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = Long.fromString(object.depositId);
        } else {
            message.depositId = Long.UZERO;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        return message;
    },

    toJSON(message: MsgDepositRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgDepositRetry>): MsgDepositRetry {
        const message = { ...baseMsgDepositRetry } as MsgDepositRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = object.depositId as Long;
        } else {
            message.depositId = Long.UZERO;
        }
        message.depositorAddress = object.depositorAddress ?? '';
        return message;
    },
};

const baseMsgDepositRetryResponse: object = {};

export const MsgDepositRetryResponse = {
    encode(_: MsgDepositRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositRetryResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositRetryResponse } as MsgDepositRetryResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgDepositRetryResponse {
        const message = { ...baseMsgDepositRetryResponse } as MsgDepositRetryResponse;
        return message;
    },

    toJSON(_: MsgDepositRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgDepositRetryResponse>): MsgDepositRetryResponse {
        const message = { ...baseMsgDepositRetryResponse } as MsgDepositRetryResponse;
        return message;
    },
};

const baseMsgClaimPrize: object = { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO, winnerAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimPrize } as MsgClaimPrize;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 3:
                    message.prizeId = reader.uint64() as Long;
                    break;
                case 4:
                    message.winnerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgClaimPrize {
        const message = { ...baseMsgClaimPrize } as MsgClaimPrize;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
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

    toJSON(message: MsgClaimPrize): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgClaimPrize>): MsgClaimPrize {
        const message = { ...baseMsgClaimPrize } as MsgClaimPrize;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.prizeId !== undefined && object.prizeId !== null) {
            message.prizeId = object.prizeId as Long;
        } else {
            message.prizeId = Long.UZERO;
        }
        message.winnerAddress = object.winnerAddress ?? '';
        return message;
    },
};

const baseMsgClaimPrizeResponse: object = {};

export const MsgClaimPrizeResponse = {
    encode(_: MsgClaimPrizeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimPrizeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimPrizeResponse } as MsgClaimPrizeResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgClaimPrizeResponse {
        const message = { ...baseMsgClaimPrizeResponse } as MsgClaimPrizeResponse;
        return message;
    },

    toJSON(_: MsgClaimPrizeResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgClaimPrizeResponse>): MsgClaimPrizeResponse {
        const message = { ...baseMsgClaimPrizeResponse } as MsgClaimPrizeResponse;
        return message;
    },
};

const baseMsgWithdrawDeposit: object = { poolId: Long.UZERO, depositId: Long.UZERO, depositorAddress: '', toAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawDeposit } as MsgWithdrawDeposit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.depositId = reader.uint64() as Long;
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                case 4:
                    message.toAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDeposit {
        const message = { ...baseMsgWithdrawDeposit } as MsgWithdrawDeposit;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = Long.fromString(object.depositId);
        } else {
            message.depositId = Long.UZERO;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = String(object.toAddress);
        } else {
            message.toAddress = '';
        }
        return message;
    },

    toJSON(message: MsgWithdrawDeposit): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgWithdrawDeposit>): MsgWithdrawDeposit {
        const message = { ...baseMsgWithdrawDeposit } as MsgWithdrawDeposit;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.depositId !== undefined && object.depositId !== null) {
            message.depositId = object.depositId as Long;
        } else {
            message.depositId = Long.UZERO;
        }
        message.depositorAddress = object.depositorAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        return message;
    },
};

const baseMsgWithdrawDepositResponse: object = { withdrawalId: Long.UZERO };

export const MsgWithdrawDepositResponse = {
    encode(message: MsgWithdrawDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.withdrawalId.isZero()) {
            writer.uint32(8).uint64(message.withdrawalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawDepositResponse } as MsgWithdrawDepositResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDepositResponse {
        const message = { ...baseMsgWithdrawDepositResponse } as MsgWithdrawDepositResponse;
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = Long.fromString(object.withdrawalId);
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },

    toJSON(message: MsgWithdrawDepositResponse): unknown {
        const obj: any = {};
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<MsgWithdrawDepositResponse>): MsgWithdrawDepositResponse {
        const message = { ...baseMsgWithdrawDepositResponse } as MsgWithdrawDepositResponse;
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = object.withdrawalId as Long;
        } else {
            message.withdrawalId = Long.UZERO;
        }
        return message;
    },
};

const baseMsgWithdrawDepositRetry: object = { poolId: Long.UZERO, withdrawalId: Long.UZERO, depositorAddress: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawDepositRetry } as MsgWithdrawDepositRetry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawDepositRetry {
        const message = { ...baseMsgWithdrawDepositRetry } as MsgWithdrawDepositRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = Long.fromString(object.withdrawalId);
        } else {
            message.withdrawalId = Long.UZERO;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        return message;
    },

    toJSON(message: MsgWithdrawDepositRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgWithdrawDepositRetry>): MsgWithdrawDepositRetry {
        const message = { ...baseMsgWithdrawDepositRetry } as MsgWithdrawDepositRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = object.withdrawalId as Long;
        } else {
            message.withdrawalId = Long.UZERO;
        }
        message.depositorAddress = object.depositorAddress ?? '';
        return message;
    },
};

const baseMsgWithdrawDepositRetryResponse: object = {};

export const MsgWithdrawDepositRetryResponse = {
    encode(_: MsgWithdrawDepositRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDepositRetryResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawDepositRetryResponse } as MsgWithdrawDepositRetryResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgWithdrawDepositRetryResponse {
        const message = { ...baseMsgWithdrawDepositRetryResponse } as MsgWithdrawDepositRetryResponse;
        return message;
    },

    toJSON(_: MsgWithdrawDepositRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgWithdrawDepositRetryResponse>): MsgWithdrawDepositRetryResponse {
        const message = { ...baseMsgWithdrawDepositRetryResponse } as MsgWithdrawDepositRetryResponse;
        return message;
    },
};

const baseMsgDrawRetry: object = { poolId: Long.UZERO, drawId: Long.UZERO, depositorAddress: '' };

export const MsgDrawRetry = {
    encode(message: MsgDrawRetry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(26).string(message.depositorAddress);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrawRetry } as MsgDrawRetry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.drawId = reader.uint64() as Long;
                    break;
                case 3:
                    message.depositorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgDrawRetry {
        const message = { ...baseMsgDrawRetry } as MsgDrawRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = Long.fromString(object.drawId);
        } else {
            message.drawId = Long.UZERO;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        return message;
    },

    toJSON(message: MsgDrawRetry): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgDrawRetry>): MsgDrawRetry {
        const message = { ...baseMsgDrawRetry } as MsgDrawRetry;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        if (object.drawId !== undefined && object.drawId !== null) {
            message.drawId = object.drawId as Long;
        } else {
            message.drawId = Long.UZERO;
        }
        message.depositorAddress = object.depositorAddress ?? '';
        return message;
    },
};

const baseMsgDrawRetryResponse: object = {};

export const MsgDrawRetryResponse = {
    encode(_: MsgDrawRetryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrawRetryResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrawRetryResponse } as MsgDrawRetryResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MsgDrawRetryResponse {
        const message = { ...baseMsgDrawRetryResponse } as MsgDrawRetryResponse;
        return message;
    },

    toJSON(_: MsgDrawRetryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgDrawRetryResponse>): MsgDrawRetryResponse {
        const message = { ...baseMsgDrawRetryResponse } as MsgDrawRetryResponse;
        return message;
    },
};

export interface Msg {
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    RegisterPool(request: MsgRegisterPool): Promise<MsgRegisterPoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    DepositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse>;
    ClaimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse>;
    WithdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse>;
    WithdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse>;
    DrawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse>;
}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.UpdateParams = this.UpdateParams.bind(this);
        this.RegisterPool = this.RegisterPool.bind(this);
        this.UpdatePool = this.UpdatePool.bind(this);
        this.Deposit = this.Deposit.bind(this);
        this.DepositRetry = this.DepositRetry.bind(this);
        this.ClaimPrize = this.ClaimPrize.bind(this);
        this.WithdrawDeposit = this.WithdrawDeposit.bind(this);
        this.WithdrawDepositRetry = this.WithdrawDepositRetry.bind(this);
        this.DrawRetry = this.DrawRetry.bind(this);
    }
    UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'UpdateParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
    }

    RegisterPool(request: MsgRegisterPool): Promise<MsgRegisterPoolResponse> {
        const data = MsgRegisterPool.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'RegisterPool', data);
        return promise.then((data) => MsgRegisterPoolResponse.decode(new _m0.Reader(data)));
    }

    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
        const data = MsgUpdatePool.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'UpdatePool', data);
        return promise.then((data) => MsgUpdatePoolResponse.decode(new _m0.Reader(data)));
    }

    Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'Deposit', data);
        return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
    }

    DepositRetry(request: MsgDepositRetry): Promise<MsgDepositRetryResponse> {
        const data = MsgDepositRetry.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'DepositRetry', data);
        return promise.then((data) => MsgDepositRetryResponse.decode(new _m0.Reader(data)));
    }

    ClaimPrize(request: MsgClaimPrize): Promise<MsgClaimPrizeResponse> {
        const data = MsgClaimPrize.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'ClaimPrize', data);
        return promise.then((data) => MsgClaimPrizeResponse.decode(new _m0.Reader(data)));
    }

    WithdrawDeposit(request: MsgWithdrawDeposit): Promise<MsgWithdrawDepositResponse> {
        const data = MsgWithdrawDeposit.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'WithdrawDeposit', data);
        return promise.then((data) => MsgWithdrawDepositResponse.decode(new _m0.Reader(data)));
    }

    WithdrawDepositRetry(request: MsgWithdrawDepositRetry): Promise<MsgWithdrawDepositRetryResponse> {
        const data = MsgWithdrawDepositRetry.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'WithdrawDepositRetry', data);
        return promise.then((data) => MsgWithdrawDepositRetryResponse.decode(new _m0.Reader(data)));
    }

    DrawRetry(request: MsgDrawRetry): Promise<MsgDrawRetryResponse> {
        const data = MsgDrawRetry.encode(request).finish();
        const promise = this.rpc.request('lum.network.millions.Msg', 'DrawRetry', data);
        return promise.then((data) => MsgDrawRetryResponse.decode(new _m0.Reader(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
