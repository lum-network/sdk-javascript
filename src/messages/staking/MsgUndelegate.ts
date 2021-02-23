import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgUndelegateUrl = '/cosmos.staking.v1beta1.MsgUndelegate';

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}

export const BuildMsgUndelegate = (delegatorAddress: string, validatorAddress: string, amount?: Coin): Message => {
    return {
        typeUrl: MsgUndelegateUrl,
        value: {
            delegatorAddress,
            validatorAddress,
            amount,
        } as MsgUndelegate,
    };
};
