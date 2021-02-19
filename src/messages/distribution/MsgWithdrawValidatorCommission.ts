import { Message } from '../Message';

export const MsgWithdrawValidatorCommissionUrl = '/cosmos.bank.v1beta1.MsgSend';

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}

export const BuildMsgWithdrawValidatorCommission = (validatorAddress: string): Message => {
    return {
        typeUrl: MsgWithdrawValidatorCommissionUrl,
        value: {
            validatorAddress,
        } as MsgWithdrawValidatorCommission,
    };
};
