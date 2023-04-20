import Long from 'long';

import { Message } from '../Message';
import { MsgWithdrawDeposit } from '../../codec/lum-network/millions/tx';

export const MsgWithdrawDepositUrl = '/lum.network.millions.MsgWithdrawDeposit';

export const BuildMsgWithdrawDeposit = (poolId: Long, depositId: Long, depositorAddress: string, toAddress: string): Message => {
    return {
        typeUrl: MsgWithdrawDepositUrl,
        value: {
            poolId,
            depositId,
            depositorAddress,
            toAddress,
        } as MsgWithdrawDeposit,
    };
};
