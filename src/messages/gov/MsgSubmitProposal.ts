import { Message } from '../Message';
import { Coin } from '../../types';
import { Any } from '../../codec/google/protobuf/any';
import { MsgSubmitProposal } from '../../codec/cosmos/gov/v1/tx';

export const MsgSubmitProposalUrl = '/cosmos.gov.v1.MsgSubmitProposal';

export const BuildMsgSubmitProposal = (messages: Any[], proposer: string, initialDeposit: Coin[], metadata: string): Message => {
    return {
        typeUrl: MsgSubmitProposalUrl,
        value: {
            messages,
            initialDeposit,
            proposer,
            metadata,
        } as MsgSubmitProposal,
    };
};
