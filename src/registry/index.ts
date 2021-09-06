import { Registry, GeneratedType } from '@cosmjs/proto-signing';
import { AminoTypes } from '@cosmjs/stargate';

import { Tx } from '../codec/cosmos/tx/v1beta1/tx';
import { PubKey } from '../codec/cosmos/crypto/secp256k1/keys';
import { BaseAccount } from '../codec/cosmos/auth/v1beta1/auth';
import { MsgSend, MsgMultiSend } from '../codec/cosmos/bank/v1beta1/tx';
import { MsgFundCommunityPool, MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from '../codec/cosmos/distribution/v1beta1/tx';
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from '../codec/cosmos/staking/v1beta1/tx';
import { MsgDeposit, MsgSubmitProposal, MsgVote } from '../codec/cosmos/gov/v1beta1/tx';
import { MsgClaimBeam, MsgOpenBeam, MsgUpdateBeam } from '../codec/beam/tx';
import {
    MsgAcknowledgement,
    MsgChannelCloseConfirm,
    MsgChannelCloseInit,
    MsgChannelOpenAck,
    MsgChannelOpenConfirm,
    MsgChannelOpenInit,
    MsgChannelOpenTry,
    MsgRecvPacket,
    MsgTimeout,
    MsgTimeoutOnClose,
} from '../codec/ibc/core/channel/v1/tx';
import { MsgCreateClient, MsgSubmitMisbehaviour, MsgUpdateClient, MsgUpgradeClient } from '../codec/ibc/core/client/v1/tx';
import { MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInit, MsgConnectionOpenTry } from '../codec/ibc/core/connection/v1/tx';
import { MsgTransfer } from '../codec/ibc/applications/transfer/v1/tx';

const registryTypes: Iterable<[string, GeneratedType]> = [
    ['/cosmos.crypto.ed25519.PubKey', PubKey as GeneratedType],
    ['/cosmos.auth.v1beta1.BaseAccount', BaseAccount as GeneratedType],
    ['/cosmos.bank.v1beta1.MsgSend', MsgSend as GeneratedType],
    ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgFundCommunityPool', MsgFundCommunityPool as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgSetWithdrawAddress', MsgSetWithdrawAddress as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', MsgWithdrawDelegatorReward as GeneratedType],
    ['/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator as GeneratedType],
    ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate as GeneratedType],
    ['/cosmos.gov.v1beta1.MsgDeposit', MsgDeposit],
    ['/cosmos.gov.v1beta1.MsgSubmitProposal', MsgSubmitProposal],
    ['/cosmos.gov.v1beta1.MsgVote', MsgVote],
    ['/ibc.core.channel.v1.MsgChannelOpenInit', MsgChannelOpenInit],
    ['/ibc.core.channel.v1.MsgChannelOpenTry', MsgChannelOpenTry],
    ['/ibc.core.channel.v1.MsgChannelOpenAck', MsgChannelOpenAck],
    ['/ibc.core.channel.v1.MsgChannelOpenConfirm', MsgChannelOpenConfirm],
    ['/ibc.core.channel.v1.MsgChannelCloseInit', MsgChannelCloseInit],
    ['/ibc.core.channel.v1.MsgChannelCloseConfirm', MsgChannelCloseConfirm],
    ['/ibc.core.channel.v1.MsgRecvPacket', MsgRecvPacket],
    ['/ibc.core.channel.v1.MsgTimeout ', MsgTimeout],
    ['/ibc.core.channel.v1.MsgTimeoutOnClose', MsgTimeoutOnClose],
    ['/ibc.core.channel.v1.MsgAcknowledgement', MsgAcknowledgement],
    ['/ibc.core.client.v1.MsgCreateClient', MsgCreateClient],
    ['/ibc.core.client.v1.MsgUpdateClient', MsgUpdateClient],
    ['/ibc.core.client.v1.MsgUpgradeClient', MsgUpgradeClient],
    ['/ibc.core.client.v1.MsgSubmitMisbehaviour', MsgSubmitMisbehaviour],
    ['/ibc.core.connection.v1.MsgConnectionOpenInit', MsgConnectionOpenInit],
    ['/ibc.core.connection.v1.MsgConnectionOpenTry', MsgConnectionOpenTry],
    ['/ibc.core.connection.v1.MsgConnectionOpenAck', MsgConnectionOpenAck],
    ['/ibc.core.connection.v1.MsgConnectionOpenConfirm', MsgConnectionOpenConfirm],
    ['/ibc.applications.transfer.v1.MsgTransfer', MsgTransfer],
    ['/lum.network.beam.MsgOpenBeam', MsgOpenBeam as GeneratedType],
    ['/lum.network.beam.MsgUpdateBeam', MsgUpdateBeam as GeneratedType],
    ['/lum.network.beam.MsgClaimBeam', MsgClaimBeam as GeneratedType],
];

class ExtendedRegistry extends Registry {
    decodeTx = (tx: Uint8Array): Tx => {
        return Tx.decode(tx);
    };
}

export const LumAminoRegistry = new AminoTypes();
export const LumRegistry = new ExtendedRegistry(registryTypes);
