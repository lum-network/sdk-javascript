# Lum Network - Javascript SDK

This Javascript SDK enables browsers and NodeJS clients to interact with the Lum Network.

## SDK Features

This SDK basically provides an easy access to all the available Lum Network blockchain RPCs as well as the payload generation and the cryptographic features to properly consume those RPCs.

**Most commonly used features:**

-   Core cryptographic tools and functions
-   Client service:
    -   Connection to a blockchain node (http and socket mode)
    -   Transaction broadcast
    -   Blockchain RPCs
-   Accounts and wallets:
    -   Accounts seed and encrypted mnemonic generation
    -   Unlock accounts from private keys, keystore and mnemonic
    -   Wallet balance
-   Transactions
    -   Payload generation
    -   Signature

## Documentation

The SDK code should be documented enough for developers to explore and use it easily. Therefore the documentation might not cover all the capabilities of the SDK. Feel free to contribute if you wish to improve the code documentation and/or the provided samples.

The [Documentation](./DOCUMENTATION.md) contains:

-   Installation instructions
-   Basic usage
-   Code samples

## Contributing

Contributions are most welcome.

Please test your changes with a local client and add unit tests coverage for your code before submission.

## Special notes

Thanks to the Binance team for their work on the Binance Javascript SDK which inspired this project structure and development.
