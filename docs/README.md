# Documentation

The code should be documented enough to make this library easy to use for anyone familiar with blockchain technology and especially the Tendermint engine and the Cosmos SDK.

You can find more details by browsing the [code documentation](./lib).

## Examples

A couple examples to help you get started.

### Imports

```typescript
import {
    LumWallet,
    LumClient,
    LumTypes,
    LumUtils,
    LumConstants,
    LumMessages,
} from '@lum-network/sdk-javascript'
```

### Create a wallet

#### Mnemonic
```typescript
// Create a new cryptographically secure random mnemonic 
const mnemonic = LumUtils.generateMnemonic(12);

// Create a wallet instance based on this fresh mnemonic
const wallet = await LumWallet.fromMnemonic(mnemonic);
```

#### Private key
```typescript
// Create a new cryptographically secure random private key
const privateKey = LumUtils.generatePrivateKey();

// Create a wallet instance based on this fresh private key
const wallet = await LumWallet.fromPrivateKey(mnemonic);
console.log(`Wallet address: ${wallet.address}`);

// Create a wallet instance based on an hexadecimal private key (ex: user input - 0x is optional)
const hexPrivateKey = '0xb8e62c34928025cdd3aef6cbebc68694b5ad9209b2aff6d3891c8e61d22d3a3b';
const existingWallet = await LumWallet.fromPrivateKey(LumUtils.keyFromHex(hexPrivateKey));
console.log(`Existing wallet address: ${wallet.address}`);
```

#### Keystore
```typescript
// Create a random private key for the sake of this example
const privateKey = LumUtils.generatePrivateKey();
// Create a keystore (or consume user input)
const keystore = LumUtils.generateKeyStore(privateKey, 'some-password');
const wallet = await LumWallet.fromKeyStore(keystore, 'some-password');
console.log(`Wallet address: ${wallet.address}`);
```

### Connect to the testnet

```typescript
const testnetClient = await LumClient.connect('http://localhost:26657');
```

### Account information & balance

#### Get account information
```typescript
const account = await testnetClient.getAccount(wallet.address);
if (account === null) {
    console.log('Account: not found');
} else {
    console.log(`Account: ${account.address}, ${account.accountNumber}, ${account.sequence}`);
}
```

#### Get account balances
```typescript
const balances = await testnetClient.getBalancesUnverified(wallet.address);
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
// The client search feature supports multiple searches and merge+store the results
const transactions = await testnetClient.searchTx([
    LumUtils.searchTxFrom(wallet.address),
    LumUtils.searchTxTo(wallet.address),
]);
console.log(`Transactions: ${transactions.map((tx) => tx.hash).join(', ')}`);
```

#### Send transaction
```typescript
// Build transaction message (Send 100 LUM)
const sendMsg = LumMessages.BuildMsgSend(
    wallet.address,
    toAddress,
    [{ denom: LumConstants.LumDenom, amount: '100' }],
);
// Define fees (1 LUM)
const fee = {
    amount: [{ denom: LumConstants.LumDenom, amount: '1' }],
    gas: '100000',
};
// Sign and broadcast the transaction using the client
const broadcastResult = await clt.signAndBroadcastTx(w1, [sendMsg], fee, 'hello memo!');
// Verify the transaction was succesfully broadcasted and made it into a block
console.log(`Broadcast success: ${LumUtils.broadcastTxCommitSuccess(broadcastResult)}`);
```
