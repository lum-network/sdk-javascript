# Lum Network - Javascript SDK

[![npm version](https://badge.fury.io/js/%40lum-network%2Fsdk-javascript.svg)](https://badge.fury.io/js/%40lum-network%2Fsdk-javascript)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This Javascript SDK enables browsers and NodeJS clients to interact with the Lum Network.

## SDK Usage

### Node version

The library is tested using **NodeJS 10.x, 12.x, 14.x, 15.x**.

It should also work in all recent browsers.

### Installation

```bash
yarn add @lum-network/sdk-javascript
```

### Documentation

The SDK code should be documented enough for developers to explore and use it easily. Therefore the documentation might not cover all the capabilities of the SDK. Feel free to contribute if you wish to improve the code documentation and/or the provided samples.

The [Documentation](./docs/README.md) contains:

-   Installation instructions
-   Basic usage
-   Code samples
-   Code auto-generated documentation

## SDK Features

This SDK provides an easy access to all the available Lum Network blockchain RPCs as well as the payload generation and the cryptographic features to properly consume those RPCs.

**Most commonly used features:**

-   Core cryptographic tools:
    -   Seed, private key and encrypted mnemonic generation
    -   Private and public keys management
    -   Transaction payload generation
    -   Transaction signature and verification
-   Wallets:
    -   Unlock wallets from private keys, keystore and mnemonic
    -   Sign transaction using unlocked wallets
-   Client service:
    -   Connection to a blockchain node (http and socket mode)
    -   Commonly used Tendermint and Cosmos RPCs
    -   All Lum Network dedicated RPCs
    -   Transaction broadcast
-   Transactions
    -   Payload generation
    -   Signature
-   Messages & Types:
    -   Cosmos & Lum messages payload building
    -   Typescript implementation of RPCs requests and responses
-   Other utils:
    -   Encoding data from/to: Uint8Array, base64 and hex
    -   Build Transaction search queries
    -   Log & event parsing

## Code structure

The SDK is based on the [CosmJS](https://github.com/cosmos/cosmjs) implementation and heavily relies on it.

It is intented to be used standalone, without having to import specific CosmJS packages which can get make implementations tricky and messy.

Therefore all codecs, types, functions are features from the CosmJS SDK are either re-implemented by this SDK or re-exported for simplicity purposes.

Directly importing the CosmJS SDK or other cryptographic library should be considered bad practice for most use cases.

Do not hesitate to contribute to this repository. This SDK is intended to be a one-stop-shop for all Lum Network javascript implementations and should definitely be improved over time by all its users.

### Unittests

#### All unittests except the ones involving a Ledger device (skipped by default) can be run using the following command

```bash
yarn test
```

#### Ledger unittests

In order to run the unittest involving Ledger devices you need to do the following:

1. Chose which application you want to use for the tests (Cosmos or Lum)
2. Remove the `.skip` from all the tests your want to run in `./tests/ledger.test.ts`
3. Connect a Ledger device and open either the Cosmos application or the Lum application
4. Run `yarn test tests/ledger.test.ts`
5. Follow the instructions on your Ledger device to pass each test that require a user input

## Protocol Buffer Codecs

### Introduction

As of [v0.40](https://github.com/cosmos/cosmos-sdk/releases/tag/v0.40.0), the Cosmos SDK uses [protocol buffers](https://developers.google.com/protocol-buffers) as its standard serialization format for blockchain state and wire communication. This library by default supports protocol buffer serialization for many of the standard queries and messages defined by the Cosmos SDK and the Lum Network custom implementations.

### Acquire the definition files

```bash
yarn get-proto
```

### Generate codec files

```bash
yarn define-proto
```

## Contributing

Contributions are most welcome.

Please test your changes with a local client and add unit tests coverage for your code before submission.
