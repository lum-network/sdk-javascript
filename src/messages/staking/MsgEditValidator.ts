import { Message } from '../Message';
import { Description } from '../../types';

export const MsgEditValidatorUrl = '/cosmos.staking.v1beta1.MsgEditValidator';

/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description?: Description;
    validatorAddress: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commissionRate: string;
    minSelfDelegation: string;
}
export const BuildMsgEditValidator = (validatorAddress: string, commissionRate: string, minSelfDelegation: string, description?: Description): Message => {
    return {
        typeUrl: MsgEditValidatorUrl,
        value: {
            validatorAddress,
            commissionRate,
            minSelfDelegation,
            description,
        } as MsgEditValidator,
    };
};
