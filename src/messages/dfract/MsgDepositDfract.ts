import { MsgDepositDfract } from '../../codec/dfract/tx';
import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgDepositDfractUrl = '/lum.network.dfract.MsgDepositDfract';

export const BuildMsgDepositDfract = (depositorAddress: string, amount: Coin): Message => {
    return {
        typeUrl: MsgDepositDfractUrl,
        value: {
            depositorAddress,
            amount,
        } as MsgDepositDfract,
    };
};
