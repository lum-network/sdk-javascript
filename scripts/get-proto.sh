#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"

LUM_NETWORK_DIR="$PROTO_DIR/lum-network"
LUM_NETWORK_SDK_DIR="$LUM_NETWORK_DIR/chain"
ZIP_LUM_FILE="$LUM_NETWORK_DIR/tmp.zip"

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
mkdir -p "$LUM_NETWORK_DIR"

# Download the beam archive
wget -qO "$ZIP_LUM_FILE" "https://github.com/lum-network/chain/archive/$REF.zip"
unzip "$ZIP_LUM_FILE" "*.proto" -d "$LUM_NETWORK_DIR"
mv "$LUM_NETWORK_SDK_DIR-$SUFFIX" "$LUM_NETWORK_SDK_DIR"
rm "$ZIP_LUM_FILE"
