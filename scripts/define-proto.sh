#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

COSMOS_PROTO_DIR="./proto/cosmos/cosmos-sdk"

IBC_PROTO_DIR="./proto/ibc/ibc-go"

ROOT_LUM_PROTO_DIR="./proto/lum-network/chain"
LUM_PROTO_DIR="$ROOT_LUM_PROTO_DIR/proto"

OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"

protoc \
    --plugin="$(yarn bin protoc-gen-ts_proto)" \
    --ts_proto_out="$OUT_DIR" \
    --proto_path="$COSMOS_PROTO_DIR" \
    --proto_path="$LUM_PROTO_DIR" \
    --proto_path="$IBC_PROTO_DIR" \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
    "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/auth.proto" \
    "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/authz.proto" \
    "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/event.proto" \
    "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/authz.proto" \
    "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/bank.proto" \
    "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/base/abci/v1beta1/abci.proto" \
    "$COSMOS_PROTO_DIR/cosmos/base/query/v1beta1/pagination.proto" \
    "$COSMOS_PROTO_DIR/cosmos/base/tendermint/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/base/v1beta1/coin.proto" \
    "$COSMOS_PROTO_DIR/cosmos/crypto/secp256k1/keys.proto" \
    "$COSMOS_PROTO_DIR/cosmos/crypto/multisig/v1beta1/multisig.proto" \
    "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/distribution.proto" \
    "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/feegrant.proto" \
    "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1/gov.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/gov.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/mint/v1beta1/mint.proto" \
    "$COSMOS_PROTO_DIR/cosmos/mint/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/params/v1beta1/params.proto" \
    "$COSMOS_PROTO_DIR/cosmos/params/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/slashing.proto" \
    "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/authz.proto" \
    "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/staking.proto" \
    "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/tx/signing/v1beta1/signing.proto" \
    "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/service.proto" \
    "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/upgrade/v1beta1/query.proto" \
    "$COSMOS_PROTO_DIR/cosmos/upgrade/v1beta1/upgrade.proto" \
    "$COSMOS_PROTO_DIR/cosmos/upgrade/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/tx.proto" \
    "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/vesting.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/controller/v1/controller.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/controller/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/host/v1/host.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/host/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/v1/account.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/v1/metadata.proto" \
    "$IBC_PROTO_DIR/ibc/applications/interchain_accounts/v1/packet.proto" \
    "$IBC_PROTO_DIR/ibc/applications/transfer/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/applications/transfer/v1/transfer.proto" \
    "$IBC_PROTO_DIR/ibc/applications/transfer/v1/tx.proto" \
    "$IBC_PROTO_DIR/ibc/applications/transfer/v2/packet.proto" \
    "$IBC_PROTO_DIR/ibc/core/channel/v1/channel.proto" \
    "$IBC_PROTO_DIR/ibc/core/channel/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/core/channel/v1/tx.proto" \
    "$IBC_PROTO_DIR/ibc/core/client/v1/client.proto" \
    "$IBC_PROTO_DIR/ibc/core/client/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/core/client/v1/tx.proto" \
    "$IBC_PROTO_DIR/ibc/core/commitment/v1/commitment.proto" \
    "$IBC_PROTO_DIR/ibc/core/connection/v1/connection.proto" \
    "$IBC_PROTO_DIR/ibc/core/connection/v1/query.proto" \
    "$IBC_PROTO_DIR/ibc/core/connection/v1/tx.proto" \
    "$IBC_PROTO_DIR/ibc/lightclients/tendermint/v1/tendermint.proto" \
    "$LUM_PROTO_DIR/lum/network/airdrop/claim.proto" \
    "$LUM_PROTO_DIR/lum/network/airdrop/query.proto" \
    "$LUM_PROTO_DIR/lum/network/airdrop/params.proto" \
    "$LUM_PROTO_DIR/lum/network/beam/beam.proto" \
    "$LUM_PROTO_DIR/lum/network/beam/query.proto" \
    "$LUM_PROTO_DIR/lum/network/beam/tx.proto" \
    "$LUM_PROTO_DIR/lum/network/dfract/deposit.proto" \
    "$LUM_PROTO_DIR/lum/network/dfract/query.proto" \
    "$LUM_PROTO_DIR/lum/network/dfract/tx.proto" \
    "$LUM_PROTO_DIR/lum/network/dfract/params.proto" \
    "$LUM_PROTO_DIR/lum/network/dfract/proposal.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/callbacks.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/deposit.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/draw.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/draw_schedule.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/params.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/pool.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/prize.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/prize_batch.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/prize_ref.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/prize_strategy.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/query.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/tx.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/withdrawal.proto" \
    "$LUM_PROTO_DIR/lum/network/millions/gov.proto"

# Remove unnecessary codec files
rm -rf \
    src/codec/cosmos_proto/ \
    src/codec/gogoproto/ \
    src/codec/google/api/ \
    src/codec/google/protobuf/descriptor.ts
