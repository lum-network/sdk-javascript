import { AminoConverter } from '@cosmjs/stargate';
import { MsgDeposit as MsgDepositDfract } from '../codec/dfract/tx';
import { AminoMsg, Coin } from '@cosmjs/amino';

export interface AminoMsgDepositDfract extends AminoMsg {
    readonly type: 'lum-network/MsgDepositDfract';
    readonly value: {
        readonly depositor_address: string;
        readonly amount?: Coin;
    };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgDepositDfract {
    return msg.type === 'lum-network/MsgDepositDfract';
}

export const createAdditionalAminoTypes = (): Record<string, AminoConverter> => {
    return {
        // DFract

        '/lum.network.dfract.MsgDepositDfract': {
            aminoType: 'lum-network/MsgDepositDfract',
            toAmino: ({ depositorAddress, amount }: MsgDepositDfract): AminoMsgDepositDfract['value'] => ({
                depositor_address: depositorAddress,
                amount,
            }),
            fromAmino: ({ depositor_address, amount }: AminoMsgDepositDfract['value']): MsgDepositDfract => ({
                depositorAddress: depositor_address,
                amount,
            }),
        },
    };
};
