/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

export interface Params {
    depositDenoms: string[];
    minDepositAmount: number;
}

function createBaseParams(): Params {
    return { depositDenoms: [], minDepositAmount: 0 };
}

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.depositDenoms) {
            writer.uint32(10).string(v!);
        }
        if (message.minDepositAmount !== 0) {
            writer.uint32(16).uint32(message.minDepositAmount);
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

                    message.depositDenoms.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.minDepositAmount = reader.uint32();
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
            depositDenoms: Array.isArray(object?.depositDenoms) ? object.depositDenoms.map((e: any) => String(e)) : [],
            minDepositAmount: isSet(object.minDepositAmount) ? Number(object.minDepositAmount) : 0,
        };
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        if (message.depositDenoms) {
            obj.depositDenoms = message.depositDenoms.map((e) => e);
        } else {
            obj.depositDenoms = [];
        }
        message.minDepositAmount !== undefined && (obj.minDepositAmount = Math.round(message.minDepositAmount));
        return obj;
    },

    create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
        return Params.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
        const message = createBaseParams();
        message.depositDenoms = object.depositDenoms?.map((e) => e) || [];
        message.minDepositAmount = object.minDepositAmount ?? 0;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
