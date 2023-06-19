/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export enum PrizeState {
    PRIZE_STATE_UNSPECIFIED = 0,
    PRIZE_STATE_PENDING = 1,
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
        case PrizeState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
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

function createBasePrize(): Prize {
    return {
        poolId: Long.UZERO,
        drawId: Long.UZERO,
        prizeId: Long.UZERO,
        state: 0,
        winnerAddress: '',
        amount: undefined,
        createdAtHeight: Long.ZERO,
        updatedAtHeight: Long.ZERO,
        expiresAt: undefined,
        createdAt: undefined,
        updatedAt: undefined,
    };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrize();
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

                    message.prizeId = reader.uint64() as Long;
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.winnerAddress = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.createdAtHeight = reader.int64() as Long;
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.updatedAtHeight = reader.int64() as Long;
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.expiresAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
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

    fromJSON(object: any): Prize {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            prizeId: isSet(object.prizeId) ? Long.fromValue(object.prizeId) : Long.UZERO,
            state: isSet(object.state) ? prizeStateFromJSON(object.state) : 0,
            winnerAddress: isSet(object.winnerAddress) ? String(object.winnerAddress) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            createdAtHeight: isSet(object.createdAtHeight) ? Long.fromValue(object.createdAtHeight) : Long.ZERO,
            updatedAtHeight: isSet(object.updatedAtHeight) ? Long.fromValue(object.updatedAtHeight) : Long.ZERO,
            expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
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

    create<I extends Exact<DeepPartial<Prize>, I>>(base?: I): Prize {
        return Prize.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Prize>, I>>(object: I): Prize {
        const message = createBasePrize();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        message.state = object.state ?? 0;
        message.winnerAddress = object.winnerAddress ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.createdAtHeight = object.createdAtHeight !== undefined && object.createdAtHeight !== null ? Long.fromValue(object.createdAtHeight) : Long.ZERO;
        message.updatedAtHeight = object.updatedAtHeight !== undefined && object.updatedAtHeight !== null ? Long.fromValue(object.updatedAtHeight) : Long.ZERO;
        message.expiresAt = object.expiresAt ?? undefined;
        message.createdAt = object.createdAt ?? undefined;
        message.updatedAt = object.updatedAt ?? undefined;
        return message;
    },
};

function createBasePrizeIDs(): PrizeIDs {
    return { poolId: Long.UZERO, drawId: Long.UZERO, prizeId: Long.UZERO };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeIDs();
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

                    message.prizeId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PrizeIDs {
        return {
            poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
            drawId: isSet(object.drawId) ? Long.fromValue(object.drawId) : Long.UZERO,
            prizeId: isSet(object.prizeId) ? Long.fromValue(object.prizeId) : Long.UZERO,
        };
    },

    toJSON(message: PrizeIDs): unknown {
        const obj: any = {};
        message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.drawId !== undefined && (obj.drawId = (message.drawId || Long.UZERO).toString());
        message.prizeId !== undefined && (obj.prizeId = (message.prizeId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<PrizeIDs>, I>>(base?: I): PrizeIDs {
        return PrizeIDs.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PrizeIDs>, I>>(object: I): PrizeIDs {
        const message = createBasePrizeIDs();
        message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
        message.drawId = object.drawId !== undefined && object.drawId !== null ? Long.fromValue(object.drawId) : Long.UZERO;
        message.prizeId = object.prizeId !== undefined && object.prizeId !== null ? Long.fromValue(object.prizeId) : Long.UZERO;
        return message;
    },
};

function createBasePrizeIDsCollection(): PrizeIDsCollection {
    return { prizesIds: [] };
}

export const PrizeIDsCollection = {
    encode(message: PrizeIDsCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.prizesIds) {
            PrizeIDs.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PrizeIDsCollection {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrizeIDsCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.prizesIds.push(PrizeIDs.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PrizeIDsCollection {
        return {
            prizesIds: Array.isArray(object?.prizesIds) ? object.prizesIds.map((e: any) => PrizeIDs.fromJSON(e)) : [],
        };
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

    create<I extends Exact<DeepPartial<PrizeIDsCollection>, I>>(base?: I): PrizeIDsCollection {
        return PrizeIDsCollection.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<PrizeIDsCollection>, I>>(object: I): PrizeIDsCollection {
        const message = createBasePrizeIDsCollection();
        message.prizesIds = object.prizesIds?.map((e) => PrizeIDs.fromPartial(e)) || [];
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
