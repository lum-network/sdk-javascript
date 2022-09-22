/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.dfract';

export interface Params {
    depositDenom: string;
    mintDenom: string;
    minDepositAmount: Long;
}

const baseParams: object = { depositDenom: '', mintDenom: '', minDepositAmount: Long.ZERO };

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositDenom !== '') {
            writer.uint32(10).string(message.depositDenom);
        }
        if (message.mintDenom !== '') {
            writer.uint32(18).string(message.mintDenom);
        }
        if (!message.minDepositAmount.isZero()) {
            writer.uint32(24).int64(message.minDepositAmount);
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
                    message.mintDenom = reader.string();
                    break;
                case 3:
                    message.minDepositAmount = reader.int64() as Long;
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
        if (object.mintDenom !== undefined && object.mintDenom !== null) {
            message.mintDenom = String(object.mintDenom);
        } else {
            message.mintDenom = '';
        }
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = Long.fromString(object.minDepositAmount);
        } else {
            message.minDepositAmount = Long.ZERO;
        }
        return message;
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.depositDenom !== undefined && (obj.depositDenom = message.depositDenom);
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.minDepositAmount !== undefined && (obj.minDepositAmount = (message.minDepositAmount || Long.ZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<Params>): Params {
        const message = { ...baseParams } as Params;
        message.depositDenom = object.depositDenom ?? '';
        message.mintDenom = object.mintDenom ?? '';
        if (object.minDepositAmount !== undefined && object.minDepositAmount !== null) {
            message.minDepositAmount = object.minDepositAmount as Long;
        } else {
            message.minDepositAmount = Long.ZERO;
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}