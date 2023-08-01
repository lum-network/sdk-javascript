/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'lum.network.beam';

export enum BeamState {
    UNSPECIFIED = 0,
    OPEN = 1,
    CANCELED = 2,
    CLOSED = 3,
    UNRECOGNIZED = -1,
}

export function beamStateFromJSON(object: any): BeamState {
    switch (object) {
        case 0:
        case 'UNSPECIFIED':
            return BeamState.UNSPECIFIED;
        case 1:
        case 'OPEN':
            return BeamState.OPEN;
        case 2:
        case 'CANCELED':
            return BeamState.CANCELED;
        case 3:
        case 'CLOSED':
            return BeamState.CLOSED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return BeamState.UNRECOGNIZED;
    }
}

export function beamStateToJSON(object: BeamState): string {
    switch (object) {
        case BeamState.UNSPECIFIED:
            return 'UNSPECIFIED';
        case BeamState.OPEN:
            return 'OPEN';
        case BeamState.CANCELED:
            return 'CANCELED';
        case BeamState.CLOSED:
            return 'CLOSED';
        case BeamState.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface BeamMedia {
    mimetype: string;
    url: string;
    thumbnailUrl: string;
}

export interface BeamReviewer {
    reviewerId: string;
    name: string;
    isAnonymous: boolean;
}

export interface BeamVerifier {
    name: string;
    url: string;
    signature: string;
}

export interface BeamReward {
    trigger: string;
    amount: number;
    maxAmount: number;
    currency: string;
    status: string;
    details: BeamReward_BeamRewardDetails[];
}

export interface BeamReward_BeamRewardDetails {
    type: string;
    amount: number;
    maxAmount: number;
    status: string;
}

export interface BeamMerchantReview {
    orderId: string;
    reviewId: string;
    merchantUrl: string;
    ratingUrl: string;
    reviewUrl: string;
    collectionMethod: string;
    timestamp: string;
    ratings?: BeamMerchantReview_BeamMerchantReviewRating | undefined;
    title: string;
    content?: BeamMerchantReview_BeamMerchantReviewContent | undefined;
}

export interface BeamMerchantReview_BeamMerchantReviewRating {
    overall: number;
    customerService: number;
    nps: number;
}

export interface BeamMerchantReview_BeamMerchantReviewContent {
    overall: string;
    customerService: string;
}

export interface BeamProductReview {
    orderId: string;
    reviewId: string;
    ratingUrl: string;
    reviewUrl: string;
    collectionMethod: string;
    timestamp: string;
    ratings?: BeamProductReview_BeamProductReviewRating | undefined;
    title: string;
    content?: BeamProductReview_BeamProductReviewContent | undefined;
    medias: BeamMedia[];
    products: BeamProductReview_BeamProduct[];
}

export interface BeamProductReview_BeamProductReviewRating {
    overall: number;
    quality: number;
}

export interface BeamProductReview_BeamProductReviewContent {
    overall: string;
    pros: string;
    cons: string;
}

export interface BeamProductReview_BeamProduct {
    name: string;
    url: string;
    urls: string[];
    ids?: BeamProductReview_BeamProduct_BeamProductIds | undefined;
}

export interface BeamProductReview_BeamProduct_BeamProductIds {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}

export interface BeamData {
    reward?: BeamReward | undefined;
    verifier?: BeamVerifier | undefined;
    reviewer?: BeamReviewer | undefined;
    merchantReview?: BeamMerchantReview | undefined;
    productsReviews: BeamProductReview[];
}

export interface Beam {
    creatorAddress: string;
    id: string;
    amount?: Coin | undefined;
    status: BeamState;
    secret: string;
    claimAddress: string;
    fundsWithdrawn: boolean;
    claimed: boolean;
    cancelReason: string;
    hideContent: boolean;
    schema: string;
    data?: BeamData | undefined;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
    createdAt?: Date | undefined;
    closedAt?: Date | undefined;
}

function createBaseBeamMedia(): BeamMedia {
    return { mimetype: '', url: '', thumbnailUrl: '' };
}

export const BeamMedia = {
    encode(message: BeamMedia, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mimetype !== '') {
            writer.uint32(10).string(message.mimetype);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        if (message.thumbnailUrl !== '') {
            writer.uint32(26).string(message.thumbnailUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMedia {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMedia();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.mimetype = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.thumbnailUrl = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamMedia {
        return {
            mimetype: isSet(object.mimetype) ? String(object.mimetype) : '',
            url: isSet(object.url) ? String(object.url) : '',
            thumbnailUrl: isSet(object.thumbnailUrl) ? String(object.thumbnailUrl) : '',
        };
    },

    toJSON(message: BeamMedia): unknown {
        const obj: any = {};
        if (message.mimetype !== '') {
            obj.mimetype = message.mimetype;
        }
        if (message.url !== '') {
            obj.url = message.url;
        }
        if (message.thumbnailUrl !== '') {
            obj.thumbnailUrl = message.thumbnailUrl;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamMedia>, I>>(base?: I): BeamMedia {
        return BeamMedia.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamMedia>, I>>(object: I): BeamMedia {
        const message = createBaseBeamMedia();
        message.mimetype = object.mimetype ?? '';
        message.url = object.url ?? '';
        message.thumbnailUrl = object.thumbnailUrl ?? '';
        return message;
    },
};

function createBaseBeamReviewer(): BeamReviewer {
    return { reviewerId: '', name: '', isAnonymous: false };
}

export const BeamReviewer = {
    encode(message: BeamReviewer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.reviewerId !== '') {
            writer.uint32(10).string(message.reviewerId);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.isAnonymous === true) {
            writer.uint32(24).bool(message.isAnonymous);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReviewer {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReviewer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.reviewerId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.isAnonymous = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamReviewer {
        return {
            reviewerId: isSet(object.reviewerId) ? String(object.reviewerId) : '',
            name: isSet(object.name) ? String(object.name) : '',
            isAnonymous: isSet(object.isAnonymous) ? Boolean(object.isAnonymous) : false,
        };
    },

    toJSON(message: BeamReviewer): unknown {
        const obj: any = {};
        if (message.reviewerId !== '') {
            obj.reviewerId = message.reviewerId;
        }
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.isAnonymous === true) {
            obj.isAnonymous = message.isAnonymous;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamReviewer>, I>>(base?: I): BeamReviewer {
        return BeamReviewer.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamReviewer>, I>>(object: I): BeamReviewer {
        const message = createBaseBeamReviewer();
        message.reviewerId = object.reviewerId ?? '';
        message.name = object.name ?? '';
        message.isAnonymous = object.isAnonymous ?? false;
        return message;
    },
};

function createBaseBeamVerifier(): BeamVerifier {
    return { name: '', url: '', signature: '' };
}

export const BeamVerifier = {
    encode(message: BeamVerifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        if (message.signature !== '') {
            writer.uint32(26).string(message.signature);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamVerifier {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamVerifier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.signature = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamVerifier {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            url: isSet(object.url) ? String(object.url) : '',
            signature: isSet(object.signature) ? String(object.signature) : '',
        };
    },

    toJSON(message: BeamVerifier): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.url !== '') {
            obj.url = message.url;
        }
        if (message.signature !== '') {
            obj.signature = message.signature;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamVerifier>, I>>(base?: I): BeamVerifier {
        return BeamVerifier.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamVerifier>, I>>(object: I): BeamVerifier {
        const message = createBaseBeamVerifier();
        message.name = object.name ?? '';
        message.url = object.url ?? '';
        message.signature = object.signature ?? '';
        return message;
    },
};

function createBaseBeamReward(): BeamReward {
    return { trigger: '', amount: 0, maxAmount: 0, currency: '', status: '', details: [] };
}

export const BeamReward = {
    encode(message: BeamReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.trigger !== '') {
            writer.uint32(10).string(message.trigger);
        }
        if (message.amount !== 0) {
            writer.uint32(21).float(message.amount);
        }
        if (message.maxAmount !== 0) {
            writer.uint32(29).float(message.maxAmount);
        }
        if (message.currency !== '') {
            writer.uint32(34).string(message.currency);
        }
        if (message.status !== '') {
            writer.uint32(42).string(message.status);
        }
        for (const v of message.details) {
            BeamReward_BeamRewardDetails.encode(v!, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReward {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.trigger = reader.string();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.amount = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.maxAmount = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.currency = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.status = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.details.push(BeamReward_BeamRewardDetails.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamReward {
        return {
            trigger: isSet(object.trigger) ? String(object.trigger) : '',
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            maxAmount: isSet(object.maxAmount) ? Number(object.maxAmount) : 0,
            currency: isSet(object.currency) ? String(object.currency) : '',
            status: isSet(object.status) ? String(object.status) : '',
            details: Array.isArray(object?.details) ? object.details.map((e: any) => BeamReward_BeamRewardDetails.fromJSON(e)) : [],
        };
    },

    toJSON(message: BeamReward): unknown {
        const obj: any = {};
        if (message.trigger !== '') {
            obj.trigger = message.trigger;
        }
        if (message.amount !== 0) {
            obj.amount = message.amount;
        }
        if (message.maxAmount !== 0) {
            obj.maxAmount = message.maxAmount;
        }
        if (message.currency !== '') {
            obj.currency = message.currency;
        }
        if (message.status !== '') {
            obj.status = message.status;
        }
        if (message.details?.length) {
            obj.details = message.details.map((e) => BeamReward_BeamRewardDetails.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamReward>, I>>(base?: I): BeamReward {
        return BeamReward.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamReward>, I>>(object: I): BeamReward {
        const message = createBaseBeamReward();
        message.trigger = object.trigger ?? '';
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.currency = object.currency ?? '';
        message.status = object.status ?? '';
        message.details = object.details?.map((e) => BeamReward_BeamRewardDetails.fromPartial(e)) || [];
        return message;
    },
};

function createBaseBeamReward_BeamRewardDetails(): BeamReward_BeamRewardDetails {
    return { type: '', amount: 0, maxAmount: 0, status: '' };
}

export const BeamReward_BeamRewardDetails = {
    encode(message: BeamReward_BeamRewardDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.amount !== 0) {
            writer.uint32(21).float(message.amount);
        }
        if (message.maxAmount !== 0) {
            writer.uint32(29).float(message.maxAmount);
        }
        if (message.status !== '') {
            writer.uint32(34).string(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReward_BeamRewardDetails {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamReward_BeamRewardDetails();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.amount = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.maxAmount = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamReward_BeamRewardDetails {
        return {
            type: isSet(object.type) ? String(object.type) : '',
            amount: isSet(object.amount) ? Number(object.amount) : 0,
            maxAmount: isSet(object.maxAmount) ? Number(object.maxAmount) : 0,
            status: isSet(object.status) ? String(object.status) : '',
        };
    },

    toJSON(message: BeamReward_BeamRewardDetails): unknown {
        const obj: any = {};
        if (message.type !== '') {
            obj.type = message.type;
        }
        if (message.amount !== 0) {
            obj.amount = message.amount;
        }
        if (message.maxAmount !== 0) {
            obj.maxAmount = message.maxAmount;
        }
        if (message.status !== '') {
            obj.status = message.status;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamReward_BeamRewardDetails>, I>>(base?: I): BeamReward_BeamRewardDetails {
        return BeamReward_BeamRewardDetails.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamReward_BeamRewardDetails>, I>>(object: I): BeamReward_BeamRewardDetails {
        const message = createBaseBeamReward_BeamRewardDetails();
        message.type = object.type ?? '';
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.status = object.status ?? '';
        return message;
    },
};

function createBaseBeamMerchantReview(): BeamMerchantReview {
    return {
        orderId: '',
        reviewId: '',
        merchantUrl: '',
        ratingUrl: '',
        reviewUrl: '',
        collectionMethod: '',
        timestamp: '',
        ratings: undefined,
        title: '',
        content: undefined,
    };
}

export const BeamMerchantReview = {
    encode(message: BeamMerchantReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.orderId !== '') {
            writer.uint32(10).string(message.orderId);
        }
        if (message.reviewId !== '') {
            writer.uint32(18).string(message.reviewId);
        }
        if (message.merchantUrl !== '') {
            writer.uint32(26).string(message.merchantUrl);
        }
        if (message.ratingUrl !== '') {
            writer.uint32(34).string(message.ratingUrl);
        }
        if (message.reviewUrl !== '') {
            writer.uint32(42).string(message.reviewUrl);
        }
        if (message.collectionMethod !== '') {
            writer.uint32(50).string(message.collectionMethod);
        }
        if (message.timestamp !== '') {
            writer.uint32(58).string(message.timestamp);
        }
        if (message.ratings !== undefined) {
            BeamMerchantReview_BeamMerchantReviewRating.encode(message.ratings, writer.uint32(66).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(74).string(message.title);
        }
        if (message.content !== undefined) {
            BeamMerchantReview_BeamMerchantReviewContent.encode(message.content, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.orderId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.reviewId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.merchantUrl = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.ratingUrl = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.reviewUrl = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.collectionMethod = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.timestamp = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.ratings = BeamMerchantReview_BeamMerchantReviewRating.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.content = BeamMerchantReview_BeamMerchantReviewContent.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview {
        return {
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            reviewId: isSet(object.reviewId) ? String(object.reviewId) : '',
            merchantUrl: isSet(object.merchantUrl) ? String(object.merchantUrl) : '',
            ratingUrl: isSet(object.ratingUrl) ? String(object.ratingUrl) : '',
            reviewUrl: isSet(object.reviewUrl) ? String(object.reviewUrl) : '',
            collectionMethod: isSet(object.collectionMethod) ? String(object.collectionMethod) : '',
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : '',
            ratings: isSet(object.ratings) ? BeamMerchantReview_BeamMerchantReviewRating.fromJSON(object.ratings) : undefined,
            title: isSet(object.title) ? String(object.title) : '',
            content: isSet(object.content) ? BeamMerchantReview_BeamMerchantReviewContent.fromJSON(object.content) : undefined,
        };
    },

    toJSON(message: BeamMerchantReview): unknown {
        const obj: any = {};
        if (message.orderId !== '') {
            obj.orderId = message.orderId;
        }
        if (message.reviewId !== '') {
            obj.reviewId = message.reviewId;
        }
        if (message.merchantUrl !== '') {
            obj.merchantUrl = message.merchantUrl;
        }
        if (message.ratingUrl !== '') {
            obj.ratingUrl = message.ratingUrl;
        }
        if (message.reviewUrl !== '') {
            obj.reviewUrl = message.reviewUrl;
        }
        if (message.collectionMethod !== '') {
            obj.collectionMethod = message.collectionMethod;
        }
        if (message.timestamp !== '') {
            obj.timestamp = message.timestamp;
        }
        if (message.ratings !== undefined) {
            obj.ratings = BeamMerchantReview_BeamMerchantReviewRating.toJSON(message.ratings);
        }
        if (message.title !== '') {
            obj.title = message.title;
        }
        if (message.content !== undefined) {
            obj.content = BeamMerchantReview_BeamMerchantReviewContent.toJSON(message.content);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamMerchantReview>, I>>(base?: I): BeamMerchantReview {
        return BeamMerchantReview.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamMerchantReview>, I>>(object: I): BeamMerchantReview {
        const message = createBaseBeamMerchantReview();
        message.orderId = object.orderId ?? '';
        message.reviewId = object.reviewId ?? '';
        message.merchantUrl = object.merchantUrl ?? '';
        message.ratingUrl = object.ratingUrl ?? '';
        message.reviewUrl = object.reviewUrl ?? '';
        message.collectionMethod = object.collectionMethod ?? '';
        message.timestamp = object.timestamp ?? '';
        message.ratings = object.ratings !== undefined && object.ratings !== null ? BeamMerchantReview_BeamMerchantReviewRating.fromPartial(object.ratings) : undefined;
        message.title = object.title ?? '';
        message.content = object.content !== undefined && object.content !== null ? BeamMerchantReview_BeamMerchantReviewContent.fromPartial(object.content) : undefined;
        return message;
    },
};

function createBaseBeamMerchantReview_BeamMerchantReviewRating(): BeamMerchantReview_BeamMerchantReviewRating {
    return { overall: 0, customerService: 0, nps: 0 };
}

export const BeamMerchantReview_BeamMerchantReviewRating = {
    encode(message: BeamMerchantReview_BeamMerchantReviewRating, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.overall !== 0) {
            writer.uint32(13).float(message.overall);
        }
        if (message.customerService !== 0) {
            writer.uint32(21).float(message.customerService);
        }
        if (message.nps !== 0) {
            writer.uint32(29).float(message.nps);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewRating {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.overall = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.customerService = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }

                    message.nps = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview_BeamMerchantReviewRating {
        return {
            overall: isSet(object.overall) ? Number(object.overall) : 0,
            customerService: isSet(object.customerService) ? Number(object.customerService) : 0,
            nps: isSet(object.nps) ? Number(object.nps) : 0,
        };
    },

    toJSON(message: BeamMerchantReview_BeamMerchantReviewRating): unknown {
        const obj: any = {};
        if (message.overall !== 0) {
            obj.overall = message.overall;
        }
        if (message.customerService !== 0) {
            obj.customerService = message.customerService;
        }
        if (message.nps !== 0) {
            obj.nps = message.nps;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamMerchantReview_BeamMerchantReviewRating>, I>>(base?: I): BeamMerchantReview_BeamMerchantReviewRating {
        return BeamMerchantReview_BeamMerchantReviewRating.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamMerchantReview_BeamMerchantReviewRating>, I>>(object: I): BeamMerchantReview_BeamMerchantReviewRating {
        const message = createBaseBeamMerchantReview_BeamMerchantReviewRating();
        message.overall = object.overall ?? 0;
        message.customerService = object.customerService ?? 0;
        message.nps = object.nps ?? 0;
        return message;
    },
};

function createBaseBeamMerchantReview_BeamMerchantReviewContent(): BeamMerchantReview_BeamMerchantReviewContent {
    return { overall: '', customerService: '' };
}

export const BeamMerchantReview_BeamMerchantReviewContent = {
    encode(message: BeamMerchantReview_BeamMerchantReviewContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.overall !== '') {
            writer.uint32(10).string(message.overall);
        }
        if (message.customerService !== '') {
            writer.uint32(18).string(message.customerService);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamMerchantReview_BeamMerchantReviewContent {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.overall = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.customerService = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview_BeamMerchantReviewContent {
        return {
            overall: isSet(object.overall) ? String(object.overall) : '',
            customerService: isSet(object.customerService) ? String(object.customerService) : '',
        };
    },

    toJSON(message: BeamMerchantReview_BeamMerchantReviewContent): unknown {
        const obj: any = {};
        if (message.overall !== '') {
            obj.overall = message.overall;
        }
        if (message.customerService !== '') {
            obj.customerService = message.customerService;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamMerchantReview_BeamMerchantReviewContent>, I>>(base?: I): BeamMerchantReview_BeamMerchantReviewContent {
        return BeamMerchantReview_BeamMerchantReviewContent.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamMerchantReview_BeamMerchantReviewContent>, I>>(object: I): BeamMerchantReview_BeamMerchantReviewContent {
        const message = createBaseBeamMerchantReview_BeamMerchantReviewContent();
        message.overall = object.overall ?? '';
        message.customerService = object.customerService ?? '';
        return message;
    },
};

function createBaseBeamProductReview(): BeamProductReview {
    return {
        orderId: '',
        reviewId: '',
        ratingUrl: '',
        reviewUrl: '',
        collectionMethod: '',
        timestamp: '',
        ratings: undefined,
        title: '',
        content: undefined,
        medias: [],
        products: [],
    };
}

export const BeamProductReview = {
    encode(message: BeamProductReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.orderId !== '') {
            writer.uint32(10).string(message.orderId);
        }
        if (message.reviewId !== '') {
            writer.uint32(18).string(message.reviewId);
        }
        if (message.ratingUrl !== '') {
            writer.uint32(26).string(message.ratingUrl);
        }
        if (message.reviewUrl !== '') {
            writer.uint32(34).string(message.reviewUrl);
        }
        if (message.collectionMethod !== '') {
            writer.uint32(42).string(message.collectionMethod);
        }
        if (message.timestamp !== '') {
            writer.uint32(50).string(message.timestamp);
        }
        if (message.ratings !== undefined) {
            BeamProductReview_BeamProductReviewRating.encode(message.ratings, writer.uint32(58).fork()).ldelim();
        }
        if (message.title !== '') {
            writer.uint32(66).string(message.title);
        }
        if (message.content !== undefined) {
            BeamProductReview_BeamProductReviewContent.encode(message.content, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.medias) {
            BeamMedia.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.products) {
            BeamProductReview_BeamProduct.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.orderId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.reviewId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.ratingUrl = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.reviewUrl = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.collectionMethod = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.timestamp = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.ratings = BeamProductReview_BeamProductReviewRating.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.title = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.content = BeamProductReview_BeamProductReviewContent.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.medias.push(BeamMedia.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.products.push(BeamProductReview_BeamProduct.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview {
        return {
            orderId: isSet(object.orderId) ? String(object.orderId) : '',
            reviewId: isSet(object.reviewId) ? String(object.reviewId) : '',
            ratingUrl: isSet(object.ratingUrl) ? String(object.ratingUrl) : '',
            reviewUrl: isSet(object.reviewUrl) ? String(object.reviewUrl) : '',
            collectionMethod: isSet(object.collectionMethod) ? String(object.collectionMethod) : '',
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : '',
            ratings: isSet(object.ratings) ? BeamProductReview_BeamProductReviewRating.fromJSON(object.ratings) : undefined,
            title: isSet(object.title) ? String(object.title) : '',
            content: isSet(object.content) ? BeamProductReview_BeamProductReviewContent.fromJSON(object.content) : undefined,
            medias: Array.isArray(object?.medias) ? object.medias.map((e: any) => BeamMedia.fromJSON(e)) : [],
            products: Array.isArray(object?.products) ? object.products.map((e: any) => BeamProductReview_BeamProduct.fromJSON(e)) : [],
        };
    },

    toJSON(message: BeamProductReview): unknown {
        const obj: any = {};
        if (message.orderId !== '') {
            obj.orderId = message.orderId;
        }
        if (message.reviewId !== '') {
            obj.reviewId = message.reviewId;
        }
        if (message.ratingUrl !== '') {
            obj.ratingUrl = message.ratingUrl;
        }
        if (message.reviewUrl !== '') {
            obj.reviewUrl = message.reviewUrl;
        }
        if (message.collectionMethod !== '') {
            obj.collectionMethod = message.collectionMethod;
        }
        if (message.timestamp !== '') {
            obj.timestamp = message.timestamp;
        }
        if (message.ratings !== undefined) {
            obj.ratings = BeamProductReview_BeamProductReviewRating.toJSON(message.ratings);
        }
        if (message.title !== '') {
            obj.title = message.title;
        }
        if (message.content !== undefined) {
            obj.content = BeamProductReview_BeamProductReviewContent.toJSON(message.content);
        }
        if (message.medias?.length) {
            obj.medias = message.medias.map((e) => BeamMedia.toJSON(e));
        }
        if (message.products?.length) {
            obj.products = message.products.map((e) => BeamProductReview_BeamProduct.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamProductReview>, I>>(base?: I): BeamProductReview {
        return BeamProductReview.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamProductReview>, I>>(object: I): BeamProductReview {
        const message = createBaseBeamProductReview();
        message.orderId = object.orderId ?? '';
        message.reviewId = object.reviewId ?? '';
        message.ratingUrl = object.ratingUrl ?? '';
        message.reviewUrl = object.reviewUrl ?? '';
        message.collectionMethod = object.collectionMethod ?? '';
        message.timestamp = object.timestamp ?? '';
        message.ratings = object.ratings !== undefined && object.ratings !== null ? BeamProductReview_BeamProductReviewRating.fromPartial(object.ratings) : undefined;
        message.title = object.title ?? '';
        message.content = object.content !== undefined && object.content !== null ? BeamProductReview_BeamProductReviewContent.fromPartial(object.content) : undefined;
        message.medias = object.medias?.map((e) => BeamMedia.fromPartial(e)) || [];
        message.products = object.products?.map((e) => BeamProductReview_BeamProduct.fromPartial(e)) || [];
        return message;
    },
};

function createBaseBeamProductReview_BeamProductReviewRating(): BeamProductReview_BeamProductReviewRating {
    return { overall: 0, quality: 0 };
}

export const BeamProductReview_BeamProductReviewRating = {
    encode(message: BeamProductReview_BeamProductReviewRating, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.overall !== 0) {
            writer.uint32(13).float(message.overall);
        }
        if (message.quality !== 0) {
            writer.uint32(21).float(message.quality);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewRating {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProductReviewRating();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }

                    message.overall = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }

                    message.quality = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProductReviewRating {
        return {
            overall: isSet(object.overall) ? Number(object.overall) : 0,
            quality: isSet(object.quality) ? Number(object.quality) : 0,
        };
    },

    toJSON(message: BeamProductReview_BeamProductReviewRating): unknown {
        const obj: any = {};
        if (message.overall !== 0) {
            obj.overall = message.overall;
        }
        if (message.quality !== 0) {
            obj.quality = message.quality;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamProductReview_BeamProductReviewRating>, I>>(base?: I): BeamProductReview_BeamProductReviewRating {
        return BeamProductReview_BeamProductReviewRating.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamProductReview_BeamProductReviewRating>, I>>(object: I): BeamProductReview_BeamProductReviewRating {
        const message = createBaseBeamProductReview_BeamProductReviewRating();
        message.overall = object.overall ?? 0;
        message.quality = object.quality ?? 0;
        return message;
    },
};

function createBaseBeamProductReview_BeamProductReviewContent(): BeamProductReview_BeamProductReviewContent {
    return { overall: '', pros: '', cons: '' };
}

export const BeamProductReview_BeamProductReviewContent = {
    encode(message: BeamProductReview_BeamProductReviewContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.overall !== '') {
            writer.uint32(10).string(message.overall);
        }
        if (message.pros !== '') {
            writer.uint32(18).string(message.pros);
        }
        if (message.cons !== '') {
            writer.uint32(26).string(message.cons);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProductReviewContent {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProductReviewContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.overall = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.pros = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.cons = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProductReviewContent {
        return {
            overall: isSet(object.overall) ? String(object.overall) : '',
            pros: isSet(object.pros) ? String(object.pros) : '',
            cons: isSet(object.cons) ? String(object.cons) : '',
        };
    },

    toJSON(message: BeamProductReview_BeamProductReviewContent): unknown {
        const obj: any = {};
        if (message.overall !== '') {
            obj.overall = message.overall;
        }
        if (message.pros !== '') {
            obj.pros = message.pros;
        }
        if (message.cons !== '') {
            obj.cons = message.cons;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamProductReview_BeamProductReviewContent>, I>>(base?: I): BeamProductReview_BeamProductReviewContent {
        return BeamProductReview_BeamProductReviewContent.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamProductReview_BeamProductReviewContent>, I>>(object: I): BeamProductReview_BeamProductReviewContent {
        const message = createBaseBeamProductReview_BeamProductReviewContent();
        message.overall = object.overall ?? '';
        message.pros = object.pros ?? '';
        message.cons = object.cons ?? '';
        return message;
    },
};

function createBaseBeamProductReview_BeamProduct(): BeamProductReview_BeamProduct {
    return { name: '', url: '', urls: [], ids: undefined };
}

export const BeamProductReview_BeamProduct = {
    encode(message: BeamProductReview_BeamProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        for (const v of message.urls) {
            writer.uint32(26).string(v!);
        }
        if (message.ids !== undefined) {
            BeamProductReview_BeamProduct_BeamProductIds.encode(message.ids, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProduct {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.urls.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.ids = BeamProductReview_BeamProduct_BeamProductIds.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProduct {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            url: isSet(object.url) ? String(object.url) : '',
            urls: Array.isArray(object?.urls) ? object.urls.map((e: any) => String(e)) : [],
            ids: isSet(object.ids) ? BeamProductReview_BeamProduct_BeamProductIds.fromJSON(object.ids) : undefined,
        };
    },

    toJSON(message: BeamProductReview_BeamProduct): unknown {
        const obj: any = {};
        if (message.name !== '') {
            obj.name = message.name;
        }
        if (message.url !== '') {
            obj.url = message.url;
        }
        if (message.urls?.length) {
            obj.urls = message.urls;
        }
        if (message.ids !== undefined) {
            obj.ids = BeamProductReview_BeamProduct_BeamProductIds.toJSON(message.ids);
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamProductReview_BeamProduct>, I>>(base?: I): BeamProductReview_BeamProduct {
        return BeamProductReview_BeamProduct.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamProductReview_BeamProduct>, I>>(object: I): BeamProductReview_BeamProduct {
        const message = createBaseBeamProductReview_BeamProduct();
        message.name = object.name ?? '';
        message.url = object.url ?? '';
        message.urls = object.urls?.map((e) => e) || [];
        message.ids = object.ids !== undefined && object.ids !== null ? BeamProductReview_BeamProduct_BeamProductIds.fromPartial(object.ids) : undefined;
        return message;
    },
};

function createBaseBeamProductReview_BeamProduct_BeamProductIds(): BeamProductReview_BeamProduct_BeamProductIds {
    return { gtins: [], mpns: [], skus: [], asins: [] };
}

export const BeamProductReview_BeamProduct_BeamProductIds = {
    encode(message: BeamProductReview_BeamProduct_BeamProductIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.gtins) {
            writer.uint32(10).string(v!);
        }
        for (const v of message.mpns) {
            writer.uint32(18).string(v!);
        }
        for (const v of message.skus) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.asins) {
            writer.uint32(34).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamProductReview_BeamProduct_BeamProductIds {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.gtins.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.mpns.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.skus.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.asins.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProduct_BeamProductIds {
        return {
            gtins: Array.isArray(object?.gtins) ? object.gtins.map((e: any) => String(e)) : [],
            mpns: Array.isArray(object?.mpns) ? object.mpns.map((e: any) => String(e)) : [],
            skus: Array.isArray(object?.skus) ? object.skus.map((e: any) => String(e)) : [],
            asins: Array.isArray(object?.asins) ? object.asins.map((e: any) => String(e)) : [],
        };
    },

    toJSON(message: BeamProductReview_BeamProduct_BeamProductIds): unknown {
        const obj: any = {};
        if (message.gtins?.length) {
            obj.gtins = message.gtins;
        }
        if (message.mpns?.length) {
            obj.mpns = message.mpns;
        }
        if (message.skus?.length) {
            obj.skus = message.skus;
        }
        if (message.asins?.length) {
            obj.asins = message.asins;
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamProductReview_BeamProduct_BeamProductIds>, I>>(base?: I): BeamProductReview_BeamProduct_BeamProductIds {
        return BeamProductReview_BeamProduct_BeamProductIds.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamProductReview_BeamProduct_BeamProductIds>, I>>(object: I): BeamProductReview_BeamProduct_BeamProductIds {
        const message = createBaseBeamProductReview_BeamProduct_BeamProductIds();
        message.gtins = object.gtins?.map((e) => e) || [];
        message.mpns = object.mpns?.map((e) => e) || [];
        message.skus = object.skus?.map((e) => e) || [];
        message.asins = object.asins?.map((e) => e) || [];
        return message;
    },
};

function createBaseBeamData(): BeamData {
    return {
        reward: undefined,
        verifier: undefined,
        reviewer: undefined,
        merchantReview: undefined,
        productsReviews: [],
    };
}

export const BeamData = {
    encode(message: BeamData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.reward !== undefined) {
            BeamReward.encode(message.reward, writer.uint32(10).fork()).ldelim();
        }
        if (message.verifier !== undefined) {
            BeamVerifier.encode(message.verifier, writer.uint32(18).fork()).ldelim();
        }
        if (message.reviewer !== undefined) {
            BeamReviewer.encode(message.reviewer, writer.uint32(26).fork()).ldelim();
        }
        if (message.merchantReview !== undefined) {
            BeamMerchantReview.encode(message.merchantReview, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.productsReviews) {
            BeamProductReview.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamData {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeamData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.reward = BeamReward.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.verifier = BeamVerifier.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.reviewer = BeamReviewer.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.merchantReview = BeamMerchantReview.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.productsReviews.push(BeamProductReview.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): BeamData {
        return {
            reward: isSet(object.reward) ? BeamReward.fromJSON(object.reward) : undefined,
            verifier: isSet(object.verifier) ? BeamVerifier.fromJSON(object.verifier) : undefined,
            reviewer: isSet(object.reviewer) ? BeamReviewer.fromJSON(object.reviewer) : undefined,
            merchantReview: isSet(object.merchantReview) ? BeamMerchantReview.fromJSON(object.merchantReview) : undefined,
            productsReviews: Array.isArray(object?.productsReviews) ? object.productsReviews.map((e: any) => BeamProductReview.fromJSON(e)) : [],
        };
    },

    toJSON(message: BeamData): unknown {
        const obj: any = {};
        if (message.reward !== undefined) {
            obj.reward = BeamReward.toJSON(message.reward);
        }
        if (message.verifier !== undefined) {
            obj.verifier = BeamVerifier.toJSON(message.verifier);
        }
        if (message.reviewer !== undefined) {
            obj.reviewer = BeamReviewer.toJSON(message.reviewer);
        }
        if (message.merchantReview !== undefined) {
            obj.merchantReview = BeamMerchantReview.toJSON(message.merchantReview);
        }
        if (message.productsReviews?.length) {
            obj.productsReviews = message.productsReviews.map((e) => BeamProductReview.toJSON(e));
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<BeamData>, I>>(base?: I): BeamData {
        return BeamData.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<BeamData>, I>>(object: I): BeamData {
        const message = createBaseBeamData();
        message.reward = object.reward !== undefined && object.reward !== null ? BeamReward.fromPartial(object.reward) : undefined;
        message.verifier = object.verifier !== undefined && object.verifier !== null ? BeamVerifier.fromPartial(object.verifier) : undefined;
        message.reviewer = object.reviewer !== undefined && object.reviewer !== null ? BeamReviewer.fromPartial(object.reviewer) : undefined;
        message.merchantReview = object.merchantReview !== undefined && object.merchantReview !== null ? BeamMerchantReview.fromPartial(object.merchantReview) : undefined;
        message.productsReviews = object.productsReviews?.map((e) => BeamProductReview.fromPartial(e)) || [];
        return message;
    },
};

function createBaseBeam(): Beam {
    return {
        creatorAddress: '',
        id: '',
        amount: undefined,
        status: 0,
        secret: '',
        claimAddress: '',
        fundsWithdrawn: false,
        claimed: false,
        cancelReason: '',
        hideContent: false,
        schema: '',
        data: undefined,
        claimExpiresAtBlock: 0,
        closesAtBlock: 0,
        createdAt: undefined,
        closedAt: undefined,
    };
}

export const Beam = {
    encode(message: Beam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.creatorAddress !== '') {
            writer.uint32(10).string(message.creatorAddress);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.secret !== '') {
            writer.uint32(42).string(message.secret);
        }
        if (message.claimAddress !== '') {
            writer.uint32(50).string(message.claimAddress);
        }
        if (message.fundsWithdrawn === true) {
            writer.uint32(56).bool(message.fundsWithdrawn);
        }
        if (message.claimed === true) {
            writer.uint32(64).bool(message.claimed);
        }
        if (message.cancelReason !== '') {
            writer.uint32(74).string(message.cancelReason);
        }
        if (message.hideContent === true) {
            writer.uint32(80).bool(message.hideContent);
        }
        if (message.schema !== '') {
            writer.uint32(90).string(message.schema);
        }
        if (message.data !== undefined) {
            BeamData.encode(message.data, writer.uint32(98).fork()).ldelim();
        }
        if (message.claimExpiresAtBlock !== 0) {
            writer.uint32(104).int32(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            writer.uint32(112).int32(message.closesAtBlock);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(122).fork()).ldelim();
        }
        if (message.closedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.closedAt), writer.uint32(130).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Beam {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.creatorAddress = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.amount = Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.status = reader.int32() as any;
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.secret = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.claimAddress = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.fundsWithdrawn = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.claimed = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.cancelReason = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.hideContent = reader.bool();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.schema = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }

                    message.data = BeamData.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }

                    message.claimExpiresAtBlock = reader.int32();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }

                    message.closesAtBlock = reader.int32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }

                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }

                    message.closedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Beam {
        return {
            creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : '',
            id: isSet(object.id) ? String(object.id) : '',
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            status: isSet(object.status) ? beamStateFromJSON(object.status) : 0,
            secret: isSet(object.secret) ? String(object.secret) : '',
            claimAddress: isSet(object.claimAddress) ? String(object.claimAddress) : '',
            fundsWithdrawn: isSet(object.fundsWithdrawn) ? Boolean(object.fundsWithdrawn) : false,
            claimed: isSet(object.claimed) ? Boolean(object.claimed) : false,
            cancelReason: isSet(object.cancelReason) ? String(object.cancelReason) : '',
            hideContent: isSet(object.hideContent) ? Boolean(object.hideContent) : false,
            schema: isSet(object.schema) ? String(object.schema) : '',
            data: isSet(object.data) ? BeamData.fromJSON(object.data) : undefined,
            claimExpiresAtBlock: isSet(object.claimExpiresAtBlock) ? Number(object.claimExpiresAtBlock) : 0,
            closesAtBlock: isSet(object.closesAtBlock) ? Number(object.closesAtBlock) : 0,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            closedAt: isSet(object.closedAt) ? fromJsonTimestamp(object.closedAt) : undefined,
        };
    },

    toJSON(message: Beam): unknown {
        const obj: any = {};
        if (message.creatorAddress !== '') {
            obj.creatorAddress = message.creatorAddress;
        }
        if (message.id !== '') {
            obj.id = message.id;
        }
        if (message.amount !== undefined) {
            obj.amount = Coin.toJSON(message.amount);
        }
        if (message.status !== 0) {
            obj.status = beamStateToJSON(message.status);
        }
        if (message.secret !== '') {
            obj.secret = message.secret;
        }
        if (message.claimAddress !== '') {
            obj.claimAddress = message.claimAddress;
        }
        if (message.fundsWithdrawn === true) {
            obj.fundsWithdrawn = message.fundsWithdrawn;
        }
        if (message.claimed === true) {
            obj.claimed = message.claimed;
        }
        if (message.cancelReason !== '') {
            obj.cancelReason = message.cancelReason;
        }
        if (message.hideContent === true) {
            obj.hideContent = message.hideContent;
        }
        if (message.schema !== '') {
            obj.schema = message.schema;
        }
        if (message.data !== undefined) {
            obj.data = BeamData.toJSON(message.data);
        }
        if (message.claimExpiresAtBlock !== 0) {
            obj.claimExpiresAtBlock = Math.round(message.claimExpiresAtBlock);
        }
        if (message.closesAtBlock !== 0) {
            obj.closesAtBlock = Math.round(message.closesAtBlock);
        }
        if (message.createdAt !== undefined) {
            obj.createdAt = message.createdAt.toISOString();
        }
        if (message.closedAt !== undefined) {
            obj.closedAt = message.closedAt.toISOString();
        }
        return obj;
    },

    create<I extends Exact<DeepPartial<Beam>, I>>(base?: I): Beam {
        return Beam.fromPartial(base ?? {});
    },

    fromPartial<I extends Exact<DeepPartial<Beam>, I>>(object: I): Beam {
        const message = createBaseBeam();
        message.creatorAddress = object.creatorAddress ?? '';
        message.id = object.id ?? '';
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.status = object.status ?? 0;
        message.secret = object.secret ?? '';
        message.claimAddress = object.claimAddress ?? '';
        message.fundsWithdrawn = object.fundsWithdrawn ?? false;
        message.claimed = object.claimed ?? false;
        message.cancelReason = object.cancelReason ?? '';
        message.hideContent = object.hideContent ?? false;
        message.schema = object.schema ?? '';
        message.data = object.data !== undefined && object.data !== null ? BeamData.fromPartial(object.data) : undefined;
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.closedAt = object.closedAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = (t.seconds.toNumber() || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
    if (o instanceof Date) {
        return o;
    } else if (typeof o === 'string') {
        return new Date(o);
    } else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}

function numberToLong(number: number) {
    return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
