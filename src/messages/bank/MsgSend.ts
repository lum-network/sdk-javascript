import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgSendUrl = '/cosmos.bank.v1beta1.MsgSend';

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}

export const BuildMsgSend = (fromAddress: string, toAddress: string, amount: Coin[]): Message => {
    return {
        typeUrl: MsgSendUrl,
        value: {
            fromAddress,
            toAddress,
            amount,
        } as MsgSend,
    };
};
