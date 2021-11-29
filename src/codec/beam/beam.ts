/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';
import { Timestamp } from '../google/protobuf/timestamp';

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
        default:
            return 'UNKNOWN';
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
    ratings?: BeamMerchantReview_BeamMerchantReviewRating;
    title: string;
    content?: BeamMerchantReview_BeamMerchantReviewContent;
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
    ratings?: BeamProductReview_BeamProductReviewRating;
    title: string;
    content?: BeamProductReview_BeamProductReviewContent;
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
    ids?: BeamProductReview_BeamProduct_BeamProductIds;
}

export interface BeamProductReview_BeamProduct_BeamProductIds {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}

export interface BeamData {
    reward?: BeamReward;
    verifier?: BeamVerifier;
    reviewer?: BeamReviewer;
    merchantReview?: BeamMerchantReview;
    productsReviews: BeamProductReview[];
}

export interface Beam {
    creatorAddress: string;
    id: string;
    amount?: Coin;
    status: BeamState;
    secret: string;
    claimAddress: string;
    fundsWithdrawn: boolean;
    claimed: boolean;
    cancelReason: string;
    hideContent: boolean;
    schema: string;
    data?: BeamData;
    claimExpiresAtBlock: number;
    closesAtBlock: number;
    createdAt?: Date;
    closedAt?: Date;
}

const baseBeamMedia: object = { mimetype: '', url: '', thumbnailUrl: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamMedia } as BeamMedia;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mimetype = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.thumbnailUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamMedia {
        const message = { ...baseBeamMedia } as BeamMedia;
        if (object.mimetype !== undefined && object.mimetype !== null) {
            message.mimetype = String(object.mimetype);
        } else {
            message.mimetype = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        if (object.thumbnailUrl !== undefined && object.thumbnailUrl !== null) {
            message.thumbnailUrl = String(object.thumbnailUrl);
        } else {
            message.thumbnailUrl = '';
        }
        return message;
    },

    toJSON(message: BeamMedia): unknown {
        const obj: any = {};
        message.mimetype !== undefined && (obj.mimetype = message.mimetype);
        message.url !== undefined && (obj.url = message.url);
        message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamMedia>): BeamMedia {
        const message = { ...baseBeamMedia } as BeamMedia;
        message.mimetype = object.mimetype ?? '';
        message.url = object.url ?? '';
        message.thumbnailUrl = object.thumbnailUrl ?? '';
        return message;
    },
};

const baseBeamReviewer: object = { reviewerId: '', name: '', isAnonymous: false };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReviewer } as BeamReviewer;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reviewerId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.isAnonymous = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReviewer {
        const message = { ...baseBeamReviewer } as BeamReviewer;
        if (object.reviewerId !== undefined && object.reviewerId !== null) {
            message.reviewerId = String(object.reviewerId);
        } else {
            message.reviewerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.isAnonymous !== undefined && object.isAnonymous !== null) {
            message.isAnonymous = Boolean(object.isAnonymous);
        } else {
            message.isAnonymous = false;
        }
        return message;
    },

    toJSON(message: BeamReviewer): unknown {
        const obj: any = {};
        message.reviewerId !== undefined && (obj.reviewerId = message.reviewerId);
        message.name !== undefined && (obj.name = message.name);
        message.isAnonymous !== undefined && (obj.isAnonymous = message.isAnonymous);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReviewer>): BeamReviewer {
        const message = { ...baseBeamReviewer } as BeamReviewer;
        message.reviewerId = object.reviewerId ?? '';
        message.name = object.name ?? '';
        message.isAnonymous = object.isAnonymous ?? false;
        return message;
    },
};

const baseBeamVerifier: object = { name: '', url: '', signature: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamVerifier } as BeamVerifier;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamVerifier {
        const message = { ...baseBeamVerifier } as BeamVerifier;
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        } else {
            message.signature = '';
        }
        return message;
    },

    toJSON(message: BeamVerifier): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamVerifier>): BeamVerifier {
        const message = { ...baseBeamVerifier } as BeamVerifier;
        message.name = object.name ?? '';
        message.url = object.url ?? '';
        message.signature = object.signature ?? '';
        return message;
    },
};

const baseBeamReward: object = { trigger: '', amount: 0, maxAmount: 0, currency: '', status: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReward } as BeamReward;
        message.details = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trigger = reader.string();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                case 3:
                    message.maxAmount = reader.float();
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
                    message.status = reader.string();
                    break;
                case 6:
                    message.details.push(BeamReward_BeamRewardDetails.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReward {
        const message = { ...baseBeamReward } as BeamReward;
        message.details = [];
        if (object.trigger !== undefined && object.trigger !== null) {
            message.trigger = String(object.trigger);
        } else {
            message.trigger = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        } else {
            message.amount = 0;
        }
        if (object.maxAmount !== undefined && object.maxAmount !== null) {
            message.maxAmount = Number(object.maxAmount);
        } else {
            message.maxAmount = 0;
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = String(object.currency);
        } else {
            message.currency = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        } else {
            message.status = '';
        }
        if (object.details !== undefined && object.details !== null) {
            for (const e of object.details) {
                message.details.push(BeamReward_BeamRewardDetails.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamReward): unknown {
        const obj: any = {};
        message.trigger !== undefined && (obj.trigger = message.trigger);
        message.amount !== undefined && (obj.amount = message.amount);
        message.maxAmount !== undefined && (obj.maxAmount = message.maxAmount);
        message.currency !== undefined && (obj.currency = message.currency);
        message.status !== undefined && (obj.status = message.status);
        if (message.details) {
            obj.details = message.details.map((e) => (e ? BeamReward_BeamRewardDetails.toJSON(e) : undefined));
        } else {
            obj.details = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReward>): BeamReward {
        const message = { ...baseBeamReward } as BeamReward;
        message.trigger = object.trigger ?? '';
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.currency = object.currency ?? '';
        message.status = object.status ?? '';
        message.details = [];
        if (object.details !== undefined && object.details !== null) {
            for (const e of object.details) {
                message.details.push(BeamReward_BeamRewardDetails.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeamReward_BeamRewardDetails: object = { type: '', amount: 0, maxAmount: 0, status: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReward_BeamRewardDetails } as BeamReward_BeamRewardDetails;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                case 3:
                    message.maxAmount = reader.float();
                    break;
                case 4:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReward_BeamRewardDetails {
        const message = { ...baseBeamReward_BeamRewardDetails } as BeamReward_BeamRewardDetails;
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        } else {
            message.type = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        } else {
            message.amount = 0;
        }
        if (object.maxAmount !== undefined && object.maxAmount !== null) {
            message.maxAmount = Number(object.maxAmount);
        } else {
            message.maxAmount = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        } else {
            message.status = '';
        }
        return message;
    },

    toJSON(message: BeamReward_BeamRewardDetails): unknown {
        const obj: any = {};
        message.type !== undefined && (obj.type = message.type);
        message.amount !== undefined && (obj.amount = message.amount);
        message.maxAmount !== undefined && (obj.maxAmount = message.maxAmount);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReward_BeamRewardDetails>): BeamReward_BeamRewardDetails {
        const message = { ...baseBeamReward_BeamRewardDetails } as BeamReward_BeamRewardDetails;
        message.type = object.type ?? '';
        message.amount = object.amount ?? 0;
        message.maxAmount = object.maxAmount ?? 0;
        message.status = object.status ?? '';
        return message;
    },
};

const baseBeamMerchantReview: object = { orderId: '', reviewId: '', merchantUrl: '', ratingUrl: '', reviewUrl: '', collectionMethod: '', timestamp: '', title: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamMerchantReview } as BeamMerchantReview;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.reviewId = reader.string();
                    break;
                case 3:
                    message.merchantUrl = reader.string();
                    break;
                case 4:
                    message.ratingUrl = reader.string();
                    break;
                case 5:
                    message.reviewUrl = reader.string();
                    break;
                case 6:
                    message.collectionMethod = reader.string();
                    break;
                case 7:
                    message.timestamp = reader.string();
                    break;
                case 8:
                    message.ratings = BeamMerchantReview_BeamMerchantReviewRating.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.title = reader.string();
                    break;
                case 10:
                    message.content = BeamMerchantReview_BeamMerchantReviewContent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview {
        const message = { ...baseBeamMerchantReview } as BeamMerchantReview;
        if (object.orderId !== undefined && object.orderId !== null) {
            message.orderId = String(object.orderId);
        } else {
            message.orderId = '';
        }
        if (object.reviewId !== undefined && object.reviewId !== null) {
            message.reviewId = String(object.reviewId);
        } else {
            message.reviewId = '';
        }
        if (object.merchantUrl !== undefined && object.merchantUrl !== null) {
            message.merchantUrl = String(object.merchantUrl);
        } else {
            message.merchantUrl = '';
        }
        if (object.ratingUrl !== undefined && object.ratingUrl !== null) {
            message.ratingUrl = String(object.ratingUrl);
        } else {
            message.ratingUrl = '';
        }
        if (object.reviewUrl !== undefined && object.reviewUrl !== null) {
            message.reviewUrl = String(object.reviewUrl);
        } else {
            message.reviewUrl = '';
        }
        if (object.collectionMethod !== undefined && object.collectionMethod !== null) {
            message.collectionMethod = String(object.collectionMethod);
        } else {
            message.collectionMethod = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        } else {
            message.timestamp = '';
        }
        if (object.ratings !== undefined && object.ratings !== null) {
            message.ratings = BeamMerchantReview_BeamMerchantReviewRating.fromJSON(object.ratings);
        } else {
            message.ratings = undefined;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = BeamMerchantReview_BeamMerchantReviewContent.fromJSON(object.content);
        } else {
            message.content = undefined;
        }
        return message;
    },

    toJSON(message: BeamMerchantReview): unknown {
        const obj: any = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.reviewId !== undefined && (obj.reviewId = message.reviewId);
        message.merchantUrl !== undefined && (obj.merchantUrl = message.merchantUrl);
        message.ratingUrl !== undefined && (obj.ratingUrl = message.ratingUrl);
        message.reviewUrl !== undefined && (obj.reviewUrl = message.reviewUrl);
        message.collectionMethod !== undefined && (obj.collectionMethod = message.collectionMethod);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.ratings !== undefined && (obj.ratings = message.ratings ? BeamMerchantReview_BeamMerchantReviewRating.toJSON(message.ratings) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.content !== undefined && (obj.content = message.content ? BeamMerchantReview_BeamMerchantReviewContent.toJSON(message.content) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamMerchantReview>): BeamMerchantReview {
        const message = { ...baseBeamMerchantReview } as BeamMerchantReview;
        message.orderId = object.orderId ?? '';
        message.reviewId = object.reviewId ?? '';
        message.merchantUrl = object.merchantUrl ?? '';
        message.ratingUrl = object.ratingUrl ?? '';
        message.reviewUrl = object.reviewUrl ?? '';
        message.collectionMethod = object.collectionMethod ?? '';
        message.timestamp = object.timestamp ?? '';
        if (object.ratings !== undefined && object.ratings !== null) {
            message.ratings = BeamMerchantReview_BeamMerchantReviewRating.fromPartial(object.ratings);
        } else {
            message.ratings = undefined;
        }
        message.title = object.title ?? '';
        if (object.content !== undefined && object.content !== null) {
            message.content = BeamMerchantReview_BeamMerchantReviewContent.fromPartial(object.content);
        } else {
            message.content = undefined;
        }
        return message;
    },
};

const baseBeamMerchantReview_BeamMerchantReviewRating: object = { overall: 0, customerService: 0, nps: 0 };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewRating } as BeamMerchantReview_BeamMerchantReviewRating;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.float();
                    break;
                case 2:
                    message.customerService = reader.float();
                    break;
                case 3:
                    message.nps = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview_BeamMerchantReviewRating {
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewRating } as BeamMerchantReview_BeamMerchantReviewRating;
        if (object.overall !== undefined && object.overall !== null) {
            message.overall = Number(object.overall);
        } else {
            message.overall = 0;
        }
        if (object.customerService !== undefined && object.customerService !== null) {
            message.customerService = Number(object.customerService);
        } else {
            message.customerService = 0;
        }
        if (object.nps !== undefined && object.nps !== null) {
            message.nps = Number(object.nps);
        } else {
            message.nps = 0;
        }
        return message;
    },

    toJSON(message: BeamMerchantReview_BeamMerchantReviewRating): unknown {
        const obj: any = {};
        message.overall !== undefined && (obj.overall = message.overall);
        message.customerService !== undefined && (obj.customerService = message.customerService);
        message.nps !== undefined && (obj.nps = message.nps);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamMerchantReview_BeamMerchantReviewRating>): BeamMerchantReview_BeamMerchantReviewRating {
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewRating } as BeamMerchantReview_BeamMerchantReviewRating;
        message.overall = object.overall ?? 0;
        message.customerService = object.customerService ?? 0;
        message.nps = object.nps ?? 0;
        return message;
    },
};

const baseBeamMerchantReview_BeamMerchantReviewContent: object = { overall: '', customerService: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewContent } as BeamMerchantReview_BeamMerchantReviewContent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.string();
                    break;
                case 2:
                    message.customerService = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamMerchantReview_BeamMerchantReviewContent {
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewContent } as BeamMerchantReview_BeamMerchantReviewContent;
        if (object.overall !== undefined && object.overall !== null) {
            message.overall = String(object.overall);
        } else {
            message.overall = '';
        }
        if (object.customerService !== undefined && object.customerService !== null) {
            message.customerService = String(object.customerService);
        } else {
            message.customerService = '';
        }
        return message;
    },

    toJSON(message: BeamMerchantReview_BeamMerchantReviewContent): unknown {
        const obj: any = {};
        message.overall !== undefined && (obj.overall = message.overall);
        message.customerService !== undefined && (obj.customerService = message.customerService);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamMerchantReview_BeamMerchantReviewContent>): BeamMerchantReview_BeamMerchantReviewContent {
        const message = { ...baseBeamMerchantReview_BeamMerchantReviewContent } as BeamMerchantReview_BeamMerchantReviewContent;
        message.overall = object.overall ?? '';
        message.customerService = object.customerService ?? '';
        return message;
    },
};

const baseBeamProductReview: object = { orderId: '', reviewId: '', ratingUrl: '', reviewUrl: '', collectionMethod: '', timestamp: '', title: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamProductReview } as BeamProductReview;
        message.medias = [];
        message.products = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.reviewId = reader.string();
                    break;
                case 3:
                    message.ratingUrl = reader.string();
                    break;
                case 4:
                    message.reviewUrl = reader.string();
                    break;
                case 5:
                    message.collectionMethod = reader.string();
                    break;
                case 6:
                    message.timestamp = reader.string();
                    break;
                case 7:
                    message.ratings = BeamProductReview_BeamProductReviewRating.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.title = reader.string();
                    break;
                case 9:
                    message.content = BeamProductReview_BeamProductReviewContent.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.medias.push(BeamMedia.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.products.push(BeamProductReview_BeamProduct.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview {
        const message = { ...baseBeamProductReview } as BeamProductReview;
        message.medias = [];
        message.products = [];
        if (object.orderId !== undefined && object.orderId !== null) {
            message.orderId = String(object.orderId);
        } else {
            message.orderId = '';
        }
        if (object.reviewId !== undefined && object.reviewId !== null) {
            message.reviewId = String(object.reviewId);
        } else {
            message.reviewId = '';
        }
        if (object.ratingUrl !== undefined && object.ratingUrl !== null) {
            message.ratingUrl = String(object.ratingUrl);
        } else {
            message.ratingUrl = '';
        }
        if (object.reviewUrl !== undefined && object.reviewUrl !== null) {
            message.reviewUrl = String(object.reviewUrl);
        } else {
            message.reviewUrl = '';
        }
        if (object.collectionMethod !== undefined && object.collectionMethod !== null) {
            message.collectionMethod = String(object.collectionMethod);
        } else {
            message.collectionMethod = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        } else {
            message.timestamp = '';
        }
        if (object.ratings !== undefined && object.ratings !== null) {
            message.ratings = BeamProductReview_BeamProductReviewRating.fromJSON(object.ratings);
        } else {
            message.ratings = undefined;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = BeamProductReview_BeamProductReviewContent.fromJSON(object.content);
        } else {
            message.content = undefined;
        }
        if (object.medias !== undefined && object.medias !== null) {
            for (const e of object.medias) {
                message.medias.push(BeamMedia.fromJSON(e));
            }
        }
        if (object.products !== undefined && object.products !== null) {
            for (const e of object.products) {
                message.products.push(BeamProductReview_BeamProduct.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamProductReview): unknown {
        const obj: any = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.reviewId !== undefined && (obj.reviewId = message.reviewId);
        message.ratingUrl !== undefined && (obj.ratingUrl = message.ratingUrl);
        message.reviewUrl !== undefined && (obj.reviewUrl = message.reviewUrl);
        message.collectionMethod !== undefined && (obj.collectionMethod = message.collectionMethod);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.ratings !== undefined && (obj.ratings = message.ratings ? BeamProductReview_BeamProductReviewRating.toJSON(message.ratings) : undefined);
        message.title !== undefined && (obj.title = message.title);
        message.content !== undefined && (obj.content = message.content ? BeamProductReview_BeamProductReviewContent.toJSON(message.content) : undefined);
        if (message.medias) {
            obj.medias = message.medias.map((e) => (e ? BeamMedia.toJSON(e) : undefined));
        } else {
            obj.medias = [];
        }
        if (message.products) {
            obj.products = message.products.map((e) => (e ? BeamProductReview_BeamProduct.toJSON(e) : undefined));
        } else {
            obj.products = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamProductReview>): BeamProductReview {
        const message = { ...baseBeamProductReview } as BeamProductReview;
        message.orderId = object.orderId ?? '';
        message.reviewId = object.reviewId ?? '';
        message.ratingUrl = object.ratingUrl ?? '';
        message.reviewUrl = object.reviewUrl ?? '';
        message.collectionMethod = object.collectionMethod ?? '';
        message.timestamp = object.timestamp ?? '';
        if (object.ratings !== undefined && object.ratings !== null) {
            message.ratings = BeamProductReview_BeamProductReviewRating.fromPartial(object.ratings);
        } else {
            message.ratings = undefined;
        }
        message.title = object.title ?? '';
        if (object.content !== undefined && object.content !== null) {
            message.content = BeamProductReview_BeamProductReviewContent.fromPartial(object.content);
        } else {
            message.content = undefined;
        }
        message.medias = [];
        if (object.medias !== undefined && object.medias !== null) {
            for (const e of object.medias) {
                message.medias.push(BeamMedia.fromPartial(e));
            }
        }
        message.products = [];
        if (object.products !== undefined && object.products !== null) {
            for (const e of object.products) {
                message.products.push(BeamProductReview_BeamProduct.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeamProductReview_BeamProductReviewRating: object = { overall: 0, quality: 0 };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamProductReview_BeamProductReviewRating } as BeamProductReview_BeamProductReviewRating;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.float();
                    break;
                case 2:
                    message.quality = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProductReviewRating {
        const message = { ...baseBeamProductReview_BeamProductReviewRating } as BeamProductReview_BeamProductReviewRating;
        if (object.overall !== undefined && object.overall !== null) {
            message.overall = Number(object.overall);
        } else {
            message.overall = 0;
        }
        if (object.quality !== undefined && object.quality !== null) {
            message.quality = Number(object.quality);
        } else {
            message.quality = 0;
        }
        return message;
    },

    toJSON(message: BeamProductReview_BeamProductReviewRating): unknown {
        const obj: any = {};
        message.overall !== undefined && (obj.overall = message.overall);
        message.quality !== undefined && (obj.quality = message.quality);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamProductReview_BeamProductReviewRating>): BeamProductReview_BeamProductReviewRating {
        const message = { ...baseBeamProductReview_BeamProductReviewRating } as BeamProductReview_BeamProductReviewRating;
        message.overall = object.overall ?? 0;
        message.quality = object.quality ?? 0;
        return message;
    },
};

const baseBeamProductReview_BeamProductReviewContent: object = { overall: '', pros: '', cons: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamProductReview_BeamProductReviewContent } as BeamProductReview_BeamProductReviewContent;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.overall = reader.string();
                    break;
                case 2:
                    message.pros = reader.string();
                    break;
                case 3:
                    message.cons = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProductReviewContent {
        const message = { ...baseBeamProductReview_BeamProductReviewContent } as BeamProductReview_BeamProductReviewContent;
        if (object.overall !== undefined && object.overall !== null) {
            message.overall = String(object.overall);
        } else {
            message.overall = '';
        }
        if (object.pros !== undefined && object.pros !== null) {
            message.pros = String(object.pros);
        } else {
            message.pros = '';
        }
        if (object.cons !== undefined && object.cons !== null) {
            message.cons = String(object.cons);
        } else {
            message.cons = '';
        }
        return message;
    },

    toJSON(message: BeamProductReview_BeamProductReviewContent): unknown {
        const obj: any = {};
        message.overall !== undefined && (obj.overall = message.overall);
        message.pros !== undefined && (obj.pros = message.pros);
        message.cons !== undefined && (obj.cons = message.cons);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamProductReview_BeamProductReviewContent>): BeamProductReview_BeamProductReviewContent {
        const message = { ...baseBeamProductReview_BeamProductReviewContent } as BeamProductReview_BeamProductReviewContent;
        message.overall = object.overall ?? '';
        message.pros = object.pros ?? '';
        message.cons = object.cons ?? '';
        return message;
    },
};

const baseBeamProductReview_BeamProduct: object = { name: '', url: '', urls: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamProductReview_BeamProduct } as BeamProductReview_BeamProduct;
        message.urls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.urls.push(reader.string());
                    break;
                case 4:
                    message.ids = BeamProductReview_BeamProduct_BeamProductIds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProduct {
        const message = { ...baseBeamProductReview_BeamProduct } as BeamProductReview_BeamProduct;
        message.urls = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        } else {
            message.url = '';
        }
        if (object.urls !== undefined && object.urls !== null) {
            for (const e of object.urls) {
                message.urls.push(String(e));
            }
        }
        if (object.ids !== undefined && object.ids !== null) {
            message.ids = BeamProductReview_BeamProduct_BeamProductIds.fromJSON(object.ids);
        } else {
            message.ids = undefined;
        }
        return message;
    },

    toJSON(message: BeamProductReview_BeamProduct): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        if (message.urls) {
            obj.urls = message.urls.map((e) => e);
        } else {
            obj.urls = [];
        }
        message.ids !== undefined && (obj.ids = message.ids ? BeamProductReview_BeamProduct_BeamProductIds.toJSON(message.ids) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamProductReview_BeamProduct>): BeamProductReview_BeamProduct {
        const message = { ...baseBeamProductReview_BeamProduct } as BeamProductReview_BeamProduct;
        message.name = object.name ?? '';
        message.url = object.url ?? '';
        message.urls = [];
        if (object.urls !== undefined && object.urls !== null) {
            for (const e of object.urls) {
                message.urls.push(e);
            }
        }
        if (object.ids !== undefined && object.ids !== null) {
            message.ids = BeamProductReview_BeamProduct_BeamProductIds.fromPartial(object.ids);
        } else {
            message.ids = undefined;
        }
        return message;
    },
};

const baseBeamProductReview_BeamProduct_BeamProductIds: object = { gtins: '', mpns: '', skus: '', asins: '' };

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamProductReview_BeamProduct_BeamProductIds } as BeamProductReview_BeamProduct_BeamProductIds;
        message.gtins = [];
        message.mpns = [];
        message.skus = [];
        message.asins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gtins.push(reader.string());
                    break;
                case 2:
                    message.mpns.push(reader.string());
                    break;
                case 3:
                    message.skus.push(reader.string());
                    break;
                case 4:
                    message.asins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamProductReview_BeamProduct_BeamProductIds {
        const message = { ...baseBeamProductReview_BeamProduct_BeamProductIds } as BeamProductReview_BeamProduct_BeamProductIds;
        message.gtins = [];
        message.mpns = [];
        message.skus = [];
        message.asins = [];
        if (object.gtins !== undefined && object.gtins !== null) {
            for (const e of object.gtins) {
                message.gtins.push(String(e));
            }
        }
        if (object.mpns !== undefined && object.mpns !== null) {
            for (const e of object.mpns) {
                message.mpns.push(String(e));
            }
        }
        if (object.skus !== undefined && object.skus !== null) {
            for (const e of object.skus) {
                message.skus.push(String(e));
            }
        }
        if (object.asins !== undefined && object.asins !== null) {
            for (const e of object.asins) {
                message.asins.push(String(e));
            }
        }
        return message;
    },

    toJSON(message: BeamProductReview_BeamProduct_BeamProductIds): unknown {
        const obj: any = {};
        if (message.gtins) {
            obj.gtins = message.gtins.map((e) => e);
        } else {
            obj.gtins = [];
        }
        if (message.mpns) {
            obj.mpns = message.mpns.map((e) => e);
        } else {
            obj.mpns = [];
        }
        if (message.skus) {
            obj.skus = message.skus.map((e) => e);
        } else {
            obj.skus = [];
        }
        if (message.asins) {
            obj.asins = message.asins.map((e) => e);
        } else {
            obj.asins = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamProductReview_BeamProduct_BeamProductIds>): BeamProductReview_BeamProduct_BeamProductIds {
        const message = { ...baseBeamProductReview_BeamProduct_BeamProductIds } as BeamProductReview_BeamProduct_BeamProductIds;
        message.gtins = [];
        if (object.gtins !== undefined && object.gtins !== null) {
            for (const e of object.gtins) {
                message.gtins.push(e);
            }
        }
        message.mpns = [];
        if (object.mpns !== undefined && object.mpns !== null) {
            for (const e of object.mpns) {
                message.mpns.push(e);
            }
        }
        message.skus = [];
        if (object.skus !== undefined && object.skus !== null) {
            for (const e of object.skus) {
                message.skus.push(e);
            }
        }
        message.asins = [];
        if (object.asins !== undefined && object.asins !== null) {
            for (const e of object.asins) {
                message.asins.push(e);
            }
        }
        return message;
    },
};

const baseBeamData: object = {};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamData } as BeamData;
        message.productsReviews = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reward = BeamReward.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.verifier = BeamVerifier.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reviewer = BeamReviewer.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.merchantReview = BeamMerchantReview.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.productsReviews.push(BeamProductReview.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamData {
        const message = { ...baseBeamData } as BeamData;
        message.productsReviews = [];
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = BeamVerifier.fromJSON(object.verifier);
        } else {
            message.verifier = undefined;
        }
        if (object.reviewer !== undefined && object.reviewer !== null) {
            message.reviewer = BeamReviewer.fromJSON(object.reviewer);
        } else {
            message.reviewer = undefined;
        }
        if (object.merchantReview !== undefined && object.merchantReview !== null) {
            message.merchantReview = BeamMerchantReview.fromJSON(object.merchantReview);
        } else {
            message.merchantReview = undefined;
        }
        if (object.productsReviews !== undefined && object.productsReviews !== null) {
            for (const e of object.productsReviews) {
                message.productsReviews.push(BeamProductReview.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamData): unknown {
        const obj: any = {};
        message.reward !== undefined && (obj.reward = message.reward ? BeamReward.toJSON(message.reward) : undefined);
        message.verifier !== undefined && (obj.verifier = message.verifier ? BeamVerifier.toJSON(message.verifier) : undefined);
        message.reviewer !== undefined && (obj.reviewer = message.reviewer ? BeamReviewer.toJSON(message.reviewer) : undefined);
        message.merchantReview !== undefined && (obj.merchantReview = message.merchantReview ? BeamMerchantReview.toJSON(message.merchantReview) : undefined);
        if (message.productsReviews) {
            obj.productsReviews = message.productsReviews.map((e) => (e ? BeamProductReview.toJSON(e) : undefined));
        } else {
            obj.productsReviews = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamData>): BeamData {
        const message = { ...baseBeamData } as BeamData;
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.verifier !== undefined && object.verifier !== null) {
            message.verifier = BeamVerifier.fromPartial(object.verifier);
        } else {
            message.verifier = undefined;
        }
        if (object.reviewer !== undefined && object.reviewer !== null) {
            message.reviewer = BeamReviewer.fromPartial(object.reviewer);
        } else {
            message.reviewer = undefined;
        }
        if (object.merchantReview !== undefined && object.merchantReview !== null) {
            message.merchantReview = BeamMerchantReview.fromPartial(object.merchantReview);
        } else {
            message.merchantReview = undefined;
        }
        message.productsReviews = [];
        if (object.productsReviews !== undefined && object.productsReviews !== null) {
            for (const e of object.productsReviews) {
                message.productsReviews.push(BeamProductReview.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeam: object = {
    creatorAddress: '',
    id: '',
    status: 0,
    secret: '',
    claimAddress: '',
    fundsWithdrawn: false,
    claimed: false,
    cancelReason: '',
    hideContent: false,
    schema: '',
    claimExpiresAtBlock: 0,
    closesAtBlock: 0,
};

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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeam } as Beam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creatorAddress = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status = reader.int32() as any;
                    break;
                case 5:
                    message.secret = reader.string();
                    break;
                case 6:
                    message.claimAddress = reader.string();
                    break;
                case 7:
                    message.fundsWithdrawn = reader.bool();
                    break;
                case 8:
                    message.claimed = reader.bool();
                    break;
                case 9:
                    message.cancelReason = reader.string();
                    break;
                case 10:
                    message.hideContent = reader.bool();
                    break;
                case 11:
                    message.schema = reader.string();
                    break;
                case 12:
                    message.data = BeamData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.claimExpiresAtBlock = reader.int32();
                    break;
                case 14:
                    message.closesAtBlock = reader.int32();
                    break;
                case 15:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.closedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Beam {
        const message = { ...baseBeam } as Beam;
        if (object.creatorAddress !== undefined && object.creatorAddress !== null) {
            message.creatorAddress = String(object.creatorAddress);
        } else {
            message.creatorAddress = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromJSON(object.amount);
        } else {
            message.amount = undefined;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = beamStateFromJSON(object.status);
        } else {
            message.status = 0;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        if (object.claimAddress !== undefined && object.claimAddress !== null) {
            message.claimAddress = String(object.claimAddress);
        } else {
            message.claimAddress = '';
        }
        if (object.fundsWithdrawn !== undefined && object.fundsWithdrawn !== null) {
            message.fundsWithdrawn = Boolean(object.fundsWithdrawn);
        } else {
            message.fundsWithdrawn = false;
        }
        if (object.claimed !== undefined && object.claimed !== null) {
            message.claimed = Boolean(object.claimed);
        } else {
            message.claimed = false;
        }
        if (object.cancelReason !== undefined && object.cancelReason !== null) {
            message.cancelReason = String(object.cancelReason);
        } else {
            message.cancelReason = '';
        }
        if (object.hideContent !== undefined && object.hideContent !== null) {
            message.hideContent = Boolean(object.hideContent);
        } else {
            message.hideContent = false;
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        } else {
            message.schema = '';
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromJSON(object.data);
        } else {
            message.data = undefined;
        }
        if (object.claimExpiresAtBlock !== undefined && object.claimExpiresAtBlock !== null) {
            message.claimExpiresAtBlock = Number(object.claimExpiresAtBlock);
        } else {
            message.claimExpiresAtBlock = 0;
        }
        if (object.closesAtBlock !== undefined && object.closesAtBlock !== null) {
            message.closesAtBlock = Number(object.closesAtBlock);
        } else {
            message.closesAtBlock = 0;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        } else {
            message.createdAt = undefined;
        }
        if (object.closedAt !== undefined && object.closedAt !== null) {
            message.closedAt = fromJsonTimestamp(object.closedAt);
        } else {
            message.closedAt = undefined;
        }
        return message;
    },

    toJSON(message: Beam): unknown {
        const obj: any = {};
        message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.status !== undefined && (obj.status = beamStateToJSON(message.status));
        message.secret !== undefined && (obj.secret = message.secret);
        message.claimAddress !== undefined && (obj.claimAddress = message.claimAddress);
        message.fundsWithdrawn !== undefined && (obj.fundsWithdrawn = message.fundsWithdrawn);
        message.claimed !== undefined && (obj.claimed = message.claimed);
        message.cancelReason !== undefined && (obj.cancelReason = message.cancelReason);
        message.hideContent !== undefined && (obj.hideContent = message.hideContent);
        message.schema !== undefined && (obj.schema = message.schema);
        message.data !== undefined && (obj.data = message.data ? BeamData.toJSON(message.data) : undefined);
        message.claimExpiresAtBlock !== undefined && (obj.claimExpiresAtBlock = message.claimExpiresAtBlock);
        message.closesAtBlock !== undefined && (obj.closesAtBlock = message.closesAtBlock);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.closedAt !== undefined && (obj.closedAt = message.closedAt.toISOString());
        return obj;
    },

    fromPartial(object: DeepPartial<Beam>): Beam {
        const message = { ...baseBeam } as Beam;
        message.creatorAddress = object.creatorAddress ?? '';
        message.id = object.id ?? '';
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromPartial(object.amount);
        } else {
            message.amount = undefined;
        }
        message.status = object.status ?? 0;
        message.secret = object.secret ?? '';
        message.claimAddress = object.claimAddress ?? '';
        message.fundsWithdrawn = object.fundsWithdrawn ?? false;
        message.claimed = object.claimed ?? false;
        message.cancelReason = object.cancelReason ?? '';
        message.hideContent = object.hideContent ?? false;
        message.schema = object.schema ?? '';
        if (object.data !== undefined && object.data !== null) {
            message.data = BeamData.fromPartial(object.data);
        } else {
            message.data = undefined;
        }
        message.claimExpiresAtBlock = object.claimExpiresAtBlock ?? 0;
        message.closesAtBlock = object.closesAtBlock ?? 0;
        message.createdAt = object.createdAt ?? undefined;
        message.closedAt = object.closedAt ?? undefined;
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

function toTimestamp(date: Date): Timestamp {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
    let millis = t.seconds.toNumber() * 1_000;
    millis += t.nanos / 1_000_000;
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
