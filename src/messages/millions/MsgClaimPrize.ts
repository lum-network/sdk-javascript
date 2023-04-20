import Long from 'long';

import { Message } from '../Message';
import { MsgClaimPrize } from '../../codec/lum-network/millions/tx';

export const MsgClaimPrizeUrl = '/lum.network.millions.MsgClaimPrize';

export const BuildMsgClaimPrize = (poolId: Long, drawId: Long, prizeId: Long, winnerAddress: string): Message => {
    return {
        typeUrl: MsgClaimPrizeUrl,
        value: {
            poolId,
            drawId,
            prizeId,
            winnerAddress,
        } as MsgClaimPrize,
    };
};
