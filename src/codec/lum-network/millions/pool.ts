/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { DrawSchedule } from '../../lum-network/millions/draw_schedule';
import { PrizeStrategy } from '../../lum-network/millions/prize_strategy';
import { DrawState, drawStateFromJSON, drawStateToJSON } from '../../lum-network/millions/draw';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export enum PoolState {
    POOL_STATE_UNSPECIFIED = 0,
    POOL_STATE_CREATED = 1,
    POOL_STATE_READY = 2,
    POOL_STATE_PAUSED = 3,
    POOL_STATE_KILLED = 4,
    UNRECOGNIZED = -1,
}

export function poolStateFromJSON(object: any): PoolState {
    switch (object) {
        case 0:
        case 'POOL_STATE_UNSPECIFIED':
            return PoolState.POOL_STATE_UNSPECIFIED;
        case 1:
        case 'POOL_STATE_CREATED':
            return PoolState.POOL_STATE_CREATED;
        case 2:
        case 'POOL_STATE_READY':
            return PoolState.POOL_STATE_READY;
        case 3:
        case 'POOL_STATE_PAUSED':
            return PoolState.POOL_STATE_PAUSED;
        case 4:
        case 'POOL_STATE_KILLED':
            return PoolState.POOL_STATE_KILLED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PoolState.UNRECOGNIZED;
    }
}

export function poolStateToJSON(object: PoolState): string {
    switch (object) {
        case PoolState.POOL_STATE_UNSPECIFIED:
            return 'POOL_STATE_UNSPECIFIED';
        case PoolState.POOL_STATE_CREATED:
            return 'POOL_STATE_CREATED';
        case PoolState.POOL_STATE_READY:
            return 'POOL_STATE_READY';
        case PoolState.POOL_STATE_PAUSED:
            return 'POOL_STATE_PAUSED';
        case PoolState.POOL_STATE_KILLED:
            return 'POOL_STATE_KILLED';
        default:
            return 'UNKNOWN';
    }
}

export interface Pool {
    poolId: Long;
    denom: string;
    nativeDenom: string;
    chainId: string;
    connectionId: string;
    transferChannelId: string;
    controllerPortId: string;
    validators: { [key: string]: PoolValidator };
    bech32PrefixAccAddr: string;
    bech32PrefixValAddr: string;
    minDepositAmount: string;
    drawSchedule?: DrawSchedule;
    prizeStrategy?: PrizeStrategy;
    moduleAccountAddress: string;
    icaAccountAddress: string;
    nextDrawId: Long;
    tvlAmount: string;
    depositorsCount: Long;
    lastDrawCreatedAt?: Date;
    lastDrawState: DrawState;
    availablePrizePool?: Coin;
    state: PoolState;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Pool_ValidatorsEntry {
    key: string;
    value?: PoolValidator;
}

export interface PoolValidator {
    operatorAddress: string;
    isEnabled: boolean;
    bondedAmount: string;
}

const basePool: object = {
    poolId: Long.UZERO,
    denom: '',
    nativeDenom: '',
    chainId: '',
    connectionId: '',
    transferChannelId: '',
    controllerPortId: '',
    bech32PrefixAccAddr: '',
    bech32PrefixValAddr: '',
    minDepositAmount: '',
    moduleAccountAddress: '',
    icaAccountAddress: '',
    nextDrawId: Long.UZERO,
    tvlAmount: '',
    depositorsCount: Long.UZERO,
    lastDrawState: 0,
    state: 0,
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
};

export const Pool = {
    encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.nativeDenom !== '') {
            writer.uint32(26).string(message.nativeDenom);
        }
        if (message.chainId !== '') {
            writer.uint32(34).string(message.chainId);
        }
        if (message.connectionId !== '') {
            writer.uint32(42).string(message.connectionId);
        }
        if (message.transferChannelId !== '') {
            writer.uint32(50).string(message.transferChannelId);
        }
        if (message.controllerPortId !== '') {
            writer.uint32(58).string(message.controllerPortId);
        }
        Object.entries(message.validators).forEach(([key, value]) => {
            Pool_ValidatorsEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
        });
        if (message.bech32PrefixAccAddr !== '') {
            writer.uint32(90).string(message.bech32PrefixAccAddr);
        }
        if (message.bech32PrefixValAddr !== '') {
            writer.uint32(98).string(message.bech32PrefixValAddr);
        }
        if (message.minDepositAmount !== '') {
            writer.uint32(106).string(message.minDepositAmount);
        }
        if (message.drawSchedule !== undefined) {
            DrawSchedule.encode(message.drawSchedule, writer.uint32(114).fork()).ldelim();
        }
        if (message.prizeStrategy !== undefined) {
            PrizeStrategy.encode(message.prizeStrategy, writer.uint32(122).fork()).ldelim();
        }
        if (message.moduleAccountAddress !== '') {
            writer.uint32(146).string(message.moduleAccountAddress);
        }
        if (message.icaAccountAddress !== '') {
            writer.uint32(154).string(message.icaAccountAddress);
        }
        if (!message.nextDrawId.isZero()) {
            writer.uint32(176).uint64(message.nextDrawId);
        }
        if (message.tvlAmount !== '') {
            writer.uint32(186).string(message.tvlAmount);
        }
        if (!message.depositorsCount.isZero()) {
            writer.uint32(192).uint64(message.depositorsCount);
        }
        if (message.lastDrawCreatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDrawCreatedAt), writer.uint32(218).fork()).ldelim();
        }
        if (message.lastDrawState !== 0) {
            writer.uint32(224).int32(message.lastDrawState);
        }
        if (message.availablePrizePool !== undefined) {
            Coin.encode(message.availablePrizePool, writer.uint32(234).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(256).int32(message.state);
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(264).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(272).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(282).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(290).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePool } as Pool;
        message.validators = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.nativeDenom = reader.string();
                    break;
                case 4:
                    message.chainId = reader.string();
                    break;
                case 5:
                    message.connectionId = reader.string();
                    break;
                case 6:
                    message.transferChannelId = reader.string();
                    break;
                case 7:
                    message.controllerPortId = reader.string();
                    break;
                case 10:
                    const entry10 = Pool_ValidatorsEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.validators[entry10.key] = entry10.value;
                    }
                    break;
                case 11:
                    message.bech32PrefixAccAddr = reader.string();
                    break;
                case 12:
                    message.bech32PrefixValAddr = reader.string();
                    break;
                case 13:
                    message.minDepositAmount = reader.string();
                    break;
                case 14:
                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.moduleAccountAddress = reader.string();
                    break;
                case 19:
                    message.icaAccountAddress = reader.string();
                    break;
                case 22:
                    message.nextDrawId = reader.uint64() as Long;
                    break;
                case 23:
                    message.tvlAmount = reader.string();
                    break;
                case 24:
                    message.depositorsCount = reader.uint64() as Long;
                    break;
                case 27:
                    message.lastDrawCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 28:
                    message.lastDrawState = reader.int32() as any;
                    break;
                case 29:
                    message.availablePrizePool = Coin.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.state = reader.int32() as any;
                    break;
                case 33:
                    message.createdAtHeight = reader.int64() as Long;
                    break;
                case 34:
                    message.updatedAtHeight = reader.int64() as Long;
                    break;
                case 35:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 36:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Pool {
        const message = { ...basePool } as Pool;
        message.validators = {};
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = Long.fromString(object.poolId);
        } else {
            message.poolId = Long.UZERO;
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
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        } else {
            message.chainId = '';
        }
        if (object.connectionId !== undefined && object.connectionId !== null) {
            message.connectionId = String(object.connectionId);
        } else {
            message.connectionId = '';
        }
        if (object.transferChannelId !== undefined && object.transferChannelId !== null) {
            message.transferChannelId = String(object.transferChannelId);
        } else {
            message.transferChannelId = '';
        }
        if (object.controllerPortId !== undefined && object.controllerPortId !== null) {
            message.controllerPortId = String(object.controllerPortId);
        } else {
            message.controllerPortId = '';
        }
        if (object.validators !== undefined && object.validators !== null) {
            Object.entries(object.validators).forEach(([key, value]) => {
                message.validators[key] = PoolValidator.fromJSON(value);
            });
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
        if (object.moduleAccountAddress !== undefined && object.moduleAccountAddress !== null) {
            message.moduleAccountAddress = String(object.moduleAccountAddress);
        } else {
            message.moduleAccountAddress = '';
        }
        if (object.icaAccountAddress !== undefined && object.icaAccountAddress !== null) {
            message.icaAccountAddress = String(object.icaAccountAddress);
        } else {
            message.icaAccountAddress = '';
        }
        if (object.nextDrawId !== undefined && object.nextDrawId !== null) {
            message.nextDrawId = Long.fromString(object.nextDrawId);
        } else {
            message.nextDrawId = Long.UZERO;
        }
        if (object.tvlAmount !== undefined && object.tvlAmount !== null) {
            message.tvlAmount = String(object.tvlAmount);
        } else {
            message.tvlAmount = '';
        }
        if (object.depositorsCount !== undefined && object.depositorsCount !== null) {
            message.depositorsCount = Long.fromString(object.depositorsCount);
        } else {
            message.depositorsCount = Long.UZERO;
        }
        if (object.lastDrawCreatedAt !== undefined && object.lastDrawCreatedAt !== null) {
            message.lastDrawCreatedAt = fromJsonTimestamp(object.lastDrawCreatedAt);
        } else {
            message.lastDrawCreatedAt = undefined;
        }
        if (object.lastDrawState !== undefined && object.lastDrawState !== null) {
            message.lastDrawState = drawStateFromJSON(object.lastDrawState);
        } else {
            message.lastDrawState = 0;
        }
        if (object.availablePrizePool !== undefined && object.availablePrizePool !== null) {
            message.availablePrizePool = Coin.fromJSON(object.availablePrizePool);
        } else {
            message.availablePrizePool = undefined;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = poolStateFromJSON(object.state);
        } else {
            message.state = 0;
        }
        if (object.createdAtHeight !== undefined && object.createdAtHeight !== null) {
            message.createdAtHeight = Long.fromString(object.createdAtHeight);
        } else {
            message.createdAtHeight = Long.ZERO;
        }
        if (object.updatedAtHeight !== undefined && object.updatedAtHeight !== null) {
            message.updatedAtHeight = Long.fromString(object.updatedAtHeight);
        } else {
            message.updatedAtHeight = Long.ZERO;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.updatedAt !== undefined && object.updatedAt !== null) {
            message.updatedAt = fromJsonTimestamp(object.updatedAt);
        } else {
            message.updatedAt = undefined;
        }
        return message;
    },

    toJSON(message: Pool): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        message.nativeDenom !== undefined && (obj.nativeDenom = message.nativeDenom);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
        message.controllerPortId !== undefined && (obj.controllerPortId = message.controllerPortId);
        obj.validators = {};
        if (message.validators) {
            Object.entries(message.validators).forEach(([k, v]) => {
                obj.validators[k] = PoolValidator.toJSON(v);
            });
        }
        message.bech32PrefixAccAddr !== undefined && (obj.bech32PrefixAccAddr = message.bech32PrefixAccAddr);
        message.bech32PrefixValAddr !== undefined && (obj.bech32PrefixValAddr = message.bech32PrefixValAddr);
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.drawSchedule !== undefined && (obj.drawSchedule = message.drawSchedule ? DrawSchedule.toJSON(message.drawSchedule) : undefined);
        message.prizeStrategy !== undefined && (obj.prizeStrategy = message.prizeStrategy ? PrizeStrategy.toJSON(message.prizeStrategy) : undefined);
        message.moduleAccountAddress !== undefined && (obj.moduleAccountAddress = message.moduleAccountAddress);
        message.icaAccountAddress !== undefined && (obj.icaAccountAddress = message.icaAccountAddress);
        message.nextDrawId !== undefined && (obj.nextDrawId = (message.nextDrawId || Long.UZERO).toString());
        message.tvlAmount !== undefined && (obj.tvlAmount = message.tvlAmount);
        message.depositorsCount !== undefined && (obj.depositorsCount = (message.depositorsCount || Long.UZERO).toString());
        message.lastDrawCreatedAt !== undefined && (obj.lastDrawCreatedAt = message.lastDrawCreatedAt.toISOString());
        message.lastDrawState !== undefined && (obj.lastDrawState = drawStateToJSON(message.lastDrawState));
        message.availablePrizePool !== undefined && (obj.availablePrizePool = message.availablePrizePool ? Coin.toJSON(message.availablePrizePool) : undefined);
        message.state !== undefined && (obj.state = poolStateToJSON(message.state));
        message.createdAtHeight !== undefined && (obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString());
        message.updatedAtHeight !== undefined && (obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Pool>): Pool {
        const message = { ...basePool } as Pool;
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId as Long;
        } else {
            message.poolId = Long.UZERO;
        }
        message.denom = object.denom ?? '';
        message.nativeDenom = object.nativeDenom ?? '';
        message.chainId = object.chainId ?? '';
        message.connectionId = object.connectionId ?? '';
        message.transferChannelId = object.transferChannelId ?? '';
        message.controllerPortId = object.controllerPortId ?? '';
        message.validators = {};
        if (object.validators !== undefined && object.validators !== null) {
            Object.entries(object.validators).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.validators[key] = PoolValidator.fromPartial(value);
                }
            });
        }
        message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? '';
        message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? '';
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
        message.moduleAccountAddress = object.moduleAccountAddress ?? '';
        message.icaAccountAddress = object.icaAccountAddress ?? '';
        if (object.nextDrawId !== undefined && object.nextDrawId !== null) {
            message.nextDrawId = object.nextDrawId as Long;
        } else {
            message.nextDrawId = Long.UZERO;
        }
        message.tvlAmount = object.tvlAmount ?? '';
        if (object.depositorsCount !== undefined && object.depositorsCount !== null) {
            message.depositorsCount = object.depositorsCount as Long;
        } else {
            message.depositorsCount = Long.UZERO;
        }
        message.lastDrawCreatedAt = object.lastDrawCreatedAt ?? undefined;
        message.lastDrawState = object.lastDrawState ?? 0;
        if (object.availablePrizePool !== undefined && object.availablePrizePool !== null) {
            message.availablePrizePool = Coin.fromPartial(object.availablePrizePool);
        } else {
            message.availablePrizePool = undefined;
        }
        message.state = object.state ?? 0;
        if (object.createdAtHeight !== undefined && object.createdAtHeight !== null) {
            message.createdAtHeight = object.createdAtHeight as Long;
        } else {
            message.createdAtHeight = Long.ZERO;
        }
        if (object.updatedAtHeight !== undefined && object.updatedAtHeight !== null) {
            message.updatedAtHeight = object.updatedAtHeight as Long;
        } else {
            message.updatedAtHeight = Long.ZERO;
        }
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const basePool_ValidatorsEntry: object = { key: '' };

export const Pool_ValidatorsEntry = {
    encode(message: Pool_ValidatorsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            PoolValidator.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Pool_ValidatorsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePool_ValidatorsEntry } as Pool_ValidatorsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = PoolValidator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Pool_ValidatorsEntry {
        const message = { ...basePool_ValidatorsEntry } as Pool_ValidatorsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = PoolValidator.fromJSON(object.value);
        } else {
            message.value = undefined;
        }
        return message;
    },

    toJSON(message: Pool_ValidatorsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? PoolValidator.toJSON(message.value) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Pool_ValidatorsEntry>): Pool_ValidatorsEntry {
        const message = { ...basePool_ValidatorsEntry } as Pool_ValidatorsEntry;
        message.key = object.key ?? '';
        if (object.value !== undefined && object.value !== null) {
            message.value = PoolValidator.fromPartial(object.value);
        } else {
            message.value = undefined;
        }
        return message;
    },
};

const basePoolValidator: object = { operatorAddress: '', isEnabled: false, bondedAmount: '' };

export const PoolValidator = {
    encode(message: PoolValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.operatorAddress !== '') {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.isEnabled === true) {
            writer.uint32(16).bool(message.isEnabled);
        }
        if (message.bondedAmount !== '') {
            writer.uint32(26).string(message.bondedAmount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PoolValidator {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePoolValidator } as PoolValidator;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.isEnabled = reader.bool();
                    break;
                case 3:
                    message.bondedAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PoolValidator {
        const message = { ...basePoolValidator } as PoolValidator;
        if (object.operatorAddress !== undefined && object.operatorAddress !== null) {
            message.operatorAddress = String(object.operatorAddress);
        } else {
            message.operatorAddress = '';
        }
        if (object.isEnabled !== undefined && object.isEnabled !== null) {
            message.isEnabled = Boolean(object.isEnabled);
        } else {
            message.isEnabled = false;
        }
        if (object.bondedAmount !== undefined && object.bondedAmount !== null) {
            message.bondedAmount = String(object.bondedAmount);
        } else {
            message.bondedAmount = '';
        }
        return message;
    },

    toJSON(message: PoolValidator): unknown {
        const obj: any = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
        return obj;
    },

    fromPartial(object: DeepPartial<PoolValidator>): PoolValidator {
        const message = { ...basePoolValidator } as PoolValidator;
        message.operatorAddress = object.operatorAddress ?? '';
        message.isEnabled = object.isEnabled ?? false;
        message.bondedAmount = object.bondedAmount ?? '';
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

function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds.toNumber() * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function numberToLong(number: number) {
    return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
