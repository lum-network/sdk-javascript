import { Message } from '../Message';
import Long from 'long';
import { BeamSchemeReview, BeamSchemeReward, BeamState } from '../../codec/chain/beam/beam';
import { MsgUpdateBeam } from '../../codec/chain/beam/tx';

export const MsgUpdateBeamUrl = '/lum.network.beam.MsgUpdateBeam';

export const BuildMsgUpdateBeam = (updater: string, id: string, amount: Long, status?: BeamState, reward?: BeamSchemeReward, review?: BeamSchemeReview): Message => {
    return {
        typeUrl: MsgUpdateBeamUrl,
        value: {
            updater,
            id,
            amount,
            status,
            reward,
            review,
        } as MsgUpdateBeam,
    };
};
