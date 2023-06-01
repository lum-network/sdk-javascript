/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../google/protobuf/any';
import { Coin } from '../../base/v1beta1/coin';
import { VoteOption, voteOptionFromJSON, voteOptionToJSON, WeightedVoteOption } from './gov';

export const protobufPackage = 'cosmos.gov.v1';

/** Since: cosmos-sdk 0.46 */

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    messages: Any[];
    initialDeposit: Coin[];
    proposer: string;
    /** metadata is any arbitrary metadata attached to the proposal. */
    metadata: string;
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: Long;
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
    /** content is the proposal's content. */
    content?: Any;
    /** authority must be the gov module address. */
    authority: string;
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}

/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
    proposalId: Long;
    voter: string;
    option: VoteOption;
    metadata: string;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
    proposalId: Long;
    voter: string;
    options: WeightedVoteOption[];
    metadata: string;
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
    proposalId: Long;
    depositor: string;
    amount: Coin[];
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}

function createBaseMsgSubmitProposal(): MsgSubmitProposal {
    return { messages: [], initialDeposit: [], proposer: '', metadata: '' };
}

export const MsgSubmitProposal = {
    encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.messages) {
            Any.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            Coin.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== '') {
            writer.uint32(26).string(message.proposer);
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.messages.push(Any.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.proposer = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.metadata = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgSubmitProposal {
        return {
            messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
            initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
            proposer: isSet(object.proposer) ? String(object.proposer) : '',
            metadata: isSet(object.metadata) ? String(object.metadata) : '',
        };
    },

    toJSON(message: MsgSubmitProposal): unknown {
        const obj: any = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
        } else {
            obj.messages = [];
        }
        if (message.initialDeposit) {
            obj.initialDeposit = message.initialDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.initialDeposit = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(base?: I): MsgSubmitProposal {
        return MsgSubmitProposal.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
        message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? '';
        message.metadata = object.metadata ?? '';
        return message;
    },
};

function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
    return { proposalId: Long.UZERO };
}

export const MsgSubmitProposalResponse = {
    encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.proposalId = reader.uint64() as Long;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgSubmitProposalResponse {
        return { proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO };
    },

    toJSON(message: MsgSubmitProposalResponse): unknown {
        const obj: any = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(base?: I): MsgSubmitProposalResponse {
        return MsgSubmitProposalResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(object: I): MsgSubmitProposalResponse {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        return message;
    },
};

function createBaseMsgExecLegacyContent(): MsgExecLegacyContent {
    return { content: undefined, authority: '' };
}

export const MsgExecLegacyContent = {
    encode(message: MsgExecLegacyContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== '') {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.content = Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.authority = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgExecLegacyContent {
        return {
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            authority: isSet(object.authority) ? String(object.authority) : '',
        };
    },

    toJSON(message: MsgExecLegacyContent): unknown {
        const obj: any = {};
        message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgExecLegacyContent>, I>>(base?: I): MsgExecLegacyContent {
        return MsgExecLegacyContent.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgExecLegacyContent>, I>>(object: I): MsgExecLegacyContent {
        const message = createBaseMsgExecLegacyContent();
        message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
        message.authority = object.authority ?? '';
        return message;
    },
};

function createBaseMsgExecLegacyContentResponse(): MsgExecLegacyContentResponse {
    return {};
}

export const MsgExecLegacyContentResponse = {
    encode(_: MsgExecLegacyContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContentResponse();
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

    fromJSON(_: any): MsgExecLegacyContentResponse {
        return {};
    },

    toJSON(_: MsgExecLegacyContentResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgExecLegacyContentResponse>, I>>(base?: I): MsgExecLegacyContentResponse {
        return MsgExecLegacyContentResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgExecLegacyContentResponse>, I>>(_: I): MsgExecLegacyContentResponse {
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
};

function createBaseMsgVote(): MsgVote {
    return { proposalId: Long.UZERO, voter: '', option: 0, metadata: '' };
}

export const MsgVote = {
    encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== '') {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.proposalId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.voter = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.option = reader.int32() as any;
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.metadata = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgVote {
        return {
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : '',
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : '',
        };
    },

    toJSON(message: MsgVote): unknown {
        const obj: any = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgVote>, I>>(base?: I): MsgVote {
        return MsgVote.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgVote>, I>>(object: I): MsgVote {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.voter = object.voter ?? '';
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? '';
        return message;
    },
};

function createBaseMsgVoteResponse(): MsgVoteResponse {
    return {};
}

export const MsgVoteResponse = {
    encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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

    fromJSON(_: any): MsgVoteResponse {
        return {};
    },

    toJSON(_: MsgVoteResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(base?: I): MsgVoteResponse {
        return MsgVoteResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgVoteResponse>, I>>(_: I): MsgVoteResponse {
        const message = createBaseMsgVoteResponse();
        return message;
    },
};

function createBaseMsgVoteWeighted(): MsgVoteWeighted {
    return { proposalId: Long.UZERO, voter: '', options: [], metadata: '' };
}

export const MsgVoteWeighted = {
    encode(message: MsgVoteWeighted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== '') {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== '') {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.proposalId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.voter = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.metadata = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MsgVoteWeighted {
        return {
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : '',
            options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : '',
        };
    },

    toJSON(message: MsgVoteWeighted): unknown {
        const obj: any = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        if (message.options) {
            obj.options = message.options.map((e) => (e ? WeightedVoteOption.toJSON(e) : undefined));
        } else {
            obj.options = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgVoteWeighted>, I>>(base?: I): MsgVoteWeighted {
        return MsgVoteWeighted.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgVoteWeighted>, I>>(object: I): MsgVoteWeighted {
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.voter = object.voter ?? '';
        message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? '';
        return message;
    },
};

function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
    return {};
}

export const MsgVoteWeightedResponse = {
    encode(_: MsgVoteWeightedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
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

    fromJSON(_: any): MsgVoteWeightedResponse {
        return {};
    },

    toJSON(_: MsgVoteWeightedResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgVoteWeightedResponse>, I>>(base?: I): MsgVoteWeightedResponse {
        return MsgVoteWeightedResponse.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgVoteWeightedResponse>, I>>(_: I): MsgVoteWeightedResponse {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
};

function createBaseMsgDeposit(): MsgDeposit {
    return { proposalId: Long.UZERO, depositor: '', amount: [] };
}

export const MsgDeposit = {
    encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== '') {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v!, writer.uint32(26).fork()).ldelim();
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
                    if (tag !== 8) {
                        break;
                    }

                    message.proposalId = reader.uint64() as Long;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.depositor = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : '',
            amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
        };
    },

    toJSON(message: MsgDeposit): unknown {
        const obj: any = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.amount = [];
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<MsgDeposit>, I>>(base?: I): MsgDeposit {
        return MsgDeposit.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
        message.depositor = object.depositor ?? '';
        message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
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

/** Msg defines the gov Msg service. */
export interface Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /**
     * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
     * to execute a legacy content-based proposal.
     */
    ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
    /** Vote defines a method to add a vote on a specific proposal. */
    Vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    /** Deposit defines a method to add deposit on a specific proposal. */
    Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    private readonly service: string;
    constructor(rpc: Rpc, opts?: { service?: string }) {
        this.service = opts?.service || 'cosmos.gov.v1.Msg';
        this.rpc = rpc;
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
        this.Vote = this.Vote.bind(this);
        this.VoteWeighted = this.VoteWeighted.bind(this);
        this.Deposit = this.Deposit.bind(this);
    }
    SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
        const data = MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, 'SubmitProposal', data);
        return promise.then((data) => MsgSubmitProposalResponse.decode(_m0.Reader.create(data)));
    }

    ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse> {
        const data = MsgExecLegacyContent.encode(request).finish();
        const promise = this.rpc.request(this.service, 'ExecLegacyContent', data);
        return promise.then((data) => MsgExecLegacyContentResponse.decode(_m0.Reader.create(data)));
    }

    Vote(request: MsgVote): Promise<MsgVoteResponse> {
        const data = MsgVote.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Vote', data);
        return promise.then((data) => MsgVoteResponse.decode(_m0.Reader.create(data)));
    }

    VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
        const data = MsgVoteWeighted.encode(request).finish();
        const promise = this.rpc.request(this.service, 'VoteWeighted', data);
        return promise.then((data) => MsgVoteWeightedResponse.decode(_m0.Reader.create(data)));
    }

    Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request(this.service, 'Deposit', data);
        return promise.then((data) => MsgDepositResponse.decode(_m0.Reader.create(data)));
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
