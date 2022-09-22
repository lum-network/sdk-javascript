/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

export interface Params {
    depositDenom: string;
    minDepositAmount: number;
}

const baseParams: object = { depositDenom: '', minDepositAmount: 0 };

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositDenom !== '') {
            writer.uint32(10).string(message.depositDenom);
        }
        if (message.minDepositAmount !== 0) {
            writer.uint32(16).uint32(message.minDepositAmount);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams } as Params;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositDenom = reader.string();
                    break;
                case 2:
                    message.minDepositAmount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Params {
        const message = { ...baseParams } as Params;
        if (object.depositDenom !== undefined && object.depositDenom !== null) {
            message.depositDenom = String(object.depositDenom);
        } else {
            message.depositDenom = '';
        }
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = Number(object.minDepositAmount);
        } else {
            message.minDepositAmount = 0;
        }
        return message;
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
        message.minDepositAmount !== undefined && (obj.minDepositAmount = message.minDepositAmount);
        return obj;
    },

    fromPartial(object: DeepPartial<Params>): Params {
        const message = { ...baseParams } as Params;
        message.depositDenom = object.depositDenom ?? '';
        message.minDepositAmount = object.minDepositAmount ?? 0;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
