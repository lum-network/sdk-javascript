import { Message } from '../Message';
import { MsgWithdrawValidatorCommission } from "../../codec/cosmos/distribution/v1beta1/tx";

export const MsgWithdrawValidatorCommissionUrl = '/cosmos.bank.v1beta1.MsgSend';

export const BuildMsgWithdrawValidatorCommission = (validatorAddress: string): Message => {
    return {
        typeUrl: MsgWithdrawValidatorCommissionUrl,
        value: {
            validatorAddress,
        } as MsgWithdrawValidatorCommission,
    };
};
