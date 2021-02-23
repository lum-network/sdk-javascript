import { Message } from '../Message';

export const MsgWithdrawDelegatorRewardUrl = '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward';

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}

export const BuildMsgWithdrawDelegatorReward = (delegatorAddress: string, validatorAddress: string): Message => {
    return {
        typeUrl: MsgWithdrawDelegatorRewardUrl,
        value: {
            delegatorAddress,
            validatorAddress,
        } as MsgWithdrawDelegatorReward,
    };
};
