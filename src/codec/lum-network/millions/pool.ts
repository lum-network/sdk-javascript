/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';
import { DrawState, drawStateFromJSON, drawStateToJSON } from './draw';
import { DrawSchedule } from './draw_schedule';
import { PrizeStrategy } from './prize_strategy';

export const protobufPackage = 'lum.network.millions';

/**
 * PoolState the state of a Pool
 * Deposits are only accepted for Pools in a Ready state
 *
 * TODO:
 * Pool states PAUSED and KILLED are not available in the current implementation
 * Introduce the capability to:
 * - Pause a Pool in case of Interchain issues or via Governance proposal
 * - Kill a Pool and withdraw or migrate all deposits to another Pool via Governance proposal
 */
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
        case PoolState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface Pool {
    poolId: Long;
    denom: string;
    nativeDenom: string;
    chainId: string;
    connectionId: string;
    transferChannelId: string;
    icaDepositPortId: string;
    icaPrizepoolPortId: string;
    validators: PoolValidator[];
    bech32PrefixAccAddr: string;
    bech32PrefixValAddr: string;
    minDepositAmount: string;
    drawSchedule?: DrawSchedule;
    prizeStrategy?: PrizeStrategy;
    localAddress: string;
    icaDepositAddress: string;
    icaPrizepoolAddress: string;
    nextDrawId: Long;
    tvlAmount: string;
    depositorsCount: Long;
    sponsorshipAmount: string;
    lastDrawCreatedAt?: Date;
    lastDrawState: DrawState;
    availablePrizePool?: Coin;
    state: PoolState;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PoolValidator {
    operatorAddress: string;
    isEnabled: boolean;
    bondedAmount: string;
}

function createBasePool(): Pool {
    return {
        poolId: Long.UZERO,
        denom: '',
        nativeDenom: '',
        chainId: '',
        connectionId: '',
        transferChannelId: '',
        icaDepositPortId: '',
        icaPrizepoolPortId: '',
        validators: [],
        bech32PrefixAccAddr: '',
        bech32PrefixValAddr: '',
        minDepositAmount: '',
        drawSchedule: undefined,
        prizeStrategy: undefined,
        localAddress: '',
        icaDepositAddress: '',
        icaPrizepoolAddress: '',
        nextDrawId: Long.UZERO,
        tvlAmount: '',
        depositorsCount: Long.UZERO,
        sponsorshipAmount: '',
        lastDrawCreatedAt: undefined,
        lastDrawState: 0,
        availablePrizePool: undefined,
        state: 0,
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        createdAt: undefined,
        updatedAt: undefined,
    };
}

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
        if (message.icaDepositPortId !== '') {
            writer.uint32(58).string(message.icaDepositPortId);
        }
        if (message.icaPrizepoolPortId !== '') {
            writer.uint32(66).string(message.icaPrizepoolPortId);
        }
        for (const v of message.validators) {
            PoolValidator.encode(v!, writer.uint32(82).fork()).ldelim();
        }
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
        if (message.localAddress !== '') {
            writer.uint32(146).string(message.localAddress);
        }
        if (message.icaDepositAddress !== '') {
            writer.uint32(154).string(message.icaDepositAddress);
        }
        if (message.icaPrizepoolAddress !== '') {
            writer.uint32(162).string(message.icaPrizepoolAddress);
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
        if (message.sponsorshipAmount !== '') {
            writer.uint32(202).string(message.sponsorshipAmount);
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
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

                    message.chainId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.connectionId = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.transferChannelId = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.icaDepositPortId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.icaPrizepoolPortId = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.validators.push(PoolValidator.decode(reader, reader.uint32()));
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

                    message.minDepositAmount = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }

                    message.drawSchedule = DrawSchedule.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }

                    message.prizeStrategy = PrizeStrategy.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }

                    message.localAddress = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }

                    message.icaDepositAddress = reader.string();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }

                    message.icaPrizepoolAddress = reader.string();
                    continue;
                case 22:
                    if (tag !== 176) {
                        break;
                    }

                    message.nextDrawId = reader.uint64() as Long;
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }

                    message.tvlAmount = reader.string();
                    continue;
                case 24:
                    if (tag !== 192) {
                        break;
                    }

                    message.depositorsCount = reader.uint64() as Long;
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }

                    message.sponsorshipAmount = reader.string();
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }

                    message.lastDrawCreatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 28:
                    if (tag !== 224) {
                        break;
                    }

                    message.lastDrawState = reader.int32() as any;
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }

                    message.availablePrizePool = Coin.decode(reader, reader.uint32());
                    continue;
                case 32:
                    if (tag !== 256) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 33:
                    if (tag !== 264) {
                        break;
                    }

                    message.createdAtHeight = reader.int64() as Long;
                    continue;
                case 34:
                    if (tag !== 272) {
                        break;
                    }

                    message.updatedAtHeight = reader.int64() as Long;
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }

                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 36:
                    if (tag !== 290) {
                        break;
                    }

                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Pool {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            denom: isSet(object.denom) ? String(object.denom) : '',
            nativeDenom: isSet(object.nativeDenom) ? String(object.nativeDenom) : '',
            chainId: isSet(object.chainId) ? String(object.chainId) : '',
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : '',
            transferChannelId: isSet(object.transferChannelId) ? String(object.transferChannelId) : '',
            icaDepositPortId: isSet(object.icaDepositPortId) ? String(object.icaDepositPortId) : '',
            icaPrizepoolPortId: isSet(object.icaPrizepoolPortId) ? String(object.icaPrizepoolPortId) : '',
            validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => PoolValidator.fromJSON(e)) : [],
            bech32PrefixAccAddr: isSet(object.bech32PrefixAccAddr) ? String(object.bech32PrefixAccAddr) : '',
            bech32PrefixValAddr: isSet(object.bech32PrefixValAddr) ? String(object.bech32PrefixValAddr) : '',
            minDepositAmount: isSet(object.minDepositAmount) ? String(object.minDepositAmount) : '',
            drawSchedule: isSet(object.drawSchedule) ? DrawSchedule.fromJSON(object.drawSchedule) : undefined,
            prizeStrategy: isSet(object.prizeStrategy) ? PrizeStrategy.fromJSON(object.prizeStrategy) : undefined,
            localAddress: isSet(object.localAddress) ? String(object.localAddress) : '',
            icaDepositAddress: isSet(object.icaDepositAddress) ? String(object.icaDepositAddress) : '',
            icaPrizepoolAddress: isSet(object.icaPrizepoolAddress) ? String(object.icaPrizepoolAddress) : '',
            nextDrawId: isSet(object.nextDrawId) ? Long.fromValue(object.nextDrawId) : Long.UZERO,
            tvlAmount: isSet(object.tvlAmount) ? String(object.tvlAmount) : '',
            depositorsCount: isSet(object.depositorsCount) ? Long.fromValue(object.depositorsCount) : Long.UZERO,
            sponsorshipAmount: isSet(object.sponsorshipAmount) ? String(object.sponsorshipAmount) : '',
            lastDrawCreatedAt: isSet(object.lastDrawCreatedAt) ? fromJsonTimestamp(object.lastDrawCreatedAt) : undefined,
            lastDrawState: isSet(object.lastDrawState) ? drawStateFromJSON(object.lastDrawState) : 0,
            availablePrizePool: isSet(object.availablePrizePool) ? Coin.fromJSON(object.availablePrizePool) : undefined,
            state: isSet(object.state) ? poolStateFromJSON(object.state) : 0,
            createdAtHeight: isSet(object.createdAtHeight) ? Long.fromValue(object.createdAtHeight) : Long.ZERO,
            updatedAtHeight: isSet(object.updatedAtHeight) ? Long.fromValue(object.updatedAtHeight) : Long.ZERO,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },

    toJSON(message: Pool): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        message.nativeDenom !== undefined && (obj.nativeDenom = message.nativeDenom);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.transferChannelId !== undefined && (obj.transferChannelId = message.transferChannelId);
        message.icaDepositPortId !== undefined && (obj.icaDepositPortId = message.icaDepositPortId);
        message.icaPrizepoolPortId !== undefined && (obj.icaPrizepoolPortId = message.icaPrizepoolPortId);
        if (message.validators) {
            obj.validators = message.validators.map((e) => (e ? PoolValidator.toJSON(e) : undefined));
        } else {
            obj.validators = [];
        }
        message.bech32PrefixAccAddr !== undefined && (obj.bech32PrefixAccAddr = message.bech32PrefixAccAddr);
        message.bech32PrefixValAddr !== undefined && (obj.bech32PrefixValAddr = message.bech32PrefixValAddr);
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        message.drawSchedule !== undefined && (obj.drawSchedule = message.drawSchedule ? DrawSchedule.toJSON(message.drawSchedule) : undefined);
        message.prizeStrategy !== undefined && (obj.prizeStrategy = message.prizeStrategy ? PrizeStrategy.toJSON(message.prizeStrategy) : undefined);
        message.localAddress !== undefined && (obj.localAddress = message.localAddress);
        message.icaDepositAddress !== undefined && (obj.icaDepositAddress = message.icaDepositAddress);
        message.icaPrizepoolAddress !== undefined && (obj.icaPrizepoolAddress = message.icaPrizepoolAddress);
        message.nextDrawId !== undefined && (obj.nextDrawId = (message.nextDrawId || Long.UZERO).toString());
        message.tvlAmount !== undefined && (obj.tvlAmount = message.tvlAmount);
        message.depositorsCount !== undefined && (obj.depositorsCount = (message.depositorsCount || Long.UZERO).toString());
        message.sponsorshipAmount !== undefined && (obj.sponsorshipAmount = message.sponsorshipAmount);
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

    create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool {
        return Pool.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
        const message = createBasePool();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.denom = object.denom ?? '';
        message.nativeDenom = object.nativeDenom ?? '';
        message.chainId = object.chainId ?? '';
        message.connectionId = object.connectionId ?? '';
        message.transferChannelId = object.transferChannelId ?? '';
        message.icaDepositPortId = object.icaDepositPortId ?? '';
        message.icaPrizepoolPortId = object.icaPrizepoolPortId ?? '';
        message.validators = object.validators?.map((e) => PoolValidator.fromPartial(e)) || [];
        message.bech32PrefixAccAddr = object.bech32PrefixAccAddr ?? '';
        message.bech32PrefixValAddr = object.bech32PrefixValAddr ?? '';
        message.minDepositAmount = object.minDepositAmount ?? '';
        message.drawSchedule = object.drawSchedule !== undefined && object.drawSchedule !== null ? DrawSchedule.fromPartial(object.drawSchedule) : undefined;
        message.prizeStrategy = object.prizeStrategy !== undefined && object.prizeStrategy !== null ? PrizeStrategy.fromPartial(object.prizeStrategy) : undefined;
        message.localAddress = object.localAddress ?? '';
        message.icaDepositAddress = object.icaDepositAddress ?? '';
        message.icaPrizepoolAddress = object.icaPrizepoolAddress ?? '';
        message.nextDrawId = object.nextDrawId !== undefined && object.nextDrawId !== null ? Long.fromValue(object.nextDrawId) : Long.UZERO;
        message.tvlAmount = object.tvlAmount ?? '';
        message.depositorsCount = object.depositorsCount !== undefined && object.depositorsCount !== null ? Long.fromValue(object.depositorsCount) : Long.UZERO;
        message.sponsorshipAmount = object.sponsorshipAmount ?? '';
        message.lastDrawCreatedAt = object.lastDrawCreatedAt ?? undefined;
        message.lastDrawState = object.lastDrawState ?? 0;
        message.availablePrizePool = object.availablePrizePool !== undefined && object.availablePrizePool !== null ? Coin.fromPartial(object.availablePrizePool) : undefined;
        message.state = object.state ?? 0;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

function createBasePoolValidator(): PoolValidator {
    return { operatorAddress: '', isEnabled: false, bondedAmount: '' };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.operatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.isEnabled = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.bondedAmount = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PoolValidator {
        return {
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : '',
            isEnabled: isSet(object.isEnabled) ? Boolean(object.isEnabled) : false,
            bondedAmount: isSet(object.bondedAmount) ? String(object.bondedAmount) : '',
        };
    },

    toJSON(message: PoolValidator): unknown {
        const obj: any = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.isEnabled !== undefined && (obj.isEnabled = message.isEnabled);
        message.bondedAmount !== undefined && (obj.bondedAmount = message.bondedAmount);
        return obj;
    },

    create<I extends Exact<DeepPartial<PoolValidator>, I>>(base?: I): PoolValidator {
        return PoolValidator.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PoolValidator>, I>>(object: I): PoolValidator {
        const message = createBasePoolValidator();
        message.operatorAddress = object.operatorAddress ?? '';
        message.isEnabled = object.isEnabled ?? false;
        message.bondedAmount = object.bondedAmount ?? '';
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

function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = (t.seconds.toNumber() || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
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

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
