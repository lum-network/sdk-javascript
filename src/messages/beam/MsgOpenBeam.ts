import { Message } from '../Message';
import { BeamReview, BeamReward, MsgOpenBeam } from '../../codec/chain/beam/beam';
import Long from 'long';

export const MsgOpenBeamUrl = '/lum.network.beam.MsgOpenBeam';

export const BuildMsgOpenBeam = (id: string, creator: string, amount: Long, secret: string, reward?: BeamReward, review?: BeamReview): Message => {
    return {
        typeUrl: MsgOpenBeamUrl,
        value: {
            id,
            creator,
            amount,
            secret,
            reward,
            review,
        } as MsgOpenBeam,
    };
};
