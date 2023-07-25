import Long from 'long';

import { Coin } from '../../types';
import { Message } from '../Message';
import { MsgDeposit } from '../../codec/lum/network/millions/tx';

export const MsgMillionsDepositUrl = '/lum.network.millions.MsgDeposit';

export const BuildMsgMillionsDeposit = (poolId: Long, depositorAddress: string, winnerAddress: string, isSponsor: boolean, amount?: Coin): Message => {
    return {
        typeUrl: MsgMillionsDepositUrl,
        value: {
            poolId,
            amount,
            depositorAddress,
            winnerAddress,
            isSponsor,
        } as MsgDeposit,
    };
};
