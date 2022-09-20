/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { BaseAccount } from '../../../../cosmos/auth/v1beta1/auth';

export const protobufPackage = 'ibc.applications.interchain_accounts.v1';

/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    baseAccount?: BaseAccount;
    accountOwner: string;
}

const baseInterchainAccount: object = { accountOwner: '' };

export const InterchainAccount = {
    encode(message: InterchainAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.accountOwner !== '') {
            writer.uint32(18).string(message.accountOwner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InterchainAccount {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInterchainAccount } as InterchainAccount;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accountOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InterchainAccount {
        const message = { ...baseInterchainAccount } as InterchainAccount;
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = BaseAccount.fromJSON(object.baseAccount);
        } else {
            message.baseAccount = undefined;
        }
        if (object.accountOwner !== undefined && object.accountOwner !== null) {
            message.accountOwner = String(object.accountOwner);
        } else {
            message.accountOwner = '';
        }
        return message;
    },

    toJSON(message: InterchainAccount): unknown {
        const obj: any = {};
        message.baseAccount !== undefined && (obj.baseAccount = message.baseAccount ? BaseAccount.toJSON(message.baseAccount) : undefined);
        message.accountOwner !== undefined && (obj.accountOwner = message.accountOwner);
        return obj;
    },

    fromPartial(object: DeepPartial<InterchainAccount>): InterchainAccount {
        const message = { ...baseInterchainAccount } as InterchainAccount;
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = BaseAccount.fromPartial(object.baseAccount);
        } else {
            message.baseAccount = undefined;
        }
        message.accountOwner = object.accountOwner ?? '';
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
