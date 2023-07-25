/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { PrizeRef } from './prize_ref';

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
        case DrawState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
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
    prizePool?: Coin | undefined;
    prizePoolFreshAmount: string;
    prizePoolRemainsAmount: string;
    prizesRefs: PrizeRef[];
    totalWinCount: Long;
    totalWinAmount: string;
    /** Draw creation and updates */
    createdAtHeight: Long;
    updatedAtHeight: Long;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

function createBaseDraw(): Draw {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        state: 0,
        errorState: 0,
        randSeed: Long.ZERO,
        prizePool: undefined,
        prizePoolFreshAmount: '',
        prizePoolRemainsAmount: '',
        prizesRefs: [],
        totalWinCount: Long.UZERO,
        totalWinAmount: '',
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        createdAt: undefined,
        updatedAt: undefined,
    };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDraw();
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

                    message.state = reader.int32() as any;
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.errorState = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.randSeed = reader.int64() as Long;
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.prizePool = Coin.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.prizePoolFreshAmount = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.prizePoolRemainsAmount = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.prizesRefs.push(PrizeRef.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }

                    message.totalWinCount = reader.uint64() as Long;
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }

                    message.totalWinAmount = reader.string();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }

                    message.createdAtHeight = reader.int64() as Long;
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }

                    message.updatedAtHeight = reader.int64() as Long;
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }

                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 18:
                    if (tag !== 146) {
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

    fromJSON(object: any): Draw {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            state: isSet(object.state) ? drawStateFromJSON(object.state) : 0,
            errorState: isSet(object.errorState) ? drawStateFromJSON(object.errorState) : 0,
            randSeed: isSet(object.randSeed) ? Long.fromValue(object.randSeed) : Long.ZERO,
            prizePool: isSet(object.prizePool) ? Coin.fromJSON(object.prizePool) : undefined,
            prizePoolFreshAmount: isSet(object.prizePoolFreshAmount) ? String(object.prizePoolFreshAmount) : '',
            prizePoolRemainsAmount: isSet(object.prizePoolRemainsAmount) ? String(object.prizePoolRemainsAmount) : '',
            prizesRefs: Array.isArray(object?.prizesRefs) ? object.prizesRefs.map((e: any) => PrizeRef.fromJSON(e)) : [],
            totalWinCount: isSet(object.totalWinCount) ? Long.fromValue(object.totalWinCount) : Long.UZERO,
            totalWinAmount: isSet(object.totalWinAmount) ? String(object.totalWinAmount) : '',
            createdAtHeight: isSet(object.createdAtHeight) ? Long.fromValue(object.createdAtHeight) : Long.ZERO,
            updatedAtHeight: isSet(object.updatedAtHeight) ? Long.fromValue(object.updatedAtHeight) : Long.ZERO,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },

    toJSON(message: Draw): unknown {
        const obj: any = {};
        if (!message.poolId.isZero()) {
            obj.poolId = (message.poolId || Long.UZERO).toString();
        }
        if (!message.drawId.isZero()) {
            obj.drawId = (message.drawId || Long.UZERO).toString();
        }
        if (message.state !== 0) {
            obj.state = drawStateToJSON(message.state);
        }
        if (message.errorState !== 0) {
            obj.errorState = drawStateToJSON(message.errorState);
        }
        if (!message.randSeed.isZero()) {
            obj.randSeed = (message.randSeed || Long.ZERO).toString();
        }
        if (message.prizePool !== undefined) {
            obj.prizePool = Coin.toJSON(message.prizePool);
        }
        if (message.prizePoolFreshAmount !== '') {
            obj.prizePoolFreshAmount = message.prizePoolFreshAmount;
        }
        if (message.prizePoolRemainsAmount !== '') {
            obj.prizePoolRemainsAmount = message.prizePoolRemainsAmount;
        }
        if (message.prizesRefs?.length) {
            obj.prizesRefs = message.prizesRefs.map((e) => PrizeRef.toJSON(e));
        }
        if (!message.totalWinCount.isZero()) {
            obj.totalWinCount = (message.totalWinCount || Long.UZERO).toString();
        }
        if (message.totalWinAmount !== '') {
            obj.totalWinAmount = message.totalWinAmount;
        }
        if (!message.createdAtHeight.isZero()) {
            obj.createdAtHeight = (message.createdAtHeight || Long.ZERO).toString();
        }
        if (!message.updatedAtHeight.isZero()) {
            obj.updatedAtHeight = (message.updatedAtHeight || Long.ZERO).toString();
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        if (message.updatedAt !== undefined) {
            obj.updatedAt = message.updatedAt.toISOString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Draw>, I>>(base?: I): Draw {
        return Draw.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Draw>, I>>(object: I): Draw {
        const message = createBaseDraw();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.state = object.state ?? 0;
        message.errorState = object.errorState ?? 0;
        message.randSeed = object.randSeed !== undefined && object.randSeed !== null ? Long.fromValue(object.randSeed) : Long.ZERO;
        message.prizePool = object.prizePool !== undefined && object.prizePool !== null ? Coin.fromPartial(object.prizePool) : undefined;
        message.prizePoolFreshAmount = object.prizePoolFreshAmount ?? '';
        message.prizePoolRemainsAmount = object.prizePoolRemainsAmount ?? '';
        message.prizesRefs = object.prizesRefs?.map((e) => PrizeRef.fromPartial(e)) || [];
        message.totalWinCount = object.totalWinCount !== undefined && object.totalWinCount !== null ? Long.fromValue(object.totalWinCount) : Long.UZERO;
        message.totalWinAmount = object.totalWinAmount ?? '';
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
