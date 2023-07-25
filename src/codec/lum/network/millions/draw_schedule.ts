/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../google/protobuf/duration';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export interface DrawSchedule {
    initialDrawAt?: Date | undefined;
    drawDelta?: Duration | undefined;
}

function createBaseDrawSchedule(): DrawSchedule {
    return { initialDrawAt: undefined, drawDelta: undefined };
}

export const DrawSchedule = {
    encode(message: DrawSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.initialDrawAt !== undefined) {
            Timestamp.encode(toTimestamp(message.initialDrawAt), writer.uint32(10).fork()).ldelim();
        }
        if (message.drawDelta !== undefined) {
            Duration.encode(message.drawDelta, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DrawSchedule {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDrawSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.initialDrawAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.drawDelta = Duration.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DrawSchedule {
        return {
            initialDrawAt: isSet(object.initialDrawAt) ? fromJsonTimestamp(object.initialDrawAt) : undefined,
            drawDelta: isSet(object.drawDelta) ? Duration.fromJSON(object.drawDelta) : undefined,
        };
    },

    toJSON(message: DrawSchedule): unknown {
        const obj: any = {};
        if (message.initialDrawAt !== undefined) {
            obj.initialDrawAt = message.initialDrawAt.toISOString();
        }
        if (message.drawDelta !== undefined) {
            obj.drawDelta = Duration.toJSON(message.drawDelta);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<DrawSchedule>, I>>(base?: I): DrawSchedule {
        return DrawSchedule.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<DrawSchedule>, I>>(object: I): DrawSchedule {
        const message = createBaseDrawSchedule();
        message.initialDrawAt = object.initialDrawAt ?? undefined;
        message.drawDelta = object.drawDelta !== undefined && object.drawDelta !== null ? Duration.fromPartial(object.drawDelta) : undefined;
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
