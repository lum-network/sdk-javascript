/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'lum.network.dfract';

export interface MsgDeposit {
    depositorAddress: string;
    amount?: Coin | undefined;
}

export interface MsgDepositResponse {}

export interface MsgWithdrawAndMint {
    address: string;
    microMintRate: Long;
}

export interface MsgWithdrawAndMintResponse {}

function createBaseMsgDeposit(): MsgDeposit {
    return { depositorAddress: '', amount: undefined };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.depositorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgDeposit {
        return {
            depositorAddress: isSet(object.depositorAddress) ? String(object.depositorAddress) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },

    toJSON(message: MsgDeposit): unknown {
        const obj: any = {};
        if (message.depositorAddress !== '') {
            obj.depositorAddress = message.depositorAddress;
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
        return MsgDeposit.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
        const message = createBaseMsgDeposit();
        message.depositorAddress = object.depositorAddress ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
    return {};
}

export const MsgDepositResponse = {
    encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgDepositResponse {
        return {};
    },

    toJSON(_: MsgDepositResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(base?: I): MsgDepositResponse {
        return MsgDepositResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(_: I): MsgDepositResponse {
        const message = createBaseMsgDepositResponse();
        return message;
    },
};

function createBaseMsgWithdrawAndMint(): MsgWithdrawAndMint {
    return { address: '', microMintRate: Long.ZERO };
}

export const MsgWithdrawAndMint = {
    encode(message: MsgWithdrawAndMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (!message.microMintRate.isZero()) {
            writer.uint32(16).int64(message.microMintRate);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAndMint {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAndMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.address = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.microMintRate = reader.int64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgWithdrawAndMint {
        return {
            address: isSet(object.address) ? String(object.address) : '',
            microMintRate: isSet(object.microMintRate) ? Long.fromValue(object.microMintRate) : Long.ZERO,
        };
    },

    toJSON(message: MsgWithdrawAndMint): unknown {
        const obj: any = {};
        if (message.address !== '') {
            obj.address = message.address;
        }
        if (!message.microMintRate.isZero()) {
            obj.microMintRate = (message.microMintRate || Long.ZERO).toString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawAndMint>, I>>(base?: I): MsgWithdrawAndMint {
        return MsgWithdrawAndMint.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawAndMint>, I>>(object: I): MsgWithdrawAndMint {
        const message = createBaseMsgWithdrawAndMint();
        message.address = object.address ?? '';
        message.microMintRate = object.microMintRate !== undefined && object.microMintRate !== null ? Long.fromValue(object.microMintRate) : Long.ZERO;
        return message;
    },
};

function createBaseMsgWithdrawAndMintResponse(): MsgWithdrawAndMintResponse {
    return {};
}

export const MsgWithdrawAndMintResponse = {
    encode(_: MsgWithdrawAndMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAndMintResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAndMintResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): MsgWithdrawAndMintResponse {
        return {};
    },

    toJSON(_: MsgWithdrawAndMintResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgWithdrawAndMintResponse>, I>>(base?: I): MsgWithdrawAndMintResponse {
        return MsgWithdrawAndMintResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgWithdrawAndMintResponse>, I>>(_: I): MsgWithdrawAndMintResponse {
        const message = createBaseMsgWithdrawAndMintResponse();
        return message;
    },
};

export interface Msg {
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    WithdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse>;
}

export const MsgServiceName = 'lum.network.dfract.Msg';
export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.Deposit = this.Deposit.bind(this);
        this.WithdrawAndMint = this.WithdrawAndMint.bind(this);
    }
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deposit', data);
        return promise.then((data) => MsgDepositResponse.decode(_m0.Reader.create(data)));
    }

    WithdrawAndMint(request: MsgWithdrawAndMint): Promise<MsgWithdrawAndMintResponse> {
        const data = MsgWithdrawAndMint.encode(request).finish();
        const promise = this.rpc.request(this.service, 'WithdrawAndMint', data);
        return promise.then((data) => MsgWithdrawAndMintResponse.decode(_m0.Reader.create(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
