import { MsgDeposit as MsgDepositDfract } from '../../codec/dfract/tx';
import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgDepositDfractUrl = '/lum.network.dfract.MsgDepositDfract';

export const BuildMsgDepositDfract = (depositorAddress: string, amount: Coin, createdAt: Date): Message => {
    return {
        typeUrl: MsgDepositDfractUrl,
        value: {
            depositorAddress,
            amount,
            createdAt,
        } as MsgDepositDfract,
    };
};
