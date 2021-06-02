import { Message } from '../Message';
import Long from 'long';
import { BeamSchemeReview, BeamSchemeReward } from '../../codec/chain/beam/beam';
import { MsgOpenBeam } from '../../codec/chain/beam/tx';

export const MsgOpenBeamUrl = '/lum.network.beam.MsgOpenBeam';

export const BuildMsgOpenBeam = (id: string, creator: string, amount: Long, secret: string, schema: string, reward?: BeamSchemeReward, review?: BeamSchemeReview): Message => {
    return {
        typeUrl: MsgOpenBeamUrl,
        value: {
            id,
            creator,
            amount,
            secret,
            schema,
            reward,
            review,
        } as MsgOpenBeam,
    };
};
