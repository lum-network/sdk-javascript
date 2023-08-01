/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../../google/protobuf/any';
import { Params } from './client';

export const protobufPackage = 'ibc.core.client.v1';

/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
    /** light client state */
    clientState?: Any | undefined;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     */
    consensusState?: Any | undefined;
    /** signer address */
    signer: string;
}

/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}

/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
    /** client unique identifier */
    clientId: string;
    /** client message to update the light client */
    clientMessage?: Any | undefined;
    /** signer address */
    signer: string;
}

/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}

/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
    /** client unique identifier */
    clientId: string;
    /** upgraded client state */
    clientState?: Any | undefined;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     */
    consensusState?: Any | undefined;
    /** proof that old chain committed to new client */
    proofUpgradeClient: Uint8Array;
    /** proof that old chain committed to new consensus state */
    proofUpgradeConsensusState: Uint8Array;
    /** signer address */
    signer: string;
}

/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}

/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 *
 * @deprecated
 */
export interface MsgSubmitMisbehaviour {
    /** client unique identifier */
    clientId: string;
    /** misbehaviour used for freezing the light client */
    misbehaviour?: Any | undefined;
    /** signer address */
    signer: string;
}

/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}

/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the client parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params | undefined;
}

/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}

function createBaseMsgCreateClient(): MsgCreateClient {
    return { clientState: undefined, consensusState: undefined, signer: '' };
}

export const MsgCreateClient = {
    encode(message: MsgCreateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.clientState = Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.consensusState = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.signer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgCreateClient {
        return {
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : '',
        };
    },

    toJSON(message: MsgCreateClient): unknown {
        const obj: any = {};
        if (message.clientState !== undefined) {
            obj.clientState = Any.toJSON(message.clientState);
        }
        if (message.consensusState !== undefined) {
            obj.consensusState = Any.toJSON(message.consensusState);
        }
        if (message.signer !== '') {
            obj.signer = message.signer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateClient>, I>>(base?: I): MsgCreateClient {
        return MsgCreateClient.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgCreateClient>, I>>(object: I): MsgCreateClient {
        const message = createBaseMsgCreateClient();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.signer = object.signer ?? '';
        return message;
    },
};

function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
    return {};
}

export const MsgCreateClientResponse = {
    encode(_: MsgCreateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClientResponse();
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

    fromJSON(_: any): MsgCreateClientResponse {
        return {};
    },

    toJSON(_: MsgCreateClientResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgCreateClientResponse>, I>>(base?: I): MsgCreateClientResponse {
        return MsgCreateClientResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgCreateClientResponse>, I>>(_: I): MsgCreateClientResponse {
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
};

function createBaseMsgUpdateClient(): MsgUpdateClient {
    return { clientId: '', clientMessage: undefined, signer: '' };
}

export const MsgUpdateClient = {
    encode(message: MsgUpdateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientMessage !== undefined) {
            Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.clientMessage = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.signer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateClient {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : '',
            clientMessage: isSet(object.clientMessage) ? Any.fromJSON(object.clientMessage) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : '',
        };
    },

    toJSON(message: MsgUpdateClient): unknown {
        const obj: any = {};
        if (message.clientId !== '') {
            obj.clientId = message.clientId;
        }
        if (message.clientMessage !== undefined) {
            obj.clientMessage = Any.toJSON(message.clientMessage);
        }
        if (message.signer !== '') {
            obj.signer = message.signer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(base?: I): MsgUpdateClient {
        return MsgUpdateClient.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(object: I): MsgUpdateClient {
        const message = createBaseMsgUpdateClient();
        message.clientId = object.clientId ?? '';
        message.clientMessage = object.clientMessage !== undefined && object.clientMessage !== null ? Any.fromPartial(object.clientMessage) : undefined;
        message.signer = object.signer ?? '';
        return message;
    },
};

function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
    return {};
}

export const MsgUpdateClientResponse = {
    encode(_: MsgUpdateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClientResponse();
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

    fromJSON(_: any): MsgUpdateClientResponse {
        return {};
    },

    toJSON(_: MsgUpdateClientResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(base?: I): MsgUpdateClientResponse {
        return MsgUpdateClientResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(_: I): MsgUpdateClientResponse {
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
};

function createBaseMsgUpgradeClient(): MsgUpgradeClient {
    return {
        clientId: '',
        clientState: undefined,
        consensusState: undefined,
        proofUpgradeClient: new Uint8Array(0),
        proofUpgradeConsensusState: new Uint8Array(0),
        signer: '',
    };
}

export const MsgUpgradeClient = {
    encode(message: MsgUpgradeClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofUpgradeClient.length !== 0) {
            writer.uint32(34).bytes(message.proofUpgradeClient);
        }
        if (message.proofUpgradeConsensusState.length !== 0) {
            writer.uint32(42).bytes(message.proofUpgradeConsensusState);
        }
        if (message.signer !== '') {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.clientState = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.consensusState = Any.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.proofUpgradeClient = reader.bytes();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.proofUpgradeConsensusState = reader.bytes();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.signer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpgradeClient {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : '',
            clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            proofUpgradeClient: isSet(object.proofUpgradeClient) ? bytesFromBase64(object.proofUpgradeClient) : new Uint8Array(0),
            proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState) ? bytesFromBase64(object.proofUpgradeConsensusState) : new Uint8Array(0),
            signer: isSet(object.signer) ? String(object.signer) : '',
        };
    },

    toJSON(message: MsgUpgradeClient): unknown {
        const obj: any = {};
        if (message.clientId !== '') {
            obj.clientId = message.clientId;
        }
        if (message.clientState !== undefined) {
            obj.clientState = Any.toJSON(message.clientState);
        }
        if (message.consensusState !== undefined) {
            obj.consensusState = Any.toJSON(message.consensusState);
        }
        if (message.proofUpgradeClient.length !== 0) {
            obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient);
        }
        if (message.proofUpgradeConsensusState.length !== 0) {
            obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState);
        }
        if (message.signer !== '') {
            obj.signer = message.signer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpgradeClient>, I>>(base?: I): MsgUpgradeClient {
        return MsgUpgradeClient.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpgradeClient>, I>>(object: I): MsgUpgradeClient {
        const message = createBaseMsgUpgradeClient();
        message.clientId = object.clientId ?? '';
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array(0);
        message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array(0);
        message.signer = object.signer ?? '';
        return message;
    },
};

function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
    return {};
}

export const MsgUpgradeClientResponse = {
    encode(_: MsgUpgradeClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClientResponse();
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

    fromJSON(_: any): MsgUpgradeClientResponse {
        return {};
    },

    toJSON(_: MsgUpgradeClientResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpgradeClientResponse>, I>>(base?: I): MsgUpgradeClientResponse {
        return MsgUpgradeClientResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpgradeClientResponse>, I>>(_: I): MsgUpgradeClientResponse {
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
};

function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
    return { clientId: '', misbehaviour: undefined, signer: '' };
}

export const MsgSubmitMisbehaviour = {
    encode(message: MsgSubmitMisbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.clientId !== '') {
            writer.uint32(10).string(message.clientId);
        }
        if (message.misbehaviour !== undefined) {
            Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== '') {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.misbehaviour = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.signer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgSubmitMisbehaviour {
        return {
            clientId: isSet(object.clientId) ? String(object.clientId) : '',
            misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : '',
        };
    },

    toJSON(message: MsgSubmitMisbehaviour): unknown {
        const obj: any = {};
        if (message.clientId !== '') {
            obj.clientId = message.clientId;
        }
        if (message.misbehaviour !== undefined) {
            obj.misbehaviour = Any.toJSON(message.misbehaviour);
        }
        if (message.signer !== '') {
            obj.signer = message.signer;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSubmitMisbehaviour>, I>>(base?: I): MsgSubmitMisbehaviour {
        return MsgSubmitMisbehaviour.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviour>, I>>(object: I): MsgSubmitMisbehaviour {
        const message = createBaseMsgSubmitMisbehaviour();
        message.clientId = object.clientId ?? '';
        message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
        message.signer = object.signer ?? '';
        return message;
    },
};

function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
    return {};
}

export const MsgSubmitMisbehaviourResponse = {
    encode(_: MsgSubmitMisbehaviourResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviourResponse();
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

    fromJSON(_: any): MsgSubmitMisbehaviourResponse {
        return {};
    },

    toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSubmitMisbehaviourResponse>, I>>(base?: I): MsgSubmitMisbehaviourResponse {
        return MsgSubmitMisbehaviourResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviourResponse>, I>>(_: I): MsgSubmitMisbehaviourResponse {
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
    return { authority: '', params: undefined };
}

export const MsgUpdateParams = {
    encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.authority !== '') {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.authority = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.params = Params.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateParams {
        return {
            authority: isSet(object.authority) ? String(object.authority) : '',
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },

    toJSON(message: MsgUpdateParams): unknown {
        const obj: any = {};
        if (message.authority !== '') {
            obj.authority = message.authority;
        }
        if (message.params !== undefined) {
            obj.params = Params.toJSON(message.params);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
        return MsgUpdateParams.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? '';
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
    return {};
}

export const MsgUpdateParamsResponse = {
    encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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

    fromJSON(_: any): MsgUpdateParamsResponse {
        return {};
    },

    toJSON(_: MsgUpdateParamsResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
        return MsgUpdateParamsResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};

/** Msg defines the ibc/client Msg service. */
export interface Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
    /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
    UpdateClientParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = 'ibc.core.client.v1.Msg';
export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.CreateClient = this.CreateClient.bind(this);
        this.UpdateClient = this.UpdateClient.bind(this);
        this.UpgradeClient = this.UpgradeClient.bind(this);
        this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
        this.UpdateClientParams = this.UpdateClientParams.bind(this);
    }
    CreateClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
        const data = MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request(this.service, 'CreateClient', data);
        return promise.then((data) => MsgCreateClientResponse.decode(_m0.Reader.create(data)));
    }

    UpdateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
        const data = MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateClient', data);
        return promise.then((data) => MsgUpdateClientResponse.decode(_m0.Reader.create(data)));
    }

    UpgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
        const data = MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpgradeClient', data);
        return promise.then((data) => MsgUpgradeClientResponse.decode(_m0.Reader.create(data)));
    }

    SubmitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse> {
        const data = MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request(this.service, 'SubmitMisbehaviour', data);
        return promise.then((data) => MsgSubmitMisbehaviourResponse.decode(_m0.Reader.create(data)));
    }

    UpdateClientParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request(this.service, 'UpdateClientParams', data);
        return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, 'base64'));
    } else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString('base64');
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(''));
    }
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
