import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgFundCommunityPoolUrl = '/cosmos.distribution.v1beta1.MsgFundCommunityPool';

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}

export const BuildMsgFundCommunityPool = (depositor: string, amount: Coin[]): Message => {
    return {
        typeUrl: MsgFundCommunityPoolUrl,
        value: {
            depositor,
            amount,
        } as MsgFundCommunityPool,
    };
};
