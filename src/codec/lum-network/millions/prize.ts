/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export enum PrizeState {
    PRIZE_STATE_UNSPECIFIED = 0,
    PRIZE_STATE_PENDING = 1,
    PRIZE_STATE_CLAIMED = 2,
    PRIZE_STATE_CLAWEDBACK = 3,
    UNRECOGNIZED = -1,
}

export function prizeStateFromJSON(object: any): PrizeState {
    switch (object) {
        case 0:
        case 'PRIZE_STATE_UNSPECIFIED':
            return PrizeState.PRIZE_STATE_UNSPECIFIED;
        case 1:
        case 'PRIZE_STATE_PENDING':
            return PrizeState.PRIZE_STATE_PENDING;
        case 2:
        case 'PRIZE_STATE_CLAIMED':
            return PrizeState.PRIZE_STATE_CLAIMED;
        case 3:
        case 'PRIZE_STATE_CLAWEDBACK':
            return PrizeState.PRIZE_STATE_CLAWEDBACK;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PrizeState.UNRECOGNIZED;
    }
}

export function prizeStateToJSON(object: PrizeState): string {
    switch (object) {
        case PrizeState.PRIZE_STATE_UNSPECIFIED:
            return 'PRIZE_STATE_UNSPECIFIED';
        case PrizeState.PRIZE_STATE_PENDING:
            return 'PRIZE_STATE_PENDING';
        case PrizeState.PRIZE_STATE_CLAIMED:
            return 'PRIZE_STATE_CLAIMED';
        case PrizeState.PRIZE_STATE_CLAWEDBACK:
            return 'PRIZE_STATE_CLAWEDBACK';
        default:
            return 'UNKNOWN';
    }
}

export interface Prize {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
    state: PrizeState;
    winnerAddress: string;
    amount?: Coin;
    createdAtHeight: Long;
    updatedAtHeight: Long;
    expiresAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PrizeIDs {
    poolId: Long;
    drawId: Long;
    prizeId: Long;
}

export interface PrizeIDsCollection {
    prizesIds: PrizeIDs[];
}

const basePrize: object = { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO, state: 0, winnerAddress: '', createdAtHeight: Long.ZERO, updatedAtHeight: Long.ZERO };

export const Prize = {
    encode(message: Prize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.winnerAddress !== '') {
            writer.uint32(42).string(message.winnerAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(56).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(64).int64(message.updatedAtHeight);
        }
        if (message.expiresAt !== undefined) {
            Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(74).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Prize {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrize } as Prize;
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
                    message.state = reader.int32() as any;
                    break;
                case 5:
                    message.winnerAddress = reader.string();
                    break;
                case 6:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAtHeight = reader.int64() as Long;
                    break;
                case 8:
                    message.updatedAtHeight = reader.int64() as Long;
                    break;
                case 9:
                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Prize {
        const message = { ...basePrize } as Prize;
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
        if (object.state !== undefined && object.state !== null) {
            message.state = prizeStateFromJSON(object.state);
        } else {
            message.state = 0;
        }
        if (object.winnerAddress !== undefined && object.winnerAddress !== null) {
            message.winnerAddress = String(object.winnerAddress);
        } else {
            message.winnerAddress = '';
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
        if (object.expiresAt !== undefined && object.expiresAt !== null) {
            message.expiresAt = fromJsonTimestamp(object.expiresAt);
        } else {
            message.expiresAt = undefined;
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

    toJSON(message: Prize): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        message.state !== undefined && (obj.state = prizeStateToJSON(message.state));
        message.winnerAddress !== undefined && (obj.winnerAddress = message.winnerAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.createdAtHeight !== undefined && (obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString());
        message.updatedAtHeight !== undefined && (obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString());
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Prize>): Prize {
        const message = { ...basePrize } as Prize;
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
        message.state = object.state ?? 0;
        message.winnerAddress = object.winnerAddress ?? '';
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
        message.expiresAt = object.expiresAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

const basePrizeIDs: object = { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO };

export const PrizeIDs = {
    encode(message: PrizeIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (!message.prizeId.isZero()) {
            writer.uint32(24).uint64(message.prizeId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeIDs {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrizeIDs } as PrizeIDs;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrizeIDs {
        const message = { ...basePrizeIDs } as PrizeIDs;
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
        return message;
    },

    toJSON(message: PrizeIDs): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<PrizeIDs>): PrizeIDs {
        const message = { ...basePrizeIDs } as PrizeIDs;
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
        return message;
    },
};

const basePrizeIDsCollection: object = {};

export const PrizeIDsCollection = {
    encode(message: PrizeIDsCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.prizesIds) {
            PrizeIDs.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeIDsCollection {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePrizeIDsCollection } as PrizeIDsCollection;
        message.prizesIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prizesIds.push(PrizeIDs.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): PrizeIDsCollection {
        const message = { ...basePrizeIDsCollection } as PrizeIDsCollection;
        message.prizesIds = [];
        if (object.prizesIds !== undefined && object.prizesIds !== null) {
            for (const e of object.prizesIds) {
                message.prizesIds.push(PrizeIDs.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: PrizeIDsCollection): unknown {
        const obj: any = {};
        if (message.prizesIds) {
            obj.prizesIds = message.prizesIds.map((e) => (e ? PrizeIDs.toJSON(e) : undefined));
        } else {
            obj.prizesIds = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<PrizeIDsCollection>): PrizeIDsCollection {
        const message = { ...basePrizeIDsCollection } as PrizeIDsCollection;
        message.prizesIds = [];
        if (object.prizesIds !== undefined && object.prizesIds !== null) {
            for (const e of object.prizesIds) {
                message.prizesIds.push(PrizeIDs.fromPartial(e));
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
