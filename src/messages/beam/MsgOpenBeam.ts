import { Message } from '../Message';
import { BeamData } from '../../codec/chain/beam/beam';
import { MsgOpenBeam } from '../../codec/chain/beam/tx';
import { Coin } from '../../types';

export const MsgOpenBeamUrl = '/lum.network.beam.MsgOpenBeam';

export const BuildMsgOpenBeam = (id: string, creatorAddress: string, claimAddress: string, amount: Coin, secret: string, schema: string, data?: BeamData): Message => {
    return {
        typeUrl: MsgOpenBeamUrl,
        value: {
            id,
            creatorAddress,
            claimAddress,
            amount,
            secret,
            schema,
            data,
        } as MsgOpenBeam,
    };
};
