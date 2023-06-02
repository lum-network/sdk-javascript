/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../google/protobuf/duration';
import { Timestamp } from '../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.airdrop';

export interface Params {
    airdropStartTime?: Date;
    durationUntilDecay?: Duration;
    durationOfDecay?: Duration;
    claimDenom: string;
}

function createBaseParams(): Params {
    return { airdropStartTime: undefined, durationUntilDecay: undefined, durationOfDecay: undefined, claimDenom: '' };
}

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.airdropStartTime !== undefined) {
            Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.durationUntilDecay !== undefined) {
            Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
        }
        if (message.durationOfDecay !== undefined) {
            Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
        }
        if (message.claimDenom !== '') {
            writer.uint32(34).string(message.claimDenom);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.durationUntilDecay = Duration.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.durationOfDecay = Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.claimDenom = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Params {
        return {
            airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
            durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
            durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
            claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : '',
        };
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
        message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
        message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
        message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
        return obj;
    },

    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
        return Params.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
        const message = createBaseParams();
        message.airdropStartTime = object.airdropStartTime ?? undefined;
        message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
        message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
        message.claimDenom = object.claimDenom ?? '';
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
