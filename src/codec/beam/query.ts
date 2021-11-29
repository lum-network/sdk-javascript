/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Beam } from '../beam/beam';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'lum.network.beam';

export interface QueryGetBeamRequest {
    id: string;
}

export interface QueryGetBeamResponse {
    beam?: Beam;
}

export interface QueryFetchBeamsRequest {
    pagination?: PageRequest;
}

export interface QueryFetchBeamsResponse {
    beams: Beam[];
    pagination?: PageResponse;
}

const baseQueryGetBeamRequest: object = { id: '' };

export const QueryGetBeamRequest = {
    encode(message: QueryGetBeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBeamRequest } as QueryGetBeamRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetBeamRequest {
        const message = { ...baseQueryGetBeamRequest } as QueryGetBeamRequest;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: QueryGetBeamRequest): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetBeamRequest>): QueryGetBeamRequest {
        const message = { ...baseQueryGetBeamRequest } as QueryGetBeamRequest;
        message.id = object.id ?? '';
        return message;
    },
};

const baseQueryGetBeamResponse: object = {};

export const QueryGetBeamResponse = {
    encode(message: QueryGetBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.beam !== undefined) {
            Beam.encode(message.beam, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetBeamResponse } as QueryGetBeamResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beam = Beam.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryGetBeamResponse {
        const message = { ...baseQueryGetBeamResponse } as QueryGetBeamResponse;
        if (object.beam !== undefined && object.beam !== null) {
            message.beam = Beam.fromJSON(object.beam);
        } else {
            message.beam = undefined;
        }
        return message;
    },

    toJSON(message: QueryGetBeamResponse): unknown {
        const obj: any = {};
        message.beam !== undefined && (obj.beam = message.beam ? Beam.toJSON(message.beam) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryGetBeamResponse>): QueryGetBeamResponse {
        const message = { ...baseQueryGetBeamResponse } as QueryGetBeamResponse;
        if (object.beam !== undefined && object.beam !== null) {
            message.beam = Beam.fromPartial(object.beam);
        } else {
            message.beam = undefined;
        }
        return message;
    },
};

const baseQueryFetchBeamsRequest: object = {};

export const QueryFetchBeamsRequest = {
    encode(message: QueryFetchBeamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryFetchBeamsRequest } as QueryFetchBeamsRequest;
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

    fromJSON(object: any): QueryFetchBeamsRequest {
        const message = { ...baseQueryFetchBeamsRequest } as QueryFetchBeamsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryFetchBeamsRequest): unknown {
        const obj: any = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFetchBeamsRequest>): QueryFetchBeamsRequest {
        const message = { ...baseQueryFetchBeamsRequest } as QueryFetchBeamsRequest;
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryFetchBeamsResponse: object = {};

export const QueryFetchBeamsResponse = {
    encode(message: QueryFetchBeamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.beams) {
            Beam.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryFetchBeamsResponse } as QueryFetchBeamsResponse;
        message.beams = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.beams.push(Beam.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryFetchBeamsResponse {
        const message = { ...baseQueryFetchBeamsResponse } as QueryFetchBeamsResponse;
        message.beams = [];
        if (object.beams !== undefined && object.beams !== null) {
            for (const e of object.beams) {
                message.beams.push(Beam.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryFetchBeamsResponse): unknown {
        const obj: any = {};
        if (message.beams) {
            obj.beams = message.beams.map((e) => (e ? Beam.toJSON(e) : undefined));
        } else {
            obj.beams = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFetchBeamsResponse>): QueryFetchBeamsResponse {
        const message = { ...baseQueryFetchBeamsResponse } as QueryFetchBeamsResponse;
        message.beams = [];
        if (object.beams !== undefined && object.beams !== null) {
            for (const e of object.beams) {
                message.beams.push(Beam.fromPartial(e));
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
    Beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
    Beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.Beam = this.Beam.bind(this);
        this.Beams = this.Beams.bind(this);
    }
    Beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse> {
        const data = QueryGetBeamRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.beam.Query', 'Beam', data);
        return promise.then((data) => QueryGetBeamResponse.decode(new _m0.Reader(data)));
    }

    Beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse> {
        const data = QueryFetchBeamsRequest.encode(request).finish();
        const promise = this.rpc.request('lum.network.beam.Query', 'Beams', data);
        return promise.then((data) => QueryFetchBeamsResponse.decode(new _m0.Reader(data)));
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
