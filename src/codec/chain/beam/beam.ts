/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'lum.network.beam';

export interface BeamReward {
    rewards: BeamReward_BeamRewardDetails[];
}

export interface BeamReward_BeamRewardDetails {
    name: string;
    amount: Long;
    maxAmount: Long;
    currency: string;
    status: string;
}

export interface BeamReview {
    reviewer?: BeamReview_BeamReviewReviewer;
    merchantReview?: BeamReview_BeamReviewMerchantReview;
    productsReviews: BeamReview_BeamReviewProductReview[];
}

export interface BeamReview_BeamReviewReviewer {
    reviewerId: string;
    name: string;
    isAnonymous: boolean;
}

export interface BeamReview_BeamReviewMerchantReview {
    reviewId: string;
    merchantUrl: string;
    ratingUrl: string;
    reviewUrl: string;
    timestamp: string;
    ratings: { [key: string]: Long };
    title: string;
    content: { [key: string]: string };
}

export interface BeamReview_BeamReviewMerchantReview_RatingsEntry {
    key: string;
    value: Long;
}

export interface BeamReview_BeamReviewMerchantReview_ContentEntry {
    key: string;
    value: string;
}

export interface BeamReview_BeamReviewProductReview {
    reviewId: string;
    ratingUrl: string;
    reviewUrl: string;
    collectionMethod: string;
    timestamp: string;
    ratings: { [key: string]: Long };
    title: string;
    content: { [key: string]: string };
    medias: BeamReview_BeamReviewProductReview_Media[];
    products: BeamReview_BeamReviewProductReview_Product[];
}

export interface BeamReview_BeamReviewProductReview_Media {
    mimetype: string;
    url: string;
    thumbnailUrl: string;
}

export interface BeamReview_BeamReviewProductReview_Product {
    name: string;
    url: string;
    brands: string[];
    ids?: BeamReview_BeamReviewProductReview_Product_ProductIds;
}

export interface BeamReview_BeamReviewProductReview_Product_ProductIds {
    gtins: string[];
    mpns: string[];
    skus: string[];
    asins: string[];
}

export interface BeamReview_BeamReviewProductReview_RatingsEntry {
    key: string;
    value: Long;
}

export interface BeamReview_BeamReviewProductReview_ContentEntry {
    key: string;
    value: string;
}

export interface Beam {
    creator: string;
    id: string;
    amount: Long;
    status: string;
    secret: string;
    schema: string;
    reward?: BeamReward;
    review?: BeamReview;
}

export interface MsgOpenBeam {
    id: string;
    creator: string;
    amount: Long;
    secret: string;
    reward?: BeamReward;
    review?: BeamReview;
}

export interface MsgUpdateBeam {
    updater: string;
    id: string;
    amount: Long;
    reward?: BeamReward;
    review?: BeamReview;
}

export interface MsgCancelBeam {
    updater: string;
    id: string;
}

export interface MsgCloseBeam {
    updater: string;
    id: string;
}

export interface MsgClaimBeam {
    claimer: string;
    id: string;
    secret: string;
}

const baseBeamReward: object = {};

export const BeamReward = {
    encode(message: BeamReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.rewards) {
            BeamReward_BeamRewardDetails.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReward {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReward } as BeamReward;
        message.rewards = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(BeamReward_BeamRewardDetails.decode(reader, reader.uint32()));
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
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(BeamReward_BeamRewardDetails.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamReward): unknown {
        const obj: any = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => (e ? BeamReward_BeamRewardDetails.toJSON(e) : undefined));
        } else {
            obj.rewards = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReward>): BeamReward {
        const message = { ...baseBeamReward } as BeamReward;
        message.rewards = [];
        if (object.rewards !== undefined && object.rewards !== null) {
            for (const e of object.rewards) {
                message.rewards.push(BeamReward_BeamRewardDetails.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeamReward_BeamRewardDetails: object = { name: '', amount: Long.ZERO, maxAmount: Long.ZERO, currency: '', status: '' };

export const BeamReward_BeamRewardDetails = {
    encode(message: BeamReward_BeamRewardDetails, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (!message.amount.isZero()) {
            writer.uint32(16).int64(message.amount);
        }
        if (!message.maxAmount.isZero()) {
            writer.uint32(24).int64(message.maxAmount);
        }
        if (message.currency !== '') {
            writer.uint32(34).string(message.currency);
        }
        if (message.status !== '') {
            writer.uint32(42).string(message.status);
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.amount = reader.int64() as Long;
                    break;
                case 3:
                    message.maxAmount = reader.int64() as Long;
                    break;
                case 4:
                    message.currency = reader.string();
                    break;
                case 5:
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        } else {
            message.amount = Long.ZERO;
        }
        if (object.maxAmount !== undefined && object.maxAmount !== null) {
            message.maxAmount = Long.fromString(object.maxAmount);
        } else {
            message.maxAmount = Long.ZERO;
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
        return message;
    },

    toJSON(message: BeamReward_BeamRewardDetails): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
        message.maxAmount !== undefined && (obj.maxAmount = (message.maxAmount || Long.ZERO).toString());
        message.currency !== undefined && (obj.currency = message.currency);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReward_BeamRewardDetails>): BeamReward_BeamRewardDetails {
        const message = { ...baseBeamReward_BeamRewardDetails } as BeamReward_BeamRewardDetails;
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount as Long;
        } else {
            message.amount = Long.ZERO;
        }
        if (object.maxAmount !== undefined && object.maxAmount !== null) {
            message.maxAmount = object.maxAmount as Long;
        } else {
            message.maxAmount = Long.ZERO;
        }
        if (object.currency !== undefined && object.currency !== null) {
            message.currency = object.currency;
        } else {
            message.currency = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = '';
        }
        return message;
    },
};

const baseBeamReview: object = {};

export const BeamReview = {
    encode(message: BeamReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.reviewer !== undefined) {
            BeamReview_BeamReviewReviewer.encode(message.reviewer, writer.uint32(10).fork()).ldelim();
        }
        if (message.merchantReview !== undefined) {
            BeamReview_BeamReviewMerchantReview.encode(message.merchantReview, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.productsReviews) {
            BeamReview_BeamReviewProductReview.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview } as BeamReview;
        message.productsReviews = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reviewer = BeamReview_BeamReviewReviewer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.merchantReview = BeamReview_BeamReviewMerchantReview.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.productsReviews.push(BeamReview_BeamReviewProductReview.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview {
        const message = { ...baseBeamReview } as BeamReview;
        message.productsReviews = [];
        if (object.reviewer !== undefined && object.reviewer !== null) {
            message.reviewer = BeamReview_BeamReviewReviewer.fromJSON(object.reviewer);
        } else {
            message.reviewer = undefined;
        }
        if (object.merchantReview !== undefined && object.merchantReview !== null) {
            message.merchantReview = BeamReview_BeamReviewMerchantReview.fromJSON(object.merchantReview);
        } else {
            message.merchantReview = undefined;
        }
        if (object.productsReviews !== undefined && object.productsReviews !== null) {
            for (const e of object.productsReviews) {
                message.productsReviews.push(BeamReview_BeamReviewProductReview.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamReview): unknown {
        const obj: any = {};
        message.reviewer !== undefined && (obj.reviewer = message.reviewer ? BeamReview_BeamReviewReviewer.toJSON(message.reviewer) : undefined);
        message.merchantReview !== undefined && (obj.merchantReview = message.merchantReview ? BeamReview_BeamReviewMerchantReview.toJSON(message.merchantReview) : undefined);
        if (message.productsReviews) {
            obj.productsReviews = message.productsReviews.map((e) => (e ? BeamReview_BeamReviewProductReview.toJSON(e) : undefined));
        } else {
            obj.productsReviews = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview>): BeamReview {
        const message = { ...baseBeamReview } as BeamReview;
        message.productsReviews = [];
        if (object.reviewer !== undefined && object.reviewer !== null) {
            message.reviewer = BeamReview_BeamReviewReviewer.fromPartial(object.reviewer);
        } else {
            message.reviewer = undefined;
        }
        if (object.merchantReview !== undefined && object.merchantReview !== null) {
            message.merchantReview = BeamReview_BeamReviewMerchantReview.fromPartial(object.merchantReview);
        } else {
            message.merchantReview = undefined;
        }
        if (object.productsReviews !== undefined && object.productsReviews !== null) {
            for (const e of object.productsReviews) {
                message.productsReviews.push(BeamReview_BeamReviewProductReview.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeamReview_BeamReviewReviewer: object = { reviewerId: '', name: '', isAnonymous: false };

export const BeamReview_BeamReviewReviewer = {
    encode(message: BeamReview_BeamReviewReviewer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewReviewer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewReviewer } as BeamReview_BeamReviewReviewer;
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

    fromJSON(object: any): BeamReview_BeamReviewReviewer {
        const message = { ...baseBeamReview_BeamReviewReviewer } as BeamReview_BeamReviewReviewer;
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

    toJSON(message: BeamReview_BeamReviewReviewer): unknown {
        const obj: any = {};
        message.reviewerId !== undefined && (obj.reviewerId = message.reviewerId);
        message.name !== undefined && (obj.name = message.name);
        message.isAnonymous !== undefined && (obj.isAnonymous = message.isAnonymous);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewReviewer>): BeamReview_BeamReviewReviewer {
        const message = { ...baseBeamReview_BeamReviewReviewer } as BeamReview_BeamReviewReviewer;
        if (object.reviewerId !== undefined && object.reviewerId !== null) {
            message.reviewerId = object.reviewerId;
        } else {
            message.reviewerId = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.isAnonymous !== undefined && object.isAnonymous !== null) {
            message.isAnonymous = object.isAnonymous;
        } else {
            message.isAnonymous = false;
        }
        return message;
    },
};

const baseBeamReview_BeamReviewMerchantReview: object = { reviewId: '', merchantUrl: '', ratingUrl: '', reviewUrl: '', timestamp: '', title: '' };

export const BeamReview_BeamReviewMerchantReview = {
    encode(message: BeamReview_BeamReviewMerchantReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.reviewId !== '') {
            writer.uint32(10).string(message.reviewId);
        }
        if (message.merchantUrl !== '') {
            writer.uint32(18).string(message.merchantUrl);
        }
        if (message.ratingUrl !== '') {
            writer.uint32(26).string(message.ratingUrl);
        }
        if (message.reviewUrl !== '') {
            writer.uint32(34).string(message.reviewUrl);
        }
        if (message.timestamp !== '') {
            writer.uint32(42).string(message.timestamp);
        }
        Object.entries(message.ratings).forEach(([key, value]) => {
            BeamReview_BeamReviewMerchantReview_RatingsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.title !== '') {
            writer.uint32(58).string(message.title);
        }
        Object.entries(message.content).forEach(([key, value]) => {
            BeamReview_BeamReviewMerchantReview_ContentEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewMerchantReview {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewMerchantReview } as BeamReview_BeamReviewMerchantReview;
        message.ratings = {};
        message.content = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reviewId = reader.string();
                    break;
                case 2:
                    message.merchantUrl = reader.string();
                    break;
                case 3:
                    message.ratingUrl = reader.string();
                    break;
                case 4:
                    message.reviewUrl = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.string();
                    break;
                case 6:
                    const entry6 = BeamReview_BeamReviewMerchantReview_RatingsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.ratings[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.title = reader.string();
                    break;
                case 8:
                    const entry8 = BeamReview_BeamReviewMerchantReview_ContentEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.content[entry8.key] = entry8.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewMerchantReview {
        const message = { ...baseBeamReview_BeamReviewMerchantReview } as BeamReview_BeamReviewMerchantReview;
        message.ratings = {};
        message.content = {};
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
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = String(object.timestamp);
        } else {
            message.timestamp = '';
        }
        if (object.ratings !== undefined && object.ratings !== null) {
            Object.entries(object.ratings).forEach(([key, value]) => {
                message.ratings[key] = new Long(value as any);
            });
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            Object.entries(object.content).forEach(([key, value]) => {
                message.content[key] = String(value);
            });
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewMerchantReview): unknown {
        const obj: any = {};
        message.reviewId !== undefined && (obj.reviewId = message.reviewId);
        message.merchantUrl !== undefined && (obj.merchantUrl = message.merchantUrl);
        message.ratingUrl !== undefined && (obj.ratingUrl = message.ratingUrl);
        message.reviewUrl !== undefined && (obj.reviewUrl = message.reviewUrl);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        obj.ratings = {};
        if (message.ratings) {
            Object.entries(message.ratings).forEach(([k, v]) => {
                obj.ratings[k] = v;
            });
        }
        message.title !== undefined && (obj.title = message.title);
        obj.content = {};
        if (message.content) {
            Object.entries(message.content).forEach(([k, v]) => {
                obj.content[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewMerchantReview>): BeamReview_BeamReviewMerchantReview {
        const message = { ...baseBeamReview_BeamReviewMerchantReview } as BeamReview_BeamReviewMerchantReview;
        message.ratings = {};
        message.content = {};
        if (object.reviewId !== undefined && object.reviewId !== null) {
            message.reviewId = object.reviewId;
        } else {
            message.reviewId = '';
        }
        if (object.merchantUrl !== undefined && object.merchantUrl !== null) {
            message.merchantUrl = object.merchantUrl;
        } else {
            message.merchantUrl = '';
        }
        if (object.ratingUrl !== undefined && object.ratingUrl !== null) {
            message.ratingUrl = object.ratingUrl;
        } else {
            message.ratingUrl = '';
        }
        if (object.reviewUrl !== undefined && object.reviewUrl !== null) {
            message.reviewUrl = object.reviewUrl;
        } else {
            message.reviewUrl = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        } else {
            message.timestamp = '';
        }
        if (object.ratings !== undefined && object.ratings !== null) {
            Object.entries(object.ratings).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.ratings[key] = new Long(value as any);
                }
            });
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            Object.entries(object.content).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.content[key] = String(value);
                }
            });
        }
        return message;
    },
};

const baseBeamReview_BeamReviewMerchantReview_RatingsEntry: object = { key: '', value: Long.ZERO };

export const BeamReview_BeamReviewMerchantReview_RatingsEntry = {
    encode(message: BeamReview_BeamReviewMerchantReview_RatingsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewMerchantReview_RatingsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewMerchantReview_RatingsEntry } as BeamReview_BeamReviewMerchantReview_RatingsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.int64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewMerchantReview_RatingsEntry {
        const message = { ...baseBeamReview_BeamReviewMerchantReview_RatingsEntry } as BeamReview_BeamReviewMerchantReview_RatingsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Long.fromString(object.value);
        } else {
            message.value = Long.ZERO;
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewMerchantReview_RatingsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewMerchantReview_RatingsEntry>): BeamReview_BeamReviewMerchantReview_RatingsEntry {
        const message = { ...baseBeamReview_BeamReviewMerchantReview_RatingsEntry } as BeamReview_BeamReviewMerchantReview_RatingsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value as Long;
        } else {
            message.value = Long.ZERO;
        }
        return message;
    },
};

const baseBeamReview_BeamReviewMerchantReview_ContentEntry: object = { key: '', value: '' };

export const BeamReview_BeamReviewMerchantReview_ContentEntry = {
    encode(message: BeamReview_BeamReviewMerchantReview_ContentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewMerchantReview_ContentEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewMerchantReview_ContentEntry } as BeamReview_BeamReviewMerchantReview_ContentEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewMerchantReview_ContentEntry {
        const message = { ...baseBeamReview_BeamReviewMerchantReview_ContentEntry } as BeamReview_BeamReviewMerchantReview_ContentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewMerchantReview_ContentEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewMerchantReview_ContentEntry>): BeamReview_BeamReviewMerchantReview_ContentEntry {
        const message = { ...baseBeamReview_BeamReviewMerchantReview_ContentEntry } as BeamReview_BeamReviewMerchantReview_ContentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview: object = { reviewId: '', ratingUrl: '', reviewUrl: '', collectionMethod: '', timestamp: '', title: '' };

export const BeamReview_BeamReviewProductReview = {
    encode(message: BeamReview_BeamReviewProductReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.reviewId !== '') {
            writer.uint32(10).string(message.reviewId);
        }
        if (message.ratingUrl !== '') {
            writer.uint32(18).string(message.ratingUrl);
        }
        if (message.reviewUrl !== '') {
            writer.uint32(26).string(message.reviewUrl);
        }
        if (message.collectionMethod !== '') {
            writer.uint32(34).string(message.collectionMethod);
        }
        if (message.timestamp !== '') {
            writer.uint32(42).string(message.timestamp);
        }
        Object.entries(message.ratings).forEach(([key, value]) => {
            BeamReview_BeamReviewProductReview_RatingsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.title !== '') {
            writer.uint32(58).string(message.title);
        }
        Object.entries(message.content).forEach(([key, value]) => {
            BeamReview_BeamReviewProductReview_ContentEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
        });
        for (const v of message.medias) {
            BeamReview_BeamReviewProductReview_Media.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.products) {
            BeamReview_BeamReviewProductReview_Product.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview } as BeamReview_BeamReviewProductReview;
        message.ratings = {};
        message.content = {};
        message.medias = [];
        message.products = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reviewId = reader.string();
                    break;
                case 2:
                    message.ratingUrl = reader.string();
                    break;
                case 3:
                    message.reviewUrl = reader.string();
                    break;
                case 4:
                    message.collectionMethod = reader.string();
                    break;
                case 5:
                    message.timestamp = reader.string();
                    break;
                case 6:
                    const entry6 = BeamReview_BeamReviewProductReview_RatingsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        message.ratings[entry6.key] = entry6.value;
                    }
                    break;
                case 7:
                    message.title = reader.string();
                    break;
                case 8:
                    const entry8 = BeamReview_BeamReviewProductReview_ContentEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.content[entry8.key] = entry8.value;
                    }
                    break;
                case 9:
                    message.medias.push(BeamReview_BeamReviewProductReview_Media.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.products.push(BeamReview_BeamReviewProductReview_Product.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewProductReview {
        const message = { ...baseBeamReview_BeamReviewProductReview } as BeamReview_BeamReviewProductReview;
        message.ratings = {};
        message.content = {};
        message.medias = [];
        message.products = [];
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
            Object.entries(object.ratings).forEach(([key, value]) => {
                message.ratings[key] = new Long(value as any);
            });
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            Object.entries(object.content).forEach(([key, value]) => {
                message.content[key] = String(value);
            });
        }
        if (object.medias !== undefined && object.medias !== null) {
            for (const e of object.medias) {
                message.medias.push(BeamReview_BeamReviewProductReview_Media.fromJSON(e));
            }
        }
        if (object.products !== undefined && object.products !== null) {
            for (const e of object.products) {
                message.products.push(BeamReview_BeamReviewProductReview_Product.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewProductReview): unknown {
        const obj: any = {};
        message.reviewId !== undefined && (obj.reviewId = message.reviewId);
        message.ratingUrl !== undefined && (obj.ratingUrl = message.ratingUrl);
        message.reviewUrl !== undefined && (obj.reviewUrl = message.reviewUrl);
        message.collectionMethod !== undefined && (obj.collectionMethod = message.collectionMethod);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        obj.ratings = {};
        if (message.ratings) {
            Object.entries(message.ratings).forEach(([k, v]) => {
                obj.ratings[k] = v;
            });
        }
        message.title !== undefined && (obj.title = message.title);
        obj.content = {};
        if (message.content) {
            Object.entries(message.content).forEach(([k, v]) => {
                obj.content[k] = v;
            });
        }
        if (message.medias) {
            obj.medias = message.medias.map((e) => (e ? BeamReview_BeamReviewProductReview_Media.toJSON(e) : undefined));
        } else {
            obj.medias = [];
        }
        if (message.products) {
            obj.products = message.products.map((e) => (e ? BeamReview_BeamReviewProductReview_Product.toJSON(e) : undefined));
        } else {
            obj.products = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview>): BeamReview_BeamReviewProductReview {
        const message = { ...baseBeamReview_BeamReviewProductReview } as BeamReview_BeamReviewProductReview;
        message.ratings = {};
        message.content = {};
        message.medias = [];
        message.products = [];
        if (object.reviewId !== undefined && object.reviewId !== null) {
            message.reviewId = object.reviewId;
        } else {
            message.reviewId = '';
        }
        if (object.ratingUrl !== undefined && object.ratingUrl !== null) {
            message.ratingUrl = object.ratingUrl;
        } else {
            message.ratingUrl = '';
        }
        if (object.reviewUrl !== undefined && object.reviewUrl !== null) {
            message.reviewUrl = object.reviewUrl;
        } else {
            message.reviewUrl = '';
        }
        if (object.collectionMethod !== undefined && object.collectionMethod !== null) {
            message.collectionMethod = object.collectionMethod;
        } else {
            message.collectionMethod = '';
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        } else {
            message.timestamp = '';
        }
        if (object.ratings !== undefined && object.ratings !== null) {
            Object.entries(object.ratings).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.ratings[key] = new Long(value as any);
                }
            });
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        } else {
            message.title = '';
        }
        if (object.content !== undefined && object.content !== null) {
            Object.entries(object.content).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.content[key] = String(value);
                }
            });
        }
        if (object.medias !== undefined && object.medias !== null) {
            for (const e of object.medias) {
                message.medias.push(BeamReview_BeamReviewProductReview_Media.fromPartial(e));
            }
        }
        if (object.products !== undefined && object.products !== null) {
            for (const e of object.products) {
                message.products.push(BeamReview_BeamReviewProductReview_Product.fromPartial(e));
            }
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview_Media: object = { mimetype: '', url: '', thumbnailUrl: '' };

export const BeamReview_BeamReviewProductReview_Media = {
    encode(message: BeamReview_BeamReviewProductReview_Media, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview_Media {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview_Media } as BeamReview_BeamReviewProductReview_Media;
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

    fromJSON(object: any): BeamReview_BeamReviewProductReview_Media {
        const message = { ...baseBeamReview_BeamReviewProductReview_Media } as BeamReview_BeamReviewProductReview_Media;
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

    toJSON(message: BeamReview_BeamReviewProductReview_Media): unknown {
        const obj: any = {};
        message.mimetype !== undefined && (obj.mimetype = message.mimetype);
        message.url !== undefined && (obj.url = message.url);
        message.thumbnailUrl !== undefined && (obj.thumbnailUrl = message.thumbnailUrl);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview_Media>): BeamReview_BeamReviewProductReview_Media {
        const message = { ...baseBeamReview_BeamReviewProductReview_Media } as BeamReview_BeamReviewProductReview_Media;
        if (object.mimetype !== undefined && object.mimetype !== null) {
            message.mimetype = object.mimetype;
        } else {
            message.mimetype = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        } else {
            message.url = '';
        }
        if (object.thumbnailUrl !== undefined && object.thumbnailUrl !== null) {
            message.thumbnailUrl = object.thumbnailUrl;
        } else {
            message.thumbnailUrl = '';
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview_Product: object = { name: '', url: '', brands: '' };

export const BeamReview_BeamReviewProductReview_Product = {
    encode(message: BeamReview_BeamReviewProductReview_Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        for (const v of message.brands) {
            writer.uint32(26).string(v!);
        }
        if (message.ids !== undefined) {
            BeamReview_BeamReviewProductReview_Product_ProductIds.encode(message.ids, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview_Product {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview_Product } as BeamReview_BeamReviewProductReview_Product;
        message.brands = [];
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
                    message.brands.push(reader.string());
                    break;
                case 4:
                    message.ids = BeamReview_BeamReviewProductReview_Product_ProductIds.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewProductReview_Product {
        const message = { ...baseBeamReview_BeamReviewProductReview_Product } as BeamReview_BeamReviewProductReview_Product;
        message.brands = [];
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
        if (object.brands !== undefined && object.brands !== null) {
            for (const e of object.brands) {
                message.brands.push(String(e));
            }
        }
        if (object.ids !== undefined && object.ids !== null) {
            message.ids = BeamReview_BeamReviewProductReview_Product_ProductIds.fromJSON(object.ids);
        } else {
            message.ids = undefined;
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewProductReview_Product): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        if (message.brands) {
            obj.brands = message.brands.map((e) => e);
        } else {
            obj.brands = [];
        }
        message.ids !== undefined && (obj.ids = message.ids ? BeamReview_BeamReviewProductReview_Product_ProductIds.toJSON(message.ids) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview_Product>): BeamReview_BeamReviewProductReview_Product {
        const message = { ...baseBeamReview_BeamReviewProductReview_Product } as BeamReview_BeamReviewProductReview_Product;
        message.brands = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        } else {
            message.url = '';
        }
        if (object.brands !== undefined && object.brands !== null) {
            for (const e of object.brands) {
                message.brands.push(e);
            }
        }
        if (object.ids !== undefined && object.ids !== null) {
            message.ids = BeamReview_BeamReviewProductReview_Product_ProductIds.fromPartial(object.ids);
        } else {
            message.ids = undefined;
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview_Product_ProductIds: object = { gtins: '', mpns: '', skus: '', asins: '' };

export const BeamReview_BeamReviewProductReview_Product_ProductIds = {
    encode(message: BeamReview_BeamReviewProductReview_Product_ProductIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview_Product_ProductIds {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview_Product_ProductIds } as BeamReview_BeamReviewProductReview_Product_ProductIds;
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

    fromJSON(object: any): BeamReview_BeamReviewProductReview_Product_ProductIds {
        const message = { ...baseBeamReview_BeamReviewProductReview_Product_ProductIds } as BeamReview_BeamReviewProductReview_Product_ProductIds;
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

    toJSON(message: BeamReview_BeamReviewProductReview_Product_ProductIds): unknown {
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

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview_Product_ProductIds>): BeamReview_BeamReviewProductReview_Product_ProductIds {
        const message = { ...baseBeamReview_BeamReviewProductReview_Product_ProductIds } as BeamReview_BeamReviewProductReview_Product_ProductIds;
        message.gtins = [];
        message.mpns = [];
        message.skus = [];
        message.asins = [];
        if (object.gtins !== undefined && object.gtins !== null) {
            for (const e of object.gtins) {
                message.gtins.push(e);
            }
        }
        if (object.mpns !== undefined && object.mpns !== null) {
            for (const e of object.mpns) {
                message.mpns.push(e);
            }
        }
        if (object.skus !== undefined && object.skus !== null) {
            for (const e of object.skus) {
                message.skus.push(e);
            }
        }
        if (object.asins !== undefined && object.asins !== null) {
            for (const e of object.asins) {
                message.asins.push(e);
            }
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview_RatingsEntry: object = { key: '', value: Long.ZERO };

export const BeamReview_BeamReviewProductReview_RatingsEntry = {
    encode(message: BeamReview_BeamReviewProductReview_RatingsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).int64(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview_RatingsEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview_RatingsEntry } as BeamReview_BeamReviewProductReview_RatingsEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.int64() as Long;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewProductReview_RatingsEntry {
        const message = { ...baseBeamReview_BeamReviewProductReview_RatingsEntry } as BeamReview_BeamReviewProductReview_RatingsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = Long.fromString(object.value);
        } else {
            message.value = Long.ZERO;
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewProductReview_RatingsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview_RatingsEntry>): BeamReview_BeamReviewProductReview_RatingsEntry {
        const message = { ...baseBeamReview_BeamReviewProductReview_RatingsEntry } as BeamReview_BeamReviewProductReview_RatingsEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value as Long;
        } else {
            message.value = Long.ZERO;
        }
        return message;
    },
};

const baseBeamReview_BeamReviewProductReview_ContentEntry: object = { key: '', value: '' };

export const BeamReview_BeamReviewProductReview_ContentEntry = {
    encode(message: BeamReview_BeamReviewProductReview_ContentEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BeamReview_BeamReviewProductReview_ContentEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseBeamReview_BeamReviewProductReview_ContentEntry } as BeamReview_BeamReviewProductReview_ContentEntry;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BeamReview_BeamReviewProductReview_ContentEntry {
        const message = { ...baseBeamReview_BeamReviewProductReview_ContentEntry } as BeamReview_BeamReviewProductReview_ContentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        } else {
            message.value = '';
        }
        return message;
    },

    toJSON(message: BeamReview_BeamReviewProductReview_ContentEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<BeamReview_BeamReviewProductReview_ContentEntry>): BeamReview_BeamReviewProductReview_ContentEntry {
        const message = { ...baseBeamReview_BeamReviewProductReview_ContentEntry } as BeamReview_BeamReviewProductReview_ContentEntry;
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        } else {
            message.key = '';
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        } else {
            message.value = '';
        }
        return message;
    },
};

const baseBeam: object = { creator: '', id: '', amount: Long.ZERO, status: '', secret: '', schema: '' };

export const Beam = {
    encode(message: Beam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (!message.amount.isZero()) {
            writer.uint32(24).int64(message.amount);
        }
        if (message.status !== '') {
            writer.uint32(34).string(message.status);
        }
        if (message.secret !== '') {
            writer.uint32(42).string(message.secret);
        }
        if (message.schema !== '') {
            writer.uint32(50).string(message.schema);
        }
        if (message.reward !== undefined) {
            BeamReward.encode(message.reward, writer.uint32(58).fork()).ldelim();
        }
        if (message.review !== undefined) {
            BeamReview.encode(message.review, writer.uint32(66).fork()).ldelim();
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
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = reader.int64() as Long;
                    break;
                case 4:
                    message.status = reader.string();
                    break;
                case 5:
                    message.secret = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.reward = BeamReward.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.review = BeamReview.decode(reader, reader.uint32());
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        } else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        } else {
            message.amount = Long.ZERO;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        } else {
            message.status = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        } else {
            message.schema = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromJSON(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },

    toJSON(message: Beam): unknown {
        const obj: any = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
        message.status !== undefined && (obj.status = message.status);
        message.secret !== undefined && (obj.secret = message.secret);
        message.schema !== undefined && (obj.schema = message.schema);
        message.reward !== undefined && (obj.reward = message.reward ? BeamReward.toJSON(message.reward) : undefined);
        message.review !== undefined && (obj.review = message.review ? BeamReview.toJSON(message.review) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Beam>): Beam {
        const message = { ...baseBeam } as Beam;
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        } else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount as Long;
        } else {
            message.amount = Long.ZERO;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        } else {
            message.status = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        } else {
            message.schema = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromPartial(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },
};

const baseMsgOpenBeam: object = { id: '', creator: '', amount: Long.ZERO, secret: '' };

export const MsgOpenBeam = {
    encode(message: MsgOpenBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
        }
        if (!message.amount.isZero()) {
            writer.uint32(24).int64(message.amount);
        }
        if (message.secret !== '') {
            writer.uint32(34).string(message.secret);
        }
        if (message.reward !== undefined) {
            BeamReward.encode(message.reward, writer.uint32(42).fork()).ldelim();
        }
        if (message.review !== undefined) {
            BeamReview.encode(message.review, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenBeam {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.amount = reader.int64() as Long;
                    break;
                case 4:
                    message.secret = reader.string();
                    break;
                case 5:
                    message.reward = BeamReward.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.review = BeamReview.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgOpenBeam {
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        } else {
            message.creator = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        } else {
            message.amount = Long.ZERO;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromJSON(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },

    toJSON(message: MsgOpenBeam): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
        message.secret !== undefined && (obj.secret = message.secret);
        message.reward !== undefined && (obj.reward = message.reward ? BeamReward.toJSON(message.reward) : undefined);
        message.review !== undefined && (obj.review = message.review ? BeamReview.toJSON(message.review) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgOpenBeam>): MsgOpenBeam {
        const message = { ...baseMsgOpenBeam } as MsgOpenBeam;
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        } else {
            message.creator = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount as Long;
        } else {
            message.amount = Long.ZERO;
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromPartial(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },
};

const baseMsgUpdateBeam: object = { updater: '', id: '', amount: Long.ZERO };

export const MsgUpdateBeam = {
    encode(message: MsgUpdateBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.updater !== '') {
            writer.uint32(10).string(message.updater);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (!message.amount.isZero()) {
            writer.uint32(24).int64(message.amount);
        }
        if (message.reward !== undefined) {
            BeamReward.encode(message.reward, writer.uint32(34).fork()).ldelim();
        }
        if (message.review !== undefined) {
            BeamReview.encode(message.review, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBeam {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updater = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.amount = reader.int64() as Long;
                    break;
                case 4:
                    message.reward = BeamReward.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.review = BeamReview.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgUpdateBeam {
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = String(object.updater);
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Long.fromString(object.amount);
        } else {
            message.amount = Long.ZERO;
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromJSON(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromJSON(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },

    toJSON(message: MsgUpdateBeam): unknown {
        const obj: any = {};
        message.updater !== undefined && (obj.updater = message.updater);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = (message.amount || Long.ZERO).toString());
        message.reward !== undefined && (obj.reward = message.reward ? BeamReward.toJSON(message.reward) : undefined);
        message.review !== undefined && (obj.review = message.review ? BeamReview.toJSON(message.review) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgUpdateBeam>): MsgUpdateBeam {
        const message = { ...baseMsgUpdateBeam } as MsgUpdateBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = object.updater;
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount as Long;
        } else {
            message.amount = Long.ZERO;
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = BeamReward.fromPartial(object.reward);
        } else {
            message.reward = undefined;
        }
        if (object.review !== undefined && object.review !== null) {
            message.review = BeamReview.fromPartial(object.review);
        } else {
            message.review = undefined;
        }
        return message;
    },
};

const baseMsgCancelBeam: object = { updater: '', id: '' };

export const MsgCancelBeam = {
    encode(message: MsgCancelBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.updater !== '') {
            writer.uint32(10).string(message.updater);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBeam {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCancelBeam } as MsgCancelBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updater = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgCancelBeam {
        const message = { ...baseMsgCancelBeam } as MsgCancelBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = String(object.updater);
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: MsgCancelBeam): unknown {
        const obj: any = {};
        message.updater !== undefined && (obj.updater = message.updater);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgCancelBeam>): MsgCancelBeam {
        const message = { ...baseMsgCancelBeam } as MsgCancelBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = object.updater;
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        return message;
    },
};

const baseMsgCloseBeam: object = { updater: '', id: '' };

export const MsgCloseBeam = {
    encode(message: MsgCloseBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.updater !== '') {
            writer.uint32(10).string(message.updater);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBeam {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCloseBeam } as MsgCloseBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.updater = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgCloseBeam {
        const message = { ...baseMsgCloseBeam } as MsgCloseBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = String(object.updater);
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        return message;
    },

    toJSON(message: MsgCloseBeam): unknown {
        const obj: any = {};
        message.updater !== undefined && (obj.updater = message.updater);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgCloseBeam>): MsgCloseBeam {
        const message = { ...baseMsgCloseBeam } as MsgCloseBeam;
        if (object.updater !== undefined && object.updater !== null) {
            message.updater = object.updater;
        } else {
            message.updater = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        return message;
    },
};

const baseMsgClaimBeam: object = { claimer: '', id: '', secret: '' };

export const MsgClaimBeam = {
    encode(message: MsgClaimBeam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.claimer !== '') {
            writer.uint32(10).string(message.claimer);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.secret !== '') {
            writer.uint32(26).string(message.secret);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBeam {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimer = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.secret = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgClaimBeam {
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = String(object.claimer);
        } else {
            message.claimer = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        } else {
            message.id = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = String(object.secret);
        } else {
            message.secret = '';
        }
        return message;
    },

    toJSON(message: MsgClaimBeam): unknown {
        const obj: any = {};
        message.claimer !== undefined && (obj.claimer = message.claimer);
        message.id !== undefined && (obj.id = message.id);
        message.secret !== undefined && (obj.secret = message.secret);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgClaimBeam>): MsgClaimBeam {
        const message = { ...baseMsgClaimBeam } as MsgClaimBeam;
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = object.claimer;
        } else {
            message.claimer = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        } else {
            message.id = '';
        }
        if (object.secret !== undefined && object.secret !== null) {
            message.secret = object.secret;
        } else {
            message.secret = '';
        }
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

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
