import Long from 'long';

import { Message } from '../Message';
import { MsgWithdrawDepositRetry } from '../../codec/lum/network/millions/tx';

export const MsgWithdrawDepositRetryUrl = '/lum.network.millions.MsgWithdrawDepositRetry';

export const BuildMsgWithdrawDepositRetry = (poolId: Long, withdrawalId: Long, depositorAddress: string): Message => {
    return {
        typeUrl: MsgWithdrawDepositRetryUrl,
        value: {
            poolId,
            withdrawalId,
            depositorAddress,
        } as MsgWithdrawDepositRetry,
    };
};
