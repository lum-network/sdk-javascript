import Long from 'long';

import { Message } from '../Message';
import { MsgDepositRetry } from '../../codec/lum/network/millions/tx';

export const MsgDepositRetryUrl = '/lum.network.millions.MsgDepositRetry';

export const BuildMsgDepositRetry = (poolId: Long, depositId: Long, depositorAddress: string): Message => {
    return {
        typeUrl: MsgDepositRetryUrl,
        value: {
            poolId,
            depositId,
            depositorAddress,
        } as MsgDepositRetry,
    };
};
