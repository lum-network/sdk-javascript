import { Message } from '../Message';
import { BeamData } from '../../codec/beam/beam';
import { MsgOpenBeam } from '../../codec/beam/tx';
import { Coin } from '../../types';

export const MsgOpenBeamUrl = '/lum.network.beam.MsgOpenBeam';

export const BuildMsgOpenBeam = (
    id: string,
    creatorAddress: string,
    claimAddress: string,
    amount: Coin,
    secret: string,
    schema: string,
    data?: BeamData,
    closesAtBlock = 0,
    claimExpiresAtBlock = 0,
): Message => {
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
            claimExpiresAtBlock,
            closesAtBlock,
        } as MsgOpenBeam,
    };
};
