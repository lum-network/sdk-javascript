import {
    AminoConverters, AminoMsgVote,
    createAuthzAminoConverters,
    createBankAminoConverters,
    createDistributionAminoConverters,
    // createGovAminoConverters,
    createIbcAminoConverters,
    createStakingAminoConverters,
} from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { AminoMsg, Coin } from '@cosmjs/amino';
import Long from 'long';

import { MsgDeposit as MsgDepositDfract } from '../codec/lum-network/dfract/tx';
import {
    MsgDeposit as MsgMillionsDeposit,
    MsgDepositRetry as MsgMillionsDepositRetry,
    MsgWithdrawDeposit as MsgMillionsWithdrawDeposit,
    MsgWithdrawDepositRetry as MsgMillionsWithdrawDepositRetry,
    MsgClaimPrize as MsgMillionsClaimPrize,
} from '../codec/lum-network/millions/tx';
import { MsgVote } from '../codec/cosmos/gov/v1/tx';
export interface AminoMsgDepositDfract extends AminoMsg {
    readonly type: 'lum-network/MsgDeposit';
    readonly value: {
        readonly depositor_address: string;
        readonly amount?: Coin;
    };
}

export interface AminoMsgMillionsDeposit extends AminoMsg {
    readonly type: 'lum-network/millions/MsgDeposit';
    readonly value: {
        readonly pool_id: string;
        readonly depositor_address: string;
        readonly winner_address: string;
        readonly is_sponsor?: boolean; // force ignore false values to allow signing (not set in proto encoding)
        readonly amount: Coin;
    };
}

export interface AminoMsgMillionsDepositRetry extends AminoMsg {
    readonly type: 'lum-network/millions/MsgDepositRetry';
    readonly value: {
        readonly pool_id: string;
        readonly deposit_id: string;
        readonly depositor_address: string;
    };
}

export interface AminoMsgMillionsWithdrawDeposit extends AminoMsg {
    readonly type: 'lum-network/millions/MsgWithdrawDeposit';
    readonly value: {
        readonly pool_id: string;
        readonly deposit_id: string;
        readonly depositor_address: string;
        readonly to_address: string;
    };
}

export interface AminoMsgMillionsWithdrawDepositRetry extends AminoMsg {
    readonly type: 'lum-network/millions/MsgWithdrawDeposit';
    readonly value: {
        readonly pool_id: string;
        readonly withdrawal_id: string;
        readonly depositor_address: string;
    };
}

export interface AminoMsgMillionsClaimPrize extends AminoMsg {
    readonly type: 'lum-network/millions/MsgWithdrawDeposit';
    readonly value: {
        readonly pool_id: string;
        readonly draw_id: string;
        readonly prize_id: string;
        readonly winner_address: string;
    };
}

export const createDefaultAminoTypes = (): AminoConverters => {
    return {
        ...createBankAminoConverters(),
        ...createAuthzAminoConverters(),
        ...createDistributionAminoConverters(),
        // ...createGovAminoConverters(),
        ...createStakingAminoConverters(),
        ...createIbcAminoConverters(),
    };
};

const createGovAminoConverters = (): AminoConverters => ({
    '/cosmos.gov.v1.MsgVote': {
        aminoType: 'cosmos-sdk/MsgVote',
        toAmino: ({ proposalId, voter, option }: MsgVote): AminoMsgVote['value'] => ({
            proposal_id: proposalId.toString(),
            voter,
            option,
        }),
        fromAmino: ({ proposal_id, voter, option }: AminoMsgVote['value']): MsgVote => ({
            proposalId: Long.fromString(proposal_id),
            voter,
            option,
            metadata: '',
        }),
    },
});

const createDfractAminoConverters = (): AminoConverters => ({
    '/lum.network.dfract.MsgDeposit': {
        aminoType: 'lum-network/MsgDeposit',
        toAmino: ({ depositorAddress, amount }: MsgDepositDfract): AminoMsgDepositDfract['value'] => ({
            depositor_address: depositorAddress,
            amount,
        }),
        fromAmino: ({ depositor_address, amount }: AminoMsgDepositDfract['value']): MsgDepositDfract => ({
            depositorAddress: depositor_address,
            amount,
        }),
    },
});

const createMillionsAminoConverters = (): AminoConverters => ({
    '/lum.network.millions.MsgDeposit': {
        aminoType: 'lum-network/millions/MsgDeposit',
        toAmino: ({ poolId, depositorAddress, winnerAddress, isSponsor, amount }: MsgMillionsDeposit): AminoMsgMillionsDeposit['value'] => {
            assertDefinedAndNotNull(amount, 'missing amount');
            return {
                pool_id: poolId.toString(),
                depositor_address: depositorAddress,
                winner_address: winnerAddress,
                is_sponsor: isSponsor ? true : undefined,
                amount: amount,
            };
        },
        fromAmino: ({ pool_id, depositor_address, winner_address, is_sponsor, amount }: AminoMsgMillionsDeposit['value']): MsgMillionsDeposit => ({
            poolId: Long.fromString(pool_id),
            depositorAddress: depositor_address,
            winnerAddress: winner_address,
            isSponsor: is_sponsor === true,
            amount: amount,
        }),
    },
    '/lum.network.millions.MsgDepositRetry': {
        aminoType: 'lum-network/millions/MsgDepositRetry',
        toAmino: ({ poolId, depositId, depositorAddress }: MsgMillionsDepositRetry): AminoMsgMillionsDepositRetry['value'] => {
            return {
                pool_id: poolId.toString(),
                deposit_id: depositId.toString(),
                depositor_address: depositorAddress,
            };
        },
        fromAmino: ({ pool_id, deposit_id, depositor_address }: AminoMsgMillionsDepositRetry['value']): MsgMillionsDepositRetry => ({
            poolId: Long.fromString(pool_id),
            depositId: Long.fromString(deposit_id),
            depositorAddress: depositor_address,
        }),
    },
    '/lum.network.millions.MsgWithdrawDeposit': {
        aminoType: 'lum-network/millions/MsgWithdrawDeposit',
        toAmino: ({ poolId, depositId, depositorAddress, toAddress }: MsgMillionsWithdrawDeposit): AminoMsgMillionsWithdrawDeposit['value'] => ({
            pool_id: poolId.toString(),
            deposit_id: depositId.toString(),
            depositor_address: depositorAddress,
            to_address: toAddress,
        }),
        fromAmino: ({ pool_id, deposit_id, depositor_address, to_address }: AminoMsgMillionsWithdrawDeposit['value']): MsgMillionsWithdrawDeposit => ({
            poolId: Long.fromString(pool_id),
            depositId: Long.fromString(deposit_id),
            depositorAddress: depositor_address,
            toAddress: to_address,
        }),
    },
    '/lum.network.millions.MsgWithdrawDepositRetry': {
        aminoType: 'lum-network/millions/MsgWithdrawDepositRetry',
        toAmino: ({ poolId, withdrawalId, depositorAddress }: MsgMillionsWithdrawDepositRetry): AminoMsgMillionsWithdrawDepositRetry['value'] => ({
            pool_id: poolId.toString(),
            withdrawal_id: withdrawalId.toString(),
            depositor_address: depositorAddress,
        }),
        fromAmino: ({ pool_id, withdrawal_id, depositor_address }: AminoMsgMillionsWithdrawDepositRetry['value']): MsgMillionsWithdrawDepositRetry => ({
            poolId: Long.fromString(pool_id),
            withdrawalId: Long.fromString(withdrawal_id),
            depositorAddress: depositor_address,
        }),
    },
    '/lum.network.millions.MsgClaimPrize': {
        aminoType: 'lum-network/millions/MsgClaimPrize',
        toAmino: ({ poolId, drawId, prizeId, winnerAddress }: MsgMillionsClaimPrize): AminoMsgMillionsClaimPrize['value'] => ({
            pool_id: poolId.toString(),
            draw_id: drawId.toString(),
            prize_id: prizeId.toString(),
            winner_address: winnerAddress,
        }),
        fromAmino: ({ pool_id, draw_id, prize_id, winner_address }: AminoMsgMillionsClaimPrize['value']): MsgMillionsClaimPrize => ({
            poolId: Long.fromString(pool_id),
            drawId: Long.fromString(draw_id),
            prizeId: Long.fromString(prize_id),
            winnerAddress: winner_address,
        }),
    },
});

export const createAminoConverters = (): AminoConverters => ({
    ...createDfractAminoConverters(),
    ...createMillionsAminoConverters(),
    ...createGovAminoConverters(),
    ...createDefaultAminoTypes(),
});
