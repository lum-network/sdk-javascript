import { Message } from '../Message';
import { Coin } from '../../types';

export const MsgMultiSendUrl = '/cosmos.bank.v1beta1.MsgMultiSend';

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    input: { address: string; coins: Coin[] }[];
    output: { address: string; coins: Coin[] }[];
}

export const BuildMsgMultiSend = (input: { address: string; coins: Coin[] }[], output: { address: string; coins: Coin[] }[]): Message => {
    return {
        typeUrl: MsgMultiSendUrl,
        value: {
            input,
            output,
        } as MsgMultiSend,
    };
};
