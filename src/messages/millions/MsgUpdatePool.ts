import Long from 'long';
import { DrawSchedule } from '../../codec/lum/network/millions/draw_schedule';
import { PrizeStrategy } from '../../codec/lum/network/millions/prize_strategy';
import { Message } from '../Message';
import { MsgUpdatePool } from '../../codec/lum/network/millions/tx';

export const MsgUpdatePoolUrl = '/lum.network.millions.MsgUpdatePool';

export const BuildMsgUpdatePool = (poolId: Long, validators: string[], minDepositAmount: string, updaterAddress: string, drawSchedule?: DrawSchedule, prizeStrategy?: PrizeStrategy): Message => {
    return {
        typeUrl: MsgUpdatePoolUrl,
        value: {
            poolId,
            validators,
            minDepositAmount,
            updaterAddress,
            drawSchedule,
            prizeStrategy,
        } as MsgUpdatePool,
    };
};
