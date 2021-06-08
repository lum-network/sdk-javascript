import { Message } from '../Message';
import { BeamSchemeReview, BeamSchemeReward } from '../../codec/chain/beam/beam';
import { MsgOpenBeam } from '../../codec/chain/beam/tx';
import { Coin } from '../../types';

export const MsgOpenBeamUrl = '/lum.network.beam.MsgOpenBeam';

export const BuildMsgOpenBeam = (id: string, creator: string, amount: Coin, secret: string, schema: string, owner?: string, reward?: BeamSchemeReward, review?: BeamSchemeReview): Message => {
    return {
        typeUrl: MsgOpenBeamUrl,
        value: {
            id,
            creator,
            amount,
            secret,
            schema,
            reward,
            owner,
            review,
        } as MsgOpenBeam,
    };
};
