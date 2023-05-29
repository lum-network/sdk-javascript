import Long from 'long';

import { Message } from '../Message';
import { MsgVote } from '../../codec/cosmos/gov/v1/tx';
import { VoteOption } from '../../codec/cosmos/gov/v1/gov';

export const MsgVoteUrl = '/cosmos.gov.v1.MsgVote';

export const BuildMsgVote = (proposalId: Long, voter: string, option: VoteOption, metadata: string): Message => {
    return {
        typeUrl: MsgVoteUrl,
        value: {
            proposalId,
            voter,
            option,
            metadata,
        } as MsgVote,
    };
};
