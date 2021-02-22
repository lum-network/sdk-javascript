import { Message } from '../Message';
import { Coin, Description, CommissionRates } from '../../types';
import { Any } from '../../codec/google/protobuf/any';

export const MsgCreateValidatorUrl = '/cosmos.staking.v1beta1.MsgCreateValidator';

/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description?: Description;
    commission?: CommissionRates;
    minSelfDelegation: string;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any;
    value?: Coin;
}

export const BuildMsgCreateValidator = (
    validatorAddress: string,
    delegatorAddress: string,
    minSelfDelegation: string,
    commission?: CommissionRates,
    description?: Description,
    value?: Coin,
    pubkey?: Any,
): Message => {
    return {
        typeUrl: MsgCreateValidatorUrl,
        value: {
            description,
            commission,
            minSelfDelegation,
            delegatorAddress,
            validatorAddress,
            pubkey,
            value,
        } as MsgCreateValidator,
    };
};
