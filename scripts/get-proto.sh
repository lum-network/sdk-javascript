#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"

LUM_NETWORK_DIR="$PROTO_DIR/lum-network"
LUM_NETWORK_SDK_DIR="$LUM_NETWORK_DIR/chain"

REF=${REF:-"master"}
SUFFIX=${REF}

[[ $SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && SUFFIX=${SUFFIX#v}

# Create the cosmos dir
mkdir -p "$COSMOS_DIR"

# Download the cosmos archive
wget -qO "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"

# Create the lum network dir
mkdir -p "$LUM_NETWORK_SDK_DIR/proto/chain/beam"

# Download the beam archive
wget -qO "$LUM_NETWORK_SDK_DIR/proto/chain/beam/beam.proto" "https://raw.githubusercontent.com/lum-network/chain/master/proto/beam/beam.proto?token=ABH2VUAPWO3DRGHMRGXWZWDASVAMY"
