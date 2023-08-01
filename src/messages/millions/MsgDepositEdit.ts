import Long from 'long';

import { Message } from '../Message';
import { MsgDepositEdit } from '../../codec/lum/network/millions/tx';

export const MsgMillionsDepositEditUrl = '/lum.network.millions.MsgDepositEdit';

export const BuildMsgMillionsDepositEdit = (poolId: Long, depositId: Long, depositorAddress: string, winnerAddress: string, isSponsor?: boolean): Message => {
    return {
        typeUrl: MsgMillionsDepositEditUrl,
        value: {
            poolId,
            depositId,
            depositorAddress,
            winnerAddress,
            isSponsor,
        } as MsgDepositEdit,
    };
};
