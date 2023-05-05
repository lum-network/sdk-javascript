/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export enum WithdrawalState {
    WITHDRAWAL_STATE_UNSPECIFIED = 0,
    WITHDRAWAL_STATE_ICA_UNDELEGATE = 1,
    WITHDRAWAL_STATE_ICA_UNBONDING = 2,
    WITHDRAWAL_STATE_IBC_TRANSFER = 3,
    WITHDRAWAL_STATE_FAILURE = 4,
    UNRECOGNIZED = -1,
}

export function withdrawalStateFromJSON(object: any): WithdrawalState {
    switch (object) {
        case 0:
        case 'WITHDRAWAL_STATE_UNSPECIFIED':
            return WithdrawalState.WITHDRAWAL_STATE_UNSPECIFIED;
        case 1:
        case 'WITHDRAWAL_STATE_ICA_UNDELEGATE':
            return WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE;
        case 2:
        case 'WITHDRAWAL_STATE_ICA_UNBONDING':
            return WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING;
        case 3:
        case 'WITHDRAWAL_STATE_IBC_TRANSFER':
            return WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER;
        case 4:
        case 'WITHDRAWAL_STATE_FAILURE':
            return WithdrawalState.WITHDRAWAL_STATE_FAILURE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return WithdrawalState.UNRECOGNIZED;
    }
}

export function withdrawalStateToJSON(object: WithdrawalState): string {
    switch (object) {
        case WithdrawalState.WITHDRAWAL_STATE_UNSPECIFIED:
            return 'WITHDRAWAL_STATE_UNSPECIFIED';
        case WithdrawalState.WITHDRAWAL_STATE_ICA_UNDELEGATE:
            return 'WITHDRAWAL_STATE_ICA_UNDELEGATE';
        case WithdrawalState.WITHDRAWAL_STATE_ICA_UNBONDING:
            return 'WITHDRAWAL_STATE_ICA_UNBONDING';
        case WithdrawalState.WITHDRAWAL_STATE_IBC_TRANSFER:
            return 'WITHDRAWAL_STATE_IBC_TRANSFER';
        case WithdrawalState.WITHDRAWAL_STATE_FAILURE:
            return 'WITHDRAWAL_STATE_FAILURE';
        default:
            return 'UNKNOWN';
    }
}

export interface Withdrawal {
    poolId: Long;
    depositId: Long;
    withdrawalId: Long;
    state: WithdrawalState;
    errorState: WithdrawalState;
    depositorAddress: string;
    toAddress: string;
    amount?: Coin;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    unbondingEndsAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface WithdrawalIDs {
    poolId: Long;
    withdrawalId: Long;
}

export interface WithdrawalIDsCollection {
    withdrawalsIds: WithdrawalIDs[];
}

const baseWithdrawal: object = {
    poolId: Long.UZERO,
    depositId: Long.UZERO,
    withdrawalId: Long.UZERO,
    state: 0,
    errorState: 0,
    depositorAddress: '',
    toAddress: '',
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
};

export const Withdrawal = {
    encode(message: Withdrawal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.depositId.isZero()) {
            writer.uint32(16).uint64(message.depositId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(24).uint64(message.withdrawalId);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.errorState !== 0) {
            writer.uint32(40).int32(message.errorState);
        }
        if (message.depositorAddress !== '') {
            writer.uint32(50).string(message.depositorAddress);
        }
        if (message.toAddress !== '') {
            writer.uint32(58).string(message.toAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(66).fork()).ldelim();
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(72).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(80).int64(message.updatedAtHeight);
        }
        if (message.unbondingEndsAt !== undefined) {
            Timestamp.encode(toTimestamp(message.unbondingEndsAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWithdrawal } as Withdrawal;
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
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                case 4:
                    message.state = reader.int32() as any;
                    break;
                case 5:
                    message.errorState = reader.int32() as any;
                    break;
                case 6:
                    message.depositorAddress = reader.string();
                    break;
                case 7:
                    message.toAddress = reader.string();
                    break;
                case 8:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.createdAtHeight = reader.int64() as Long;
                    break;
                case 10:
                    message.updatedAtHeight = reader.int64() as Long;
                    break;
                case 11:
                    message.unbondingEndsAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

    fromJSON(object: any): Withdrawal {
        const message = { ...baseWithdrawal } as Withdrawal;
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
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = Long.fromString(object.withdrawalId);
        } else {
            message.withdrawalId = Long.UZERO;
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = withdrawalStateFromJSON(object.state);
        } else {
            message.state = 0;
        }
        if (object.errorState !== undefined && object.errorState !== null) {
            message.errorState = withdrawalStateFromJSON(object.errorState);
        } else {
            message.errorState = 0;
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
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
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
        if (object.unbondingEndsAt !== undefined && object.unbondingEndsAt !== null) {
            message.unbondingEndsAt = fromJsonTimestamp(object.unbondingEndsAt);
        } else {
            message.unbondingEndsAt = undefined;
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

    toJSON(message: Withdrawal): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.depositId !== undefined && (obj.depositId = (message.depositId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        message.state !== undefined && (obj.state = withdrawalStateToJSON(message.state));
        message.errorState !== undefined && (obj.errorState = withdrawalStateToJSON(message.errorState));
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.createdAtHeight !== undefined && (obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString());
        message.updatedAtHeight !== undefined && (obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString());
        message.unbondingEndsAt !== undefined && (obj.unbondingEndsAt = message.unbondingEndsAt.toISOString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Withdrawal>): Withdrawal {
        const message = { ...baseWithdrawal } as Withdrawal;
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
        if (object.withdrawalId !== undefined && object.withdrawalId !== null) {
            message.withdrawalId = object.withdrawalId as Long;
        } else {
            message.withdrawalId = Long.UZERO;
        }
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.depositorAddress = object.depositorAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
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
        message.unbondingEndsAt = object.unbondingEndsAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const baseWithdrawalIDs: object = { poolId: Long.UZERO, withdrawalId: Long.UZERO };

export const WithdrawalIDs = {
    encode(message: WithdrawalIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.withdrawalId.isZero()) {
            writer.uint32(16).uint64(message.withdrawalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWithdrawalIDs } as WithdrawalIDs;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64() as Long;
                    break;
                case 2:
                    message.withdrawalId = reader.uint64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WithdrawalIDs {
        const message = { ...baseWithdrawalIDs } as WithdrawalIDs;
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
        return message;
    },

    toJSON(message: WithdrawalIDs): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.withdrawalId !== undefined && (obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<WithdrawalIDs>): WithdrawalIDs {
        const message = { ...baseWithdrawalIDs } as WithdrawalIDs;
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
        return message;
    },
};

const baseWithdrawalIDsCollection: object = {};

export const WithdrawalIDsCollection = {
    encode(message: WithdrawalIDsCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.withdrawalsIds) {
            WithdrawalIDs.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDsCollection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWithdrawalIDsCollection } as WithdrawalIDsCollection;
        message.withdrawalsIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawalsIds.push(WithdrawalIDs.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WithdrawalIDsCollection {
        const message = { ...baseWithdrawalIDsCollection } as WithdrawalIDsCollection;
        message.withdrawalsIds = [];
        if (object.withdrawalsIds !== undefined && object.withdrawalsIds !== null) {
            for (const e of object.withdrawalsIds) {
                message.withdrawalsIds.push(WithdrawalIDs.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: WithdrawalIDsCollection): unknown {
        const obj: any = {};
        if (message.withdrawalsIds) {
            obj.withdrawalsIds = message.withdrawalsIds.map((e) => (e ? WithdrawalIDs.toJSON(e) : undefined));
        } else {
            obj.withdrawalsIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<WithdrawalIDsCollection>): WithdrawalIDsCollection {
        const message = { ...baseWithdrawalIDsCollection } as WithdrawalIDsCollection;
        message.withdrawalsIds = [];
        if (object.withdrawalsIds !== undefined && object.withdrawalsIds !== null) {
            for (const e of object.withdrawalsIds) {
                message.withdrawalsIds.push(WithdrawalIDs.fromPartial(e));
            }
        }
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
