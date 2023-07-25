/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { BaseAccount } from '../../../../cosmos/auth/v1beta1/auth';

export const protobufPackage = 'ibc.applications.interchain_accounts.v1';

/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    baseAccount?: BaseAccount | undefined;
    accountOwner: string;
}

function createBaseInterchainAccount(): InterchainAccount {
    return { baseAccount: undefined, accountOwner: '' };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.accountOwner = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): InterchainAccount {
        return {
            baseAccount: isSet(object.baseAccount) ? BaseAccount.fromJSON(object.baseAccount) : undefined,
            accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : '',
        };
    },

    toJSON(message: InterchainAccount): unknown {
        const obj: any = {};
        if (message.baseAccount !== undefined) {
            obj.baseAccount = BaseAccount.toJSON(message.baseAccount);
        }
        if (message.accountOwner !== '') {
            obj.accountOwner = message.accountOwner;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<InterchainAccount>, I>>(base?: I): InterchainAccount {
        return InterchainAccount.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<InterchainAccount>, I>>(object: I): InterchainAccount {
        const message = createBaseInterchainAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.accountOwner = object.accountOwner ?? '';
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
