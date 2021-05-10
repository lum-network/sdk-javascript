import { Message } from '../Message';
import { BeamReview, BeamReward, MsgUpdateBeam } from '../../codec/chain/beam/beam';
import Long from 'long';

export const MsgUpdateBeamUrl = '/lum.network.beam.MsgUpdateBeam';

export const BuildMsgUpdateBeam = (updater: string, id: string, amount: Long, reward?: BeamReward, review?: BeamReview): Message => {
    return {
        typeUrl: MsgUpdateBeamUrl,
        value: {
            updater,
            id,
            amount,
            reward,
            review,
        } as MsgUpdateBeam,
    };
};
