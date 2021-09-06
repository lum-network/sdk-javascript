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

CREF=${CREF:-"master"}
CSUFFIX=${CREF}
[[ $CSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && CSUFFIX=${CSUFFIX#v}

LREF=${LREF:-"master"}
LSUFFIX=${LREF}
[[ $LSUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && LSUFFIX=${LSUFFIX#v}

# Create the cosmos dir
mkdir -p "$COSMOS_DIR"

# Download the cosmos archive
wget -qO "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$CREF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$CSUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"

# Create the lum network dir
mkdir -p "$LUM_NETWORK_DIR"

# Download the beam archive
wget -qO "$ZIP_LUM_FILE" "https://github.com/lum-network/chain/archive/$LREF.zip"
unzip "$ZIP_LUM_FILE" "*.proto" -d "$LUM_NETWORK_DIR"
mv "$LUM_NETWORK_SDK_DIR-$LSUFFIX" "$LUM_NETWORK_SDK_DIR"
rm "$ZIP_LUM_FILE"
