#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"

##
## Cosmos SDK
##
COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"

# Init Cosmos REF
COSMOS_REF=${COSMOS_REF:-"master"}
COSMOS_SUFFIX=${COSMOS_REF}
[[ $COSMOS_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && COSMOS_SUFFIX=${COSMOS_SUFFIX#v}

# Create the Cosmos dir
mkdir -p "$COSMOS_DIR"

# Download the Cosmos/ics23 archive
buf export buf.build/cosmos/cosmos-sdk:$COSMOS_REF --output "$COSMOS_SDK_DIR"
buf export buf.build/cosmos/ics23:$ICS_23_REF --output "$COSMOS_SDK_DIR"

##
## IBC SDK
##

IBC_DIR="$PROTO_DIR/ibc"
IBC_SDK_DIR="$IBC_DIR/ibc-go"

# Init IBC REF
IBC_REF=${IBC_REF:-"main"}
IBC_SUFFIX=${IBC_REF}
[[ $IBC_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && IBC_SUFFIX=${IBC_SUFFIX#v}

# Create the IBC dir
mkdir -p "$IBC_DIR"

# Download the IBC archive
buf export buf.build/cosmos/ibc:$IBC_REF --output "$IBC_SDK_DIR"

##
## LUM SDK
##

LUM_DIR="$PROTO_DIR/lum-network"
LUM_SDK_DIR="$LUM_DIR/chain"
LUM_ZIP_FILE="$LUM_DIR/tmp.zip"

# Init LUM REF
LUM_REF=${LUM_REF:-"master"}
LUM_SUFFIX=${LUM_REF//[\/]/-}
[[ $LUM_SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && LUM_SUFFIX=${LUM_SUFFIX#v}

# Create the LUM dir
mkdir -p "$LUM_DIR"

# Download the beam archive
wget -qO "$LUM_ZIP_FILE" "https://github.com/lum-network/chain/archive/$LUM_REF.zip"
unzip "$LUM_ZIP_FILE" "*.proto" -d "$LUM_DIR"
mv "$LUM_SDK_DIR-$LUM_SUFFIX" "$LUM_SDK_DIR"
rm "$LUM_ZIP_FILE"
