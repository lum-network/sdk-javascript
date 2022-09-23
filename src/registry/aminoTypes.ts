import { AminoConverter } from '@cosmjs/stargate';
import { MsgDeposit as MsgDepositDfract } from '../codec/dfract/tx';
import { AminoMsg, Coin } from '@cosmjs/amino';

export interface AminoMsgDepositDfract extends AminoMsg {
    readonly type: 'lum-network/MsgDeposit';
    readonly value: {
        readonly depositor_address: string;
        readonly amount?: Coin;
    };
}

export function isAminoMsgDeposit(msg: AminoMsg): msg is AminoMsgDepositDfract {
    return msg.type === 'lum-network/MsgDeposit';
}

export const createAminoTypes = (): Record<string, AminoConverter> => {
    return {
        // DFract

        '/lum.network.dfract.MsgDeposit': {
            aminoType: 'lum-network/MsgDeposit',
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
