/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../google/protobuf/duration';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.millions';

export interface DrawSchedule {
    initialDrawAt?: Date;
    drawDelta?: Duration;
}

const baseDrawSchedule: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDrawSchedule } as DrawSchedule;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initialDrawAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.drawDelta = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DrawSchedule {
        const message = { ...baseDrawSchedule } as DrawSchedule;
        if (object.initialDrawAt !== undefined && object.initialDrawAt !== null) {
            message.initialDrawAt = fromJsonTimestamp(object.initialDrawAt);
        } else {
            message.initialDrawAt = undefined;
        }
        if (object.drawDelta !== undefined && object.drawDelta !== null) {
            message.drawDelta = Duration.fromJSON(object.drawDelta);
        } else {
            message.drawDelta = undefined;
        }
        return message;
    },

    toJSON(message: DrawSchedule): unknown {
        const obj: any = {};
        message.initialDrawAt !== undefined && (obj.initialDrawAt = message.initialDrawAt.toISOString());
        message.drawDelta !== undefined && (obj.drawDelta = message.drawDelta ? Duration.toJSON(message.drawDelta) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DrawSchedule>): DrawSchedule {
        const message = { ...baseDrawSchedule } as DrawSchedule;
        message.initialDrawAt = object.initialDrawAt ?? undefined;
        if (object.drawDelta !== undefined && object.drawDelta !== null) {
            message.drawDelta = Duration.fromPartial(object.drawDelta);
        } else {
            message.drawDelta = undefined;
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
