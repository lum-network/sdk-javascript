/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';
import { PrizeRef } from '../../lum-network/millions/prize_ref';

export const protobufPackage = 'lum.network.millions';

export enum DrawState {
    DRAW_STATE_UNSPECIFIED = 0,
    DRAW_STATE_ICA_WITHDRAWREWARDS = 1,
    DRAW_STATE_QUERY_BALANCE = 2,
    DRAW_STATE_IBC_TRANSFER = 3,
    DRAW_STATE_DRAWING = 4,
    DRAW_STATE_SUCCESS = 5,
    DRAW_STATE_FAILURE = 6,
    UNRECOGNIZED = -1,
}

export function drawStateFromJSON(object: any): DrawState {
    switch (object) {
        case 0:
        case 'DRAW_STATE_UNSPECIFIED':
            return DrawState.DRAW_STATE_UNSPECIFIED;
        case 1:
        case 'DRAW_STATE_ICA_WITHDRAWREWARDS':
            return DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS;
        case 2:
        case 'DRAW_STATE_QUERY_BALANCE':
            return DrawState.DRAW_STATE_QUERY_BALANCE;
        case 3:
        case 'DRAW_STATE_IBC_TRANSFER':
            return DrawState.DRAW_STATE_IBC_TRANSFER;
        case 4:
        case 'DRAW_STATE_DRAWING':
            return DrawState.DRAW_STATE_DRAWING;
        case 5:
        case 'DRAW_STATE_SUCCESS':
            return DrawState.DRAW_STATE_SUCCESS;
        case 6:
        case 'DRAW_STATE_FAILURE':
            return DrawState.DRAW_STATE_FAILURE;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DrawState.UNRECOGNIZED;
    }
}

export function drawStateToJSON(object: DrawState): string {
    switch (object) {
        case DrawState.DRAW_STATE_UNSPECIFIED:
            return 'DRAW_STATE_UNSPECIFIED';
        case DrawState.DRAW_STATE_ICA_WITHDRAWREWARDS:
            return 'DRAW_STATE_ICA_WITHDRAWREWARDS';
        case DrawState.DRAW_STATE_QUERY_BALANCE:
            return 'DRAW_STATE_QUERY_BALANCE';
        case DrawState.DRAW_STATE_IBC_TRANSFER:
            return 'DRAW_STATE_IBC_TRANSFER';
        case DrawState.DRAW_STATE_DRAWING:
            return 'DRAW_STATE_DRAWING';
        case DrawState.DRAW_STATE_SUCCESS:
            return 'DRAW_STATE_SUCCESS';
        case DrawState.DRAW_STATE_FAILURE:
            return 'DRAW_STATE_FAILURE';
        default:
            return 'UNKNOWN';
    }
}

export interface Draw {
    /** Draw IDs */
    poolId: Long;
    drawId: Long;
    /**
     * Draw states
     * error_state is only set in case of failure
     */
    state: DrawState;
    errorState: DrawState;
    /** Draw state done data */
    randSeed: Long;
    prizePool?: Coin;
    prizePoolFreshAmount: string;
    prizePoolRemainsAmount: string;
    prizesRefs: PrizeRef[];
    totalWinCount: Long;
    totalWinAmount: string;
    /** Draw creation and updates */
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt?: Date;
    updatedAt?: Date;
}

const baseDraw: object = {
    poolId: Long.UZERO,
    drawId: Long.UZERO,
    state: 0,
    errorState: 0,
    randSeed: Long.ZERO,
    prizePoolFreshAmount: '',
    prizePoolRemainsAmount: '',
    totalWinCount: Long.UZERO,
    totalWinAmount: '',
    createdAtHeight: Long.ZERO,
    updatedAtHeight: Long.ZERO,
};

export const Draw = {
    encode(message: Draw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.drawId.isZero()) {
            writer.uint32(16).uint64(message.drawId);
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.errorState !== 0) {
            writer.uint32(32).int32(message.errorState);
        }
        if (!message.randSeed.isZero()) {
            writer.uint32(40).int64(message.randSeed);
        }
        if (message.prizePool !== undefined) {
            Coin.encode(message.prizePool, writer.uint32(50).fork()).ldelim();
        }
        if (message.prizePoolFreshAmount !== '') {
            writer.uint32(58).string(message.prizePoolFreshAmount);
        }
        if (message.prizePoolRemainsAmount !== '') {
            writer.uint32(66).string(message.prizePoolRemainsAmount);
        }
        for (const v of message.prizesRefs) {
            PrizeRef.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        if (!message.totalWinCount.isZero()) {
            writer.uint32(96).uint64(message.totalWinCount);
        }
        if (message.totalWinAmount !== '') {
            writer.uint32(106).string(message.totalWinAmount);
        }
        if (!message.createdAtHeight.isZero()) {
            writer.uint32(120).int64(message.createdAtHeight);
        }
        if (!message.updatedAtHeight.isZero()) {
            writer.uint32(128).int64(message.updatedAtHeight);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(138).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(146).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Draw {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDraw } as Draw;
        message.prizesRefs = [];
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
                    message.state = reader.int32() as any;
                    break;
                case 4:
                    message.errorState = reader.int32() as any;
                    break;
                case 5:
                    message.randSeed = reader.int64() as Long;
                    break;
                case 6:
                    message.prizePool = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.prizePoolFreshAmount = reader.string();
                    break;
                case 8:
                    message.prizePoolRemainsAmount = reader.string();
                    break;
                case 11:
                    message.prizesRefs.push(PrizeRef.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.totalWinCount = reader.uint64() as Long;
                    break;
                case 13:
                    message.totalWinAmount = reader.string();
                    break;
                case 15:
                    message.createdAtHeight = reader.int64() as Long;
                    break;
                case 16:
                    message.updatedAtHeight = reader.int64() as Long;
                    break;
                case 17:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Draw {
        const message = { ...baseDraw } as Draw;
        message.prizesRefs = [];
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
        if (object.state !== undefined && object.state !== null) {
            message.state = drawStateFromJSON(object.state);
        } else {
            message.state = 0;
        }
        if (object.errorState !== undefined && object.errorState !== null) {
            message.errorState = drawStateFromJSON(object.errorState);
        } else {
            message.errorState = 0;
        }
        if (object.randSeed !== undefined && object.randSeed !== null) {
            message.randSeed = Long.fromString(object.randSeed);
        } else {
            message.randSeed = Long.ZERO;
        }
        if (object.prizePool !== undefined && object.prizePool !== null) {
            message.prizePool = Coin.fromJSON(object.prizePool);
        } else {
            message.prizePool = undefined;
        }
        if (object.prizePoolFreshAmount !== undefined && object.prizePoolFreshAmount !== null) {
            message.prizePoolFreshAmount = String(object.prizePoolFreshAmount);
        } else {
            message.prizePoolFreshAmount = '';
        }
        if (object.prizePoolRemainsAmount !== undefined && object.prizePoolRemainsAmount !== null) {
            message.prizePoolRemainsAmount = String(object.prizePoolRemainsAmount);
        } else {
            message.prizePoolRemainsAmount = '';
        }
        if (object.prizesRefs !== undefined && object.prizesRefs !== null) {
            for (const e of object.prizesRefs) {
                message.prizesRefs.push(PrizeRef.fromJSON(e));
            }
        }
        if (object.totalWinCount !== undefined && object.totalWinCount !== null) {
            message.totalWinCount = Long.fromString(object.totalWinCount);
        } else {
            message.totalWinCount = Long.UZERO;
        }
        if (object.totalWinAmount !== undefined && object.totalWinAmount !== null) {
            message.totalWinAmount = String(object.totalWinAmount);
        } else {
            message.totalWinAmount = '';
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

    toJSON(message: Draw): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.state !== undefined && (obj.state = drawStateToJSON(message.state));
        message.errorState !== undefined && (obj.errorState = drawStateToJSON(message.errorState));
        message.randSeed !== undefined && (obj.randSeed = (message.randSeed || Long.ZERO).toString());
        message.prizePool !== undefined && (obj.prizePool = message.prizePool ? Coin.toJSON(message.prizePool) : undefined);
        message.prizePoolFreshAmount !== undefined && (obj.prizePoolFreshAmount = message.prizePoolFreshAmount);
        message.prizePoolRemainsAmount !== undefined && (obj.prizePoolRemainsAmount = message.prizePoolRemainsAmount);
        if (message.prizesRefs) {
            obj.prizesRefs = message.prizesRefs.map((e) => (e ? PrizeRef.toJSON(e) : undefined));
        } else {
            obj.prizesRefs = [];
        }
        message.totalWinCount !== undefined && (obj.totalWinCount = (message.totalWinCount || Long.UZERO).toString());
        message.totalWinAmount !== undefined && (obj.totalWinAmount = message.totalWinAmount);
        message.createdAtHeight !== undefined && (obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString());
        message.updatedAtHeight !== undefined && (obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Draw>): Draw {
        const message = { ...baseDraw } as Draw;
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
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        if (object.randSeed !== undefined && object.randSeed !== null) {
            message.randSeed = object.randSeed as Long;
        } else {
            message.randSeed = Long.ZERO;
        }
        if (object.prizePool !== undefined && object.prizePool !== null) {
            message.prizePool = Coin.fromPartial(object.prizePool);
        } else {
            message.prizePool = undefined;
        }
        message.prizePoolFreshAmount = object.prizePoolFreshAmount ?? '';
        message.prizePoolRemainsAmount = object.prizePoolRemainsAmount ?? '';
        message.prizesRefs = [];
        if (object.prizesRefs !== undefined && object.prizesRefs !== null) {
            for (const e of object.prizesRefs) {
                message.prizesRefs.push(PrizeRef.fromPartial(e));
            }
        }
        if (object.totalWinCount !== undefined && object.totalWinCount !== null) {
            message.totalWinCount = object.totalWinCount as Long;
        } else {
            message.totalWinCount = Long.UZERO;
        }
        message.totalWinAmount = object.totalWinAmount ?? '';
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
