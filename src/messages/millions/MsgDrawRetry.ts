import Long from 'long';

import { Message } from '../Message';
import { MsgDrawRetry } from '../../codec/lum-network/millions/tx';

export const MsgDrawRetryUrl = '/lum.network.millions.MsgDrawRetry';

export const BuildMsgDrawRetry = (poolId: Long, drawId: Long, drawRetryAddress: string): Message => {
    return {
        typeUrl: MsgDrawRetryUrl,
        value: {
            poolId,
            drawId,
            drawRetryAddress,
        } as MsgDrawRetry,
    };
};
