import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgDelegateUrl = '/cosmos.staking.v1beta1.MsgDelegate';

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}

export const BuildMsgDelegate = (delegatorAddress: string, validatorAddress: string, amount?: Coin): Message => {
    return {
        typeUrl: MsgDelegateUrl,
        value: {
            delegatorAddress,
            validatorAddress,
            amount,
        } as MsgDelegate,
    };
};
