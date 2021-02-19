import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgBeginRedelegateUrl = '/cosmos.staking.v1beta1.MsgBeginRedelegate';

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
    amount?: Coin;
}

export const BuildMsgBeginRedelegate = (delegatorAddress: string, validatorSrcAddress: string, validatorDstAddress: string, amount?: Coin): Message => {
    return {
        typeUrl: MsgBeginRedelegateUrl,
        value: {
            delegatorAddress,
            validatorSrcAddress,
            validatorDstAddress,
            amount,
        } as MsgBeginRedelegate,
    };
};
