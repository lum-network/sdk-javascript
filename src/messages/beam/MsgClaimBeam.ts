import { Message } from '../Message';
import { MsgClaimBeam } from '../../codec/chain/beam/tx';

export const MsgClaimBeamUrl = '/lum.network.beam.MsgClaimBeam';

export const BuildMsgClaimBeam = (claimer: string, id: string, secret: string): Message => {
    return {
        typeUrl: MsgClaimBeamUrl,
        value: {
            claimer,
            id,
            secret,
        } as MsgClaimBeam,
    };
};
