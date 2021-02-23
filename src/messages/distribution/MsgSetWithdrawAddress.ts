import { Message } from '../Message';

export const MsgSetWithdrawAddressUrl = '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress';

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}

export const BuildMsgSetWithdrawAddress = (delegatorAddress: string, withdrawAddress: string): Message => {
    return {
        typeUrl: MsgSetWithdrawAddressUrl,
        value: {
            delegatorAddress,
            withdrawAddress,
        } as MsgSetWithdrawAddress,
    };
};
