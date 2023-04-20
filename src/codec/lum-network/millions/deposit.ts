/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export enum DepositState {
    DEPOSIT_STATE_UNSPECIFIED = 0,
    DEPOSIT_STATE_IBC_TRANSFER = 1,
    DEPOSIT_STATE_ICA_DELEGATE = 2,
    DEPOSIT_STATE_SUCCESS = 3,
    DEPOSIT_STATE_FAILURE = 4,
    UNRECOGNIZED = -1,
}

export function depositStateFromJSON(object: any): DepositState {
    switch (object) {
        case 0:
        case 'DEPOSIT_STATE_UNSPECIFIED':
            return DepositState.DEPOSIT_STATE_UNSPECIFIED;
        case 1:
        case 'DEPOSIT_STATE_IBC_TRANSFER':
            return DepositState.DEPOSIT_STATE_IBC_TRANSFER;
        case 2:
        case 'DEPOSIT_STATE_ICA_DELEGATE':
            return DepositState.DEPOSIT_STATE_ICA_DELEGATE;
        case 3:
        case 'DEPOSIT_STATE_SUCCESS':
            return DepositState.DEPOSIT_STATE_SUCCESS;
        case 4:
        case 'DEPOSIT_STATE_FAILURE':
            return DepositState.DEPOSIT_STATE_FAILURE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DepositState.UNRECOGNIZED;
    }
}

export function depositStateToJSON(object: DepositState): string {
    switch (object) {
        case DepositState.DEPOSIT_STATE_UNSPECIFIED:
            return 'DEPOSIT_STATE_UNSPECIFIED';
        case DepositState.DEPOSIT_STATE_IBC_TRANSFER:
            return 'DEPOSIT_STATE_IBC_TRANSFER';
        case DepositState.DEPOSIT_STATE_ICA_DELEGATE:
            return 'DEPOSIT_STATE_ICA_DELEGATE';
        case DepositState.DEPOSIT_STATE_SUCCESS:
            return 'DEPOSIT_STATE_SUCCESS';
        case DepositState.DEPOSIT_STATE_FAILURE:
            return 'DEPOSIT_STATE_FAILURE';
        default:
            return 'UNKNOWN';
    }
}

export interface Deposit {
    poolId: Long;
    depositId: Long;
    state: DepositState;
    errorState: DepositState;
    depositorAddress: string;
    amount?: Coin;
    winnerAddress: string;
    isSponsor: boolean;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt?: Date;
    updatedAt?: Date;
}

const baseDeposit: object = {
    poolId: Long.UZERO,
    depositId: Long.UZERO,
    state: 0,
    errorState: 0,
    depositorAddress: '',
    winnerAddress: '',
    isSponsor: false,
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
};

export const Deposit = {
    encode(message: Deposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.errorState !== 0) {
            writer.uint32(32).int32(message.errorState);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(42).string(message.depositorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (message.winnerAddress !== '') {
            writer.uint32(58).string(message.winnerAddress);
        }
        if (message.isSponsor === true) {
            writer.uint32(64).bool(message.isSponsor);
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(80).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(88).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDeposit } as Deposit;
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
                    message.state = reader.int32() as any;
                    break;
                case 4:
                    message.errorState = reader.int32() as any;
                    break;
                case 5:
                    message.depositorAddress = reader.string();
                    break;
                case 6:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.winnerAddress = reader.string();
                    break;
                case 8:
                    message.isSponsor = reader.bool();
                    break;
                case 10:
                    message.createdAtHeight = reader.int64() as Long;
                    break;
                case 11:
                    message.updatedAtHeight = reader.int64() as Long;
                    break;
                case 12:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Deposit {
        const message = { ...baseDeposit } as Deposit;
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
        if (object.state !== undefined && object.state !== null) {
            message.state = depositStateFromJSON(object.state);
        } else {
            message.state = 0;
        }
        if (object.errorState !== undefined && object.errorState !== null) {
            message.errorState = depositStateFromJSON(object.errorState);
        } else {
            message.errorState = 0;
        }
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
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

    toJSON(message: Deposit): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.state !== undefined && (obj.state = depositStateToJSON(message.state));
        message.errorState !== undefined && (obj.errorState = depositStateToJSON(message.errorState));
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.isSponsor !== undefined && (obj.isSponsor = message.isSponsor);
        message.createdAtHeight !== undefined && (obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString());
        message.updatedAtHeight !== undefined && (obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Deposit>): Deposit {
        const message = { ...baseDeposit } as Deposit;
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
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        message.winnerAddress = object.winnerAddress ?? '';
        message.isSponsor = object.isSponsor ?? false;
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
