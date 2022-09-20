/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'lum.network.dfract';

export interface MsgDeposit {
    depositorAddress: string;
    amount?: Coin;
}

const baseMsgDeposit: object = { depositorAddress: '' };

export const MsgDeposit = {
    encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.depositorAddress !== '') {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeposit } as MsgDeposit;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgDeposit {
        const message = { ...baseMsgDeposit } as MsgDeposit;
        if (object.depositorAddress !== undefined && object.depositorAddress !== null) {
            message.depositorAddress = String(object.depositorAddress);
        } else {
            message.depositorAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        return message;
    },

    toJSON(message: MsgDeposit): unknown {
        const obj: any = {};
        message.depositorAddress !== undefined && (obj.depositorAddress = message.depositorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
        const message = { ...baseMsgDeposit } as MsgDeposit;
        message.depositorAddress = object.depositorAddress ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
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
