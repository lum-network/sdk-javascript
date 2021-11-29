/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Params } from '../airdrop/params';
import { ClaimRecord, Action, actionFromJSON, actionToJSON } from '../airdrop/claim';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'lum.network.airdrop';

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}

export interface QueryClaimRecordRequest {
    address: string;
}

export interface QueryClaimRecordResponse {
    claimRecord?: ClaimRecord;
}

export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}

export interface QueryClaimableForActionResponse {
    coins: Coin[];
}

export interface QueryTotalClaimableRequest {
    address: string;
}

export interface QueryTotalClaimableResponse {
    coins: Coin[];
}

const baseQueryModuleAccountBalanceRequest: object = {};

export const QueryModuleAccountBalanceRequest = {
    encode(_: QueryModuleAccountBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryModuleAccountBalanceRequest } as QueryModuleAccountBalanceRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): QueryModuleAccountBalanceRequest {
        const message = { ...baseQueryModuleAccountBalanceRequest } as QueryModuleAccountBalanceRequest;
        return message;
    },

    toJSON(_: QueryModuleAccountBalanceRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<QueryModuleAccountBalanceRequest>): QueryModuleAccountBalanceRequest {
        const message = { ...baseQueryModuleAccountBalanceRequest } as QueryModuleAccountBalanceRequest;
        return message;
    },
};

const baseQueryModuleAccountBalanceResponse: object = {};

export const QueryModuleAccountBalanceResponse = {
    encode(message: QueryModuleAccountBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.moduleAccountBalance) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryModuleAccountBalanceResponse } as QueryModuleAccountBalanceResponse;
        message.moduleAccountBalance = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleAccountBalance.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryModuleAccountBalanceResponse {
        const message = { ...baseQueryModuleAccountBalanceResponse } as QueryModuleAccountBalanceResponse;
        message.moduleAccountBalance = [];
        if (object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null) {
            for (const e of object.moduleAccountBalance) {
                message.moduleAccountBalance.push(Coin.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: QueryModuleAccountBalanceResponse): unknown {
        const obj: any = {};
        if (message.moduleAccountBalance) {
            obj.moduleAccountBalance = message.moduleAccountBalance.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.moduleAccountBalance = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<QueryModuleAccountBalanceResponse>): QueryModuleAccountBalanceResponse {
        const message = { ...baseQueryModuleAccountBalanceResponse } as QueryModuleAccountBalanceResponse;
        message.moduleAccountBalance = [];
        if (object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null) {
            for (const e of object.moduleAccountBalance) {
                message.moduleAccountBalance.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
    encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): QueryParamsRequest {
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
    encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        return message;
    },
};

const baseQueryClaimRecordRequest: object = { address: '' };

export const QueryClaimRecordRequest = {
    encode(message: QueryClaimRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryClaimRecordRequest {
        const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: QueryClaimRecordRequest): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryClaimRecordRequest>): QueryClaimRecordRequest {
        const message = { ...baseQueryClaimRecordRequest } as QueryClaimRecordRequest;
        message.address = object.address ?? '';
        return message;
    },
};

const baseQueryClaimRecordResponse: object = {};

export const QueryClaimRecordResponse = {
    encode(message: QueryClaimRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.claimRecord !== undefined) {
            ClaimRecord.encode(message.claimRecord, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimRecord = ClaimRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryClaimRecordResponse {
        const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
        if (object.claimRecord !== undefined && object.claimRecord !== null) {
            message.claimRecord = ClaimRecord.fromJSON(object.claimRecord);
        } else {
            message.claimRecord = undefined;
        }
        return message;
    },

    toJSON(message: QueryClaimRecordResponse): unknown {
        const obj: any = {};
        message.claimRecord !== undefined && (obj.claimRecord = message.claimRecord ? ClaimRecord.toJSON(message.claimRecord) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryClaimRecordResponse>): QueryClaimRecordResponse {
        const message = { ...baseQueryClaimRecordResponse } as QueryClaimRecordResponse;
        if (object.claimRecord !== undefined && object.claimRecord !== null) {
            message.claimRecord = ClaimRecord.fromPartial(object.claimRecord);
        } else {
            message.claimRecord = undefined;
        }
        return message;
    },
};

const baseQueryClaimableForActionRequest: object = { address: '', action: 0 };

export const QueryClaimableForActionRequest = {
    encode(message: QueryClaimableForActionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.action !== 0) {
            writer.uint32(16).int32(message.action);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.action = reader.int32() as any;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryClaimableForActionRequest {
        const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = actionFromJSON(object.action);
        } else {
            message.action = 0;
        }
        return message;
    },

    toJSON(message: QueryClaimableForActionRequest): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.action !== undefined && (obj.action = actionToJSON(message.action));
        return obj;
    },

    fromPartial(object: DeepPartial<QueryClaimableForActionRequest>): QueryClaimableForActionRequest {
        const message = { ...baseQueryClaimableForActionRequest } as QueryClaimableForActionRequest;
        message.address = object.address ?? '';
        message.action = object.action ?? 0;
        return message;
    },
};

const baseQueryClaimableForActionResponse: object = {};

export const QueryClaimableForActionResponse = {
    encode(message: QueryClaimableForActionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.coins) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryClaimableForActionResponse {
        const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
        message.coins = [];
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: QueryClaimableForActionResponse): unknown {
        const obj: any = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.coins = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<QueryClaimableForActionResponse>): QueryClaimableForActionResponse {
        const message = { ...baseQueryClaimableForActionResponse } as QueryClaimableForActionResponse;
        message.coins = [];
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};

const baseQueryTotalClaimableRequest: object = { address: '' };

export const QueryTotalClaimableRequest = {
    encode(message: QueryTotalClaimableRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryTotalClaimableRequest {
        const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        } else {
            message.address = '';
        }
        return message;
    },

    toJSON(message: QueryTotalClaimableRequest): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryTotalClaimableRequest>): QueryTotalClaimableRequest {
        const message = { ...baseQueryTotalClaimableRequest } as QueryTotalClaimableRequest;
        message.address = object.address ?? '';
        return message;
    },
};

const baseQueryTotalClaimableResponse: object = {};

export const QueryTotalClaimableResponse = {
    encode(message: QueryTotalClaimableResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.coins) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
        message.coins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryTotalClaimableResponse {
        const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
        message.coins = [];
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: QueryTotalClaimableResponse): unknown {
        const obj: any = {};
        if (message.coins) {
            obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.coins = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<QueryTotalClaimableResponse>): QueryTotalClaimableResponse {
        const message = { ...baseQueryTotalClaimableResponse } as QueryTotalClaimableResponse;
        message.coins = [];
        if (object.coins !== undefined && object.coins !== null) {
            for (const e of object.coins) {
                message.coins.push(Coin.fromPartial(e));
            }
        }
        return message;
    },
};

/** Query defines the gRPC querier service. */
export interface Query {
    ModuleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    ClaimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
    ClaimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
    TotalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.ModuleAccountBalance = this.ModuleAccountBalance.bind(this);
        this.Params = this.Params.bind(this);
        this.ClaimRecord = this.ClaimRecord.bind(this);
        this.ClaimableForAction = this.ClaimableForAction.bind(this);
        this.TotalClaimable = this.TotalClaimable.bind(this);
    }
    ModuleAccountBalance(request: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
        const data = QueryModuleAccountBalanceRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.airdrop.Query', 'ModuleAccountBalance', data);
        return promise.then((data) => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
    }

    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.airdrop.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }

    ClaimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
        const data = QueryClaimRecordRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.airdrop.Query', 'ClaimRecord', data);
        return promise.then((data) => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
    }

    ClaimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
        const data = QueryClaimableForActionRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.airdrop.Query', 'ClaimableForAction', data);
        return promise.then((data) => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
    }

    TotalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
        const data = QueryTotalClaimableRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.airdrop.Query', 'TotalClaimable', data);
        return promise.then((data) => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
