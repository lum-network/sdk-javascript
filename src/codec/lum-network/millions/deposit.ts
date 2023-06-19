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
        case DepositState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
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

function createBaseDeposit(): Deposit {
    return {
        poolId: Long.UZERO,
        depositId: Long.UZERO,
        state: 0,
        errorState: 0,
        depositorAddress: '',
        amount: undefined,
        winnerAddress: '',
        isSponsor: false,
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        createdAt: undefined,
        updatedAt: undefined,
    };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
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

                    message.state = reader.int32() as any;
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.errorState = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.isSponsor = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.createdAtHeight = reader.int64() as Long;
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }

                    message.updatedAtHeight = reader.int64() as Long;
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

    fromJSON(object: any): Deposit {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            depositId: isSet(object.depositId) ? Long.fromValue(object.depositId) : Long.UZERO,
            state: isSet(object.state) ? depositStateFromJSON(object.state) : 0,
            errorState: isSet(object.errorState) ? depositStateFromJSON(object.errorState) : 0,
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            isSponsor: isSet(object.isSponsor) ? Boolean(object.isSponsor) : false,
            createdAtHeight: isSet(object.createdAtHeight) ? Long.fromValue(object.createdAtHeight) : Long.ZERO,
            updatedAtHeight: isSet(object.updatedAtHeight) ? Long.fromValue(object.updatedAtHeight) : Long.ZERO,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
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

    create<I extends Exact<DeepPartial<Deposit>, I>>(base?: I): Deposit {
        return Deposit.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
        const message = createBaseDeposit();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.depositId = object.depositId !== undefined && object.depositId !== null ? Long.fromValue(object.depositId) : Long.UZERO;
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.depositorAddress = object.depositorAddress ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.winnerAddress = object.winnerAddress ?? '';
        message.isSponsor = object.isSponsor ?? false;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
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
