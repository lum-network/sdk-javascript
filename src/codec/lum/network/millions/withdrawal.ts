/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';

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
        case WithdrawalState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
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
    amount?: Coin | undefined;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    unbondingEndsAt?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

export interface WithdrawalIDs {
    poolId: Long;
    withdrawalId: Long;
}

export interface WithdrawalIDsCollection {
    withdrawalsIds: WithdrawalIDs[];
}

function createBaseWithdrawal(): Withdrawal {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        withdrawalId: Long.UZERO,
        state: 0,
        errorState: 0,
        depositorAddress: '',
        toAddress: '',
        amount: undefined,
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        unbondingEndsAt: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawal();
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
                    if (tag !== 24) {
                        break;
                    }

                    message.withdrawalId = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.errorState = reader.int32() as any;
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.toAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.createdAtHeight = reader.int64() as Long;
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.updatedAtHeight = reader.int64() as Long;
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.unbondingEndsAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }

                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 13:
                    if (tag !== 106) {
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

    fromJSON(object: any): Withdrawal {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
            state: isSet(object.state) ? withdrawalStateFromJSON(object.state) : 0,
            errorState: isSet(object.errorState) ? withdrawalStateFromJSON(object.errorState) : 0,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            toAddress: isSet(object.toAddress) ? String(object.toAddress) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            createdAtHeight: isSet(object.createdAtHeight) ? Long.fromValue(object.createdAtHeight) : Long.ZERO,
            updatedAtHeight: isSet(object.updatedAtHeight) ? Long.fromValue(object.updatedAtHeight) : Long.ZERO,
            unbondingEndsAt: isSet(object.unbondingEndsAt) ? fromJsonTimestamp(object.unbondingEndsAt) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },

    toJSON(message: Withdrawal): unknown {
        const obj: any = {};
        if (!message.poolId.isZero()) {
            obj.poolId = (message.poolId || Long.UZERO).toString();
        }
        if (!message.depositId.isZero()) {
            obj.depositId = (message.depositId || Long.UZERO).toString();
        }
        if (!message.withdrawalId.isZero()) {
            obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString();
        }
        if (message.state !== 0) {
            obj.state = withdrawalStateToJSON(message.state);
        }
        if (message.errorState !== 0) {
            obj.errorState = withdrawalStateToJSON(message.errorState);
        }
        if (message.depositorAddress !== '') {
            obj.depositorAddress = message.depositorAddress;
        }
        if (message.toAddress !== '') {
            obj.toAddress = message.toAddress;
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        if (!message.createdAtHeight.isZero()) {
            obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString();
        }
        if (!message.updatedAtHeight.isZero()) {
            obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString();
        }
        if (message.unbondingEndsAt !== undefined) {
            obj.unbondingEndsAt = message.unbondingEndsAt.toISOString();
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        if (message.updatedAt !== undefined) {
            obj.updatedAt = message.updatedAt.toISOString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Withdrawal>, I>>(base?: I): Withdrawal {
        return Withdrawal.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Withdrawal>, I>>(object: I): Withdrawal {
        const message = createBaseWithdrawal();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.depositorAddress = object.depositorAddress ?? '';
        message.toAddress = object.toAddress ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
        message.unbondingEndsAt = object.unbondingEndsAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

function createBaseWithdrawalIDs(): WithdrawalIDs {
    return { poolId: Long.UZERO, withdrawalId: Long.UZERO };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawalIDs();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): WithdrawalIDs {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            withdrawalId: isSet(object.withdrawalId) ? Long.fromValue(object.withdrawalId) : Long.UZERO,
        };
    },

    toJSON(message: WithdrawalIDs): unknown {
        const obj: any = {};
        if (!message.poolId.isZero()) {
            obj.poolId = (message.poolId || Long.UZERO).toString();
        }
        if (!message.withdrawalId.isZero()) {
            obj.withdrawalId = (message.withdrawalId || Long.UZERO).toString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<WithdrawalIDs>, I>>(base?: I): WithdrawalIDs {
        return WithdrawalIDs.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<WithdrawalIDs>, I>>(object: I): WithdrawalIDs {
        const message = createBaseWithdrawalIDs();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.withdrawalId = object.withdrawalId !== undefined && object.withdrawalId !== null ? Long.fromValue(object.withdrawalId) : Long.UZERO;
        return message;
    },
};

function createBaseWithdrawalIDsCollection(): WithdrawalIDsCollection {
    return { withdrawalsIds: [] };
}

export const WithdrawalIDsCollection = {
    encode(message: WithdrawalIDsCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.withdrawalsIds) {
            WithdrawalIDs.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalIDsCollection {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWithdrawalIDsCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.withdrawalsIds.push(WithdrawalIDs.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): WithdrawalIDsCollection {
        return {
            withdrawalsIds: Array.isArray(object?.withdrawalsIds) ? object.withdrawalsIds.map((e: any) => WithdrawalIDs.fromJSON(e)) : [],
        };
    },

    toJSON(message: WithdrawalIDsCollection): unknown {
        const obj: any = {};
        if (message.withdrawalsIds?.length) {
            obj.withdrawalsIds = message.withdrawalsIds.map((e) => WithdrawalIDs.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<WithdrawalIDsCollection>, I>>(base?: I): WithdrawalIDsCollection {
        return WithdrawalIDsCollection.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<WithdrawalIDsCollection>, I>>(object: I): WithdrawalIDsCollection {
        const message = createBaseWithdrawalIDsCollection();
        message.withdrawalsIds = object.withdrawalsIds?.map((e) => WithdrawalIDs.fromPartial(e)) || [];
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
