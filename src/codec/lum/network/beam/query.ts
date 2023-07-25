/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Beam, BeamState, beamStateFromJSON, beamStateToJSON } from './beam';

export const protobufPackage = 'lum.network.beam';

export interface QueryGetBeamRequest {
    id: string;
}

export interface QueryGetBeamResponse {
    beam?: Beam | undefined;
}

export interface QueryFetchBeamsRequest {
    pagination?: PageRequest | undefined;
    state: BeamState;
}

export interface QueryFetchBeamsResponse {
    beams: Beam[];
    pagination?: PageResponse | undefined;
}

export interface QueryFetchBeamsOpenQueueRequest {
    pagination?: PageRequest | undefined;
}

export interface QueryFetchBeamsOpenQueueResponse {
    beamIds: string[];
    pagination?: PageResponse | undefined;
}

function createBaseQueryGetBeamRequest(): QueryGetBeamRequest {
    return { id: '' };
}

export const QueryGetBeamRequest = {
    encode(message: QueryGetBeamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGetBeamRequest {
        return { id: isSet(object.id) ? String(object.id) : '' };
    },

    toJSON(message: QueryGetBeamRequest): unknown {
        const obj: any = {};
        if (message.id !== '') {
            obj.id = message.id;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGetBeamRequest>, I>>(base?: I): QueryGetBeamRequest {
        return QueryGetBeamRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryGetBeamRequest>, I>>(object: I): QueryGetBeamRequest {
        const message = createBaseQueryGetBeamRequest();
        message.id = object.id ?? '';
        return message;
    },
};

function createBaseQueryGetBeamResponse(): QueryGetBeamResponse {
    return { beam: undefined };
}

export const QueryGetBeamResponse = {
    encode(message: QueryGetBeamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.beam !== undefined) {
            Beam.encode(message.beam, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBeamResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetBeamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.beam = Beam.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryGetBeamResponse {
        return { beam: isSet(object.beam) ? Beam.fromJSON(object.beam) : undefined };
    },

    toJSON(message: QueryGetBeamResponse): unknown {
        const obj: any = {};
        if (message.beam !== undefined) {
            obj.beam = Beam.toJSON(message.beam);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryGetBeamResponse>, I>>(base?: I): QueryGetBeamResponse {
        return QueryGetBeamResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryGetBeamResponse>, I>>(object: I): QueryGetBeamResponse {
        const message = createBaseQueryGetBeamResponse();
        message.beam = object.beam !== undefined && object.beam !== null ? Beam.fromPartial(object.beam) : undefined;
        return message;
    },
};

function createBaseQueryFetchBeamsRequest(): QueryFetchBeamsRequest {
    return { pagination: undefined, state: 0 };
}

export const QueryFetchBeamsRequest = {
    encode(message: QueryFetchBeamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(16).int32(message.state);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.state = reader.int32() as any;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchBeamsRequest {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            state: isSet(object.state) ? beamStateFromJSON(object.state) : 0,
        };
    },

    toJSON(message: QueryFetchBeamsRequest): unknown {
        const obj: any = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        if (message.state !== 0) {
            obj.state = beamStateToJSON(message.state);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchBeamsRequest>, I>>(base?: I): QueryFetchBeamsRequest {
        return QueryFetchBeamsRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchBeamsRequest>, I>>(object: I): QueryFetchBeamsRequest {
        const message = createBaseQueryFetchBeamsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.state = object.state ?? 0;
        return message;
    },
};

function createBaseQueryFetchBeamsResponse(): QueryFetchBeamsResponse {
    return { beams: [], pagination: undefined };
}

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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.beams.push(Beam.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchBeamsResponse {
        return {
            beams: Array.isArray(object?.beams) ? object.beams.map((e: any) => Beam.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryFetchBeamsResponse): unknown {
        const obj: any = {};
        if (message.beams?.length) {
            obj.beams = message.beams.map((e) => Beam.toJSON(e));
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchBeamsResponse>, I>>(base?: I): QueryFetchBeamsResponse {
        return QueryFetchBeamsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchBeamsResponse>, I>>(object: I): QueryFetchBeamsResponse {
        const message = createBaseQueryFetchBeamsResponse();
        message.beams = object.beams?.map((e) => Beam.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryFetchBeamsOpenQueueRequest(): QueryFetchBeamsOpenQueueRequest {
    return { pagination: undefined };
}

export const QueryFetchBeamsOpenQueueRequest = {
    encode(message: QueryFetchBeamsOpenQueueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueRequest {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsOpenQueueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchBeamsOpenQueueRequest {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },

    toJSON(message: QueryFetchBeamsOpenQueueRequest): unknown {
        const obj: any = {};
        if (message.pagination !== undefined) {
            obj.pagination = PageRequest.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchBeamsOpenQueueRequest>, I>>(base?: I): QueryFetchBeamsOpenQueueRequest {
        return QueryFetchBeamsOpenQueueRequest.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchBeamsOpenQueueRequest>, I>>(object: I): QueryFetchBeamsOpenQueueRequest {
        const message = createBaseQueryFetchBeamsOpenQueueRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryFetchBeamsOpenQueueResponse(): QueryFetchBeamsOpenQueueResponse {
    return { beamIds: [], pagination: undefined };
}

export const QueryFetchBeamsOpenQueueResponse = {
    encode(message: QueryFetchBeamsOpenQueueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.beamIds) {
            writer.uint32(10).string(v!);
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFetchBeamsOpenQueueResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFetchBeamsOpenQueueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.beamIds.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): QueryFetchBeamsOpenQueueResponse {
        return {
            beamIds: Array.isArray(object?.beamIds) ? object.beamIds.map((e: any) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryFetchBeamsOpenQueueResponse): unknown {
        const obj: any = {};
        if (message.beamIds?.length) {
            obj.beamIds = message.beamIds;
        }
        if (message.pagination !== undefined) {
            obj.pagination = PageResponse.toJSON(message.pagination);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<QueryFetchBeamsOpenQueueResponse>, I>>(base?: I): QueryFetchBeamsOpenQueueResponse {
        return QueryFetchBeamsOpenQueueResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<QueryFetchBeamsOpenQueueResponse>, I>>(object: I): QueryFetchBeamsOpenQueueResponse {
        const message = createBaseQueryFetchBeamsOpenQueueResponse();
        message.beamIds = object.beamIds?.map((e) => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

/** Query defines the gRPC querier service. */
export interface Query {
    Beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse>;
    Beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse>;
    BeamsOpenQueue(request: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse>;
}

export const QueryServiceName = 'lum.network.beam.Query';
export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Beam = this.Beam.bind(this);
        this.Beams = this.Beams.bind(this);
        this.BeamsOpenQueue = this.BeamsOpenQueue.bind(this);
    }
    Beam(request: QueryGetBeamRequest): Promise<QueryGetBeamResponse> {
        const data = QueryGetBeamRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Beam', data);
        return promise.then((data) => QueryGetBeamResponse.decode(_m0.Reader.create(data)));
    }

    Beams(request: QueryFetchBeamsRequest): Promise<QueryFetchBeamsResponse> {
        const data = QueryFetchBeamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Beams', data);
        return promise.then((data) => QueryFetchBeamsResponse.decode(_m0.Reader.create(data)));
    }

    BeamsOpenQueue(request: QueryFetchBeamsOpenQueueRequest): Promise<QueryFetchBeamsOpenQueueResponse> {
        const data = QueryFetchBeamsOpenQueueRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, 'BeamsOpenQueue', data);
        return promise.then((data) => QueryFetchBeamsOpenQueueResponse.decode(_m0.Reader.create(data)));
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
