/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Params } from '../../lum-network/icacallbacks/params';
import { CallbackData } from '../../lum-network/icacallbacks/callback_data';
import { PageRequest, PageResponse } from '../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'lum.network.icacallbacks';

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}

export interface QueryGetCallbackDataRequest {
    callbackKey: string;
}

export interface QueryGetCallbackDataResponse {
    callbackData?: CallbackData;
}

export interface QueryAllCallbackDataRequest {
    pagination?: PageRequest;
}

export interface QueryAllCallbackDataResponse {
    callbackData: CallbackData[];
    pagination?: PageResponse;
}

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

const baseQueryGetCallbackDataRequest: object = { callbackKey: '' };

export const QueryGetCallbackDataRequest = {
    encode(message: QueryGetCallbackDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.callbackKey !== '') {
            writer.uint32(10).string(message.callbackKey);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCallbackDataRequest } as QueryGetCallbackDataRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetCallbackDataRequest {
        const message = { ...baseQueryGetCallbackDataRequest } as QueryGetCallbackDataRequest;
        if (object.callbackKey !== undefined && object.callbackKey !== null) {
            message.callbackKey = String(object.callbackKey);
        } else {
            message.callbackKey = '';
        }
        return message;
    },

    toJSON(message: QueryGetCallbackDataRequest): unknown {
        const obj: any = {};
        message.callbackKey !== undefined && (obj.callbackKey = message.callbackKey);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetCallbackDataRequest>): QueryGetCallbackDataRequest {
        const message = { ...baseQueryGetCallbackDataRequest } as QueryGetCallbackDataRequest;
        message.callbackKey = object.callbackKey ?? '';
        return message;
    },
};

const baseQueryGetCallbackDataResponse: object = {};

export const QueryGetCallbackDataResponse = {
    encode(message: QueryGetCallbackDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.callbackData !== undefined) {
            CallbackData.encode(message.callbackData, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCallbackDataResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCallbackDataResponse } as QueryGetCallbackDataResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackData = CallbackData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetCallbackDataResponse {
        const message = { ...baseQueryGetCallbackDataResponse } as QueryGetCallbackDataResponse;
        if (object.callbackData !== undefined && object.callbackData !== null) {
            message.callbackData = CallbackData.fromJSON(object.callbackData);
        } else {
            message.callbackData = undefined;
        }
        return message;
    },

    toJSON(message: QueryGetCallbackDataResponse): unknown {
        const obj: any = {};
        message.callbackData !== undefined && (obj.callbackData = message.callbackData ? CallbackData.toJSON(message.callbackData) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetCallbackDataResponse>): QueryGetCallbackDataResponse {
        const message = { ...baseQueryGetCallbackDataResponse } as QueryGetCallbackDataResponse;
        if (object.callbackData !== undefined && object.callbackData !== null) {
            message.callbackData = CallbackData.fromPartial(object.callbackData);
        } else {
            message.callbackData = undefined;
        }
        return message;
    },
};

const baseQueryAllCallbackDataRequest: object = {};

export const QueryAllCallbackDataRequest = {
    encode(message: QueryAllCallbackDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCallbackDataRequest } as QueryAllCallbackDataRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAllCallbackDataRequest {
        const message = { ...baseQueryAllCallbackDataRequest } as QueryAllCallbackDataRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAllCallbackDataRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAllCallbackDataRequest>): QueryAllCallbackDataRequest {
        const message = { ...baseQueryAllCallbackDataRequest } as QueryAllCallbackDataRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryAllCallbackDataResponse: object = {};

export const QueryAllCallbackDataResponse = {
    encode(message: QueryAllCallbackDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.callbackData) {
            CallbackData.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllCallbackDataResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCallbackDataResponse } as QueryAllCallbackDataResponse;
        message.callbackData = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.callbackData.push(CallbackData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryAllCallbackDataResponse {
        const message = { ...baseQueryAllCallbackDataResponse } as QueryAllCallbackDataResponse;
        message.callbackData = [];
        if (object.callbackData !== undefined && object.callbackData !== null) {
            for (const e of object.callbackData) {
                message.callbackData.push(CallbackData.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryAllCallbackDataResponse): unknown {
        const obj: any = {};
        if (message.callbackData) {
            obj.callbackData = message.callbackData.map((e) => (e ? CallbackData.toJSON(e) : undefined));
        } else {
            obj.callbackData = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryAllCallbackDataResponse>): QueryAllCallbackDataResponse {
        const message = { ...baseQueryAllCallbackDataResponse } as QueryAllCallbackDataResponse;
        message.callbackData = [];
        if (object.callbackData !== undefined && object.callbackData !== null) {
            for (const e of object.callbackData) {
                message.callbackData.push(CallbackData.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a CallbackData by index. */
    CallbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse>;
    /** Queries a list of CallbackData items. */
    CallbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.CallbackData = this.CallbackData.bind(this);
        this.CallbackDataAll = this.CallbackDataAll.bind(this);
    }
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.icacallbacks.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }

    CallbackData(request: QueryGetCallbackDataRequest): Promise<QueryGetCallbackDataResponse> {
        const data = QueryGetCallbackDataRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.icacallbacks.Query', 'CallbackData', data);
        return promise.then((data) => QueryGetCallbackDataResponse.decode(new _m0.Reader(data)));
    }

    CallbackDataAll(request: QueryAllCallbackDataRequest): Promise<QueryAllCallbackDataResponse> {
        const data = QueryAllCallbackDataRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.icacallbacks.Query', 'CallbackDataAll', data);
        return promise.then((data) => QueryAllCallbackDataResponse.decode(new _m0.Reader(data)));
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
