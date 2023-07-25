import { DrawSchedule } from '../../codec/lum/network/millions/draw_schedule';
import { PrizeStrategy } from '../../codec/lum/network/millions/prize_strategy';
import { Message } from '../Message';
import { MsgRegisterPool } from '../../codec/lum/network/millions/tx';

export const MsgRegisterPoolUrl = '/lum.network.millions.MsgRegisterPool';

export const BuildMsgRegisterPool = (
    chainId: string,
    denom: string,
    nativeDenom: string,
    connectionId: string,
    validators: string[],
    minDepositAmount: string,
    bech32PrefixAccAddr: string,
    bech32PrefixValAddr: string,
    creatorAddress: string,
    drawSchedule?: DrawSchedule,
    prizeStrategy?: PrizeStrategy,
): Message => {
    return {
        typeUrl: MsgRegisterPoolUrl,
        value: {
            chainId,
            denom,
            nativeDenom,
            connectionId,
            validators,
            minDepositAmount,
            bech32PrefixAccAddr,
            bech32PrefixValAddr,
            creatorAddress,
            drawSchedule,
            prizeStrategy,
        } as MsgRegisterPool,
    };
};
