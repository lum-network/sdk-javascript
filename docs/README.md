# Documentation

The code should be documented enough to make this library easy to use for anyone familiar with blockchain technology and especially the Tendermint engine and the Cosmos SDK.

You can find more details by browsing the [code documentation](./lib).

## Examples

A couple examples to help you get started.

### Imports

```typescript
import {
    LumWalletFactory,
    LumClient,
    LumTypes,
    LumUtils,
    LumConstants,
    LumMessages,
} from '@lum-network/sdk-javascript'
```

### Software wallets

#### Mnemonic
```typescript
// Create a new cryptographically secure random mnemonic 
const mnemonic = LumUtils.generateMnemonic(12);

// Create a wallet instance based on this fresh mnemonic
const wallet = await LumWalletFactory.fromMnemonic(mnemonic);
```

#### Private key
```typescript
// Create a new cryptographically secure random private key
const privateKey = LumUtils.generatePrivateKey();

// Create a wallet instance based on this fresh private key
const wallet = await LumWalletFactory.fromPrivateKey(mnemonic);
console.log(`Wallet address: ${wallet.getAddress()}`);

// Create a wallet instance based on an hexadecimal private key (ex: user input - 0x is optional)
const hexPrivateKey = '0xb8e62c34928025cdd3aef6cbebc68694b5ad9209b2aff6d3891c8e61d22d3a3b';
const existingWallet = await LumWalletFactory.fromPrivateKey(LumUtils.keyFromHex(hexPrivateKey));
console.log(`Existing wallet address: ${wallet.getAddress()}`);
```

#### Keystore
```typescript
// Create a random private key for the sake of this example
const privateKey = LumUtils.generatePrivateKey();
// Create a keystore (or consume user input)
const keystore = LumUtils.generateKeyStore(privateKey, 'some-password');
const wallet = await LumWalletFactory.fromKeyStore(keystore, 'some-password');
console.log(`Wallet address: ${wallet.getAddress()}`);
```

### Hardware wallets

**IMPORTANT NOTES:**
- Transaction signature using Ledger only works with legacy amino (wich will be deprecated at some point)
- Derivation path using the Cosmos Ledger application cannot be set to the default Lum Path for now `m/44'/837'/0'/*/*` and must remain on the Cosmos path `m/44'/'118/0'/*/*`

#### Ledger

The SDK only provides access to the Ledger API using a provided Transport.
Ledger transport must be initialized and handled by the code using the SDK.

See [LedgerHQ/ledgerjs documentation](https://github.com/LedgerHQ/ledgerjs) for more information.

```typescript
import TransportNodeHid from '@ledgerhq/hw-transport-node-hid';

// Connect your ledger device
// Unlock it
// Open the Cosmos application

// Create a Node HID transport
const transport = await TransportNodeHid.create();

// Create the ledger based wallet instance
const wallet = await LumWalletFactory.fromLedgerTransport(transport, `m/44'/118'/0'/0/0`, 'lum');

// Change account to 1 and wallet to 1 (optional)
await wallet.useAccount(`m/44'/118'/0'/1/1`, 'lum');

// Get account information
const account = await testnetClient.getAccount(wallet.getAddress());
if (account === null) {
    console.log('Account: not found');
} else {
    console.log(`Account: ${account.address}, ${account.accountNumber}, ${account.sequence}`);
}
```


### Connect to the testnet

```typescript
// Use http://node0.lum.network/rpc to connect to the mainnet
const testnetClient = await LumClient.connect('http://node0.testnet.lum.network/rpc');
```

### Account information & balance

#### Get account information
```typescript
const account = await testnetClient.getAccount(wallet.getAddress());
if (account === null) {
    console.log('Account: not found');
} else {
    console.log(`Account: ${account.address}, ${account.accountNumber}, ${account.sequence}`);
}
```

#### Get account balances
```typescript
const balances = await testnetClient.getAllBalancesUnverified(wallet.getAddress());
if (balances.length === 0) {
    console.log('Balances: empty account');
} else {
    console.log(
        `Balances: ${balances.map((coin) => {
            coin.denom + ': ' + coin.amount;
        })}`,
    );
}
```

### Transactions

#### Get account transactions (sent and received)
```typescript
// The client search feature supports multiple searches and merge+sort the results
const transactions = await testnetClient.searchTx([
    LumUtils.searchTxFrom(wallet.getAddress()),
    LumUtils.searchTxTo(wallet.getAddress()),
]);
console.log(`Transactions: ${transactions.map((tx) => tx.hash).join(', ')}`);
```

#### Send transaction
```typescript
// Build transaction message (Send 100 LUM)
const sendMsg = LumMessages.BuildMsgSend(
    wallet.getAddress(),
    toAddress,
    [{ denom: LumConstants.LumDenom, amount: '100' }],
);
// Define fees (1 LUM)
const fee = {
    amount: [{ denom: LumConstants.LumDenom, amount: '1' }],
    gas: '100000',
};
// Fetch account number and sequence
const account = await testnetClient.getAccount(wallet.getAddress());
// Create the transaction document
const doc = {
    accountNumber: account.accountNumber,
    chainId,
    fee: fee,
    memo: 'my transaction memo',
    messages: [sendMsg],
    sequence: account.sequence,
};
// Sign and broadcast the transaction using the client
const broadcastResult = await clt.signAndBroadcastTx(w1, doc);
// Verify the transaction was succesfully broadcasted and made it into a block
console.log(`Broadcast success: ${LumUtils.broadcastTxCommitSuccess(broadcastResult)}`);
```

### Use all tendermint RPCs

The underlying tendermint client is directly accessible via the `.tmClient` property of the LumClient.

```typescript
const health = await testnetClient.tmClient.health();
const status = await testnetClient.tmClient.status();
const genesis = await testnetClient.tmClient.genesis();
const latestBlock = await testnetClient.tmClient.block();
```

### Use all modules RPCs

The underlying query client is directly accessible via the `.queryClient` property of the LumClient.

It allows to directly query all modules endpoints such as:

```typescript
const supplies = await clt.queryClient.bank.unverified.totalSupply();
// [{ denom: 'lum', amount: '1000000' }]
```

### Message signature & verification

#### Sign a message
```typescript
const message = 'Lum network is an awesome decentralized protocol';
const signedPayload = await wallet.signMessage(message);
// { address, publicKey, msg, sig, version, signer }
const validSig = await LumUtils.verifySignMsg(signedPayload);
// true
const invalidSig = await LumUtils.verifySignMsg(Object.assign(signedPayload, { msg: 'Wrong message input' }));
// false
```
