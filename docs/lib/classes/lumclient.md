# Class: LumClient

## Table of contents

### Constructors

- [constructor](lumclient.md#constructor)

### Properties

- [chainId](lumclient.md#chainid)
- [queryClient](lumclient.md#queryclient)
- [tmClient](lumclient.md#tmclient)

### Methods

- [broadcastTx](lumclient.md#broadcasttx)
- [disconnect](lumclient.md#disconnect)
- [getAccount](lumclient.md#getaccount)
- [getAccountUnverified](lumclient.md#getaccountunverified)
- [getAllBalancesUnverified](lumclient.md#getallbalancesunverified)
- [getAllSupplies](lumclient.md#getallsupplies)
- [getBalance](lumclient.md#getbalance)
- [getBalanceUnverified](lumclient.md#getbalanceunverified)
- [getBlock](lumclient.md#getblock)
- [getBlockHeight](lumclient.md#getblockheight)
- [getChainId](lumclient.md#getchainid)
- [getSupply](lumclient.md#getsupply)
- [getTx](lumclient.md#gettx)
- [getValidators](lumclient.md#getvalidators)
- [searchTx](lumclient.md#searchtx)
- [signAndBroadcastTx](lumclient.md#signandbroadcasttx)
- [signTx](lumclient.md#signtx)
- [status](lumclient.md#status)
- [txsQuery](lumclient.md#txsquery)
- [connect](lumclient.md#connect)

## Constructors

### constructor

\+ **new LumClient**(`tmClient`: *Client*): [*LumClient*](lumclient.md)

Create a LumClient instance using a tendermint RPC client

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tmClient` | *Client* | tendermint RPC client    |

**Returns:** [*LumClient*](lumclient.md)

## Properties

### chainId

• `Private` `Optional` **chainId**: *undefined* \| *string*

___

### queryClient

• `Readonly` **queryClient**: *QueryClient* & AuthExtension & BankExtension & DistributionExtension & StakingExtension

___

### tmClient

• `Readonly` **tmClient**: *Client*

## Methods

### broadcastTx

▸ **broadcastTx**(`tx`: *Uint8Array*): *Promise*<BroadcastTxCommitResponse\>

Broadcast a signed transaction
Basic usage would be to use the signTx method prior to calling this method

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tx` | *Uint8Array* | signed transaction to broadcast    |

**Returns:** *Promise*<BroadcastTxCommitResponse\>

___

### disconnect

▸ **disconnect**(): *void*

Disconnect the underlying tendermint client

**Returns:** *void*

___

### getAccount

▸ **getAccount**(`address`: *string*): *Promise*<*null* \| [*Account*](../interfaces/lumtypes.account.md)\>

Get account information

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | wallet address    |

**Returns:** *Promise*<*null* \| [*Account*](../interfaces/lumtypes.account.md)\>

___

### getAccountUnverified

▸ **getAccountUnverified**(`address`: *string*): *Promise*<*null* \| [*Account*](../interfaces/lumtypes.account.md)\>

Get account information without verifying its existence

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | wallet address    |

**Returns:** *Promise*<*null* \| [*Account*](../interfaces/lumtypes.account.md)\>

___

### getAllBalancesUnverified

▸ **getAllBalancesUnverified**(`address`: *string*): *Promise*<[*Coin*](../interfaces/lumtypes.coin.md)[]\>

Get all account balances without verifying their existence

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | wallet address    |

**Returns:** *Promise*<[*Coin*](../interfaces/lumtypes.coin.md)[]\>

___

### getAllSupplies

▸ **getAllSupplies**(): *Promise*<[*Coin*](../interfaces/lumtypes.coin.md)[]\>

Get all coins supplies

**Returns:** *Promise*<[*Coin*](../interfaces/lumtypes.coin.md)[]\>

___

### getBalance

▸ **getBalance**(`address`: *string*, `searchDenom`: *string*): *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

Get account balance

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | wallet address   |
`searchDenom` | *string* | Coin denomination (ex: lum)    |

**Returns:** *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

___

### getBalanceUnverified

▸ **getBalanceUnverified**(`address`: *string*, `searchDenom`: *string*): *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

Get an account balance without verifying their existence

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | wallet address   |
`searchDenom` | *string* | Coin denomination (ex: lum)    |

**Returns:** *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

___

### getBlock

▸ **getBlock**(`height?`: *number*): *Promise*<BlockResponse\>

Get a block by height

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`height?` | *number* | block height to get (default to current height)    |

**Returns:** *Promise*<BlockResponse\>

___

### getBlockHeight

▸ **getBlockHeight**(): *Promise*<number\>

Get the current block height

**Returns:** *Promise*<number\>

___

### getChainId

▸ **getChainId**(): *Promise*<string\>

Get the chain id

**Returns:** *Promise*<string\>

___

### getSupply

▸ **getSupply**(`searchDenom`: *string*): *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

Get coin supply

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`searchDenom` | *string* | Coin denomination (ex: lum)    |

**Returns:** *Promise*<*null* \| [*Coin*](../interfaces/lumtypes.coin.md)\>

___

### getTx

▸ **getTx**(`hash`: *Uint8Array*, `includeProof?`: *boolean*): *Promise*<*null* \| TxResponse\>

Get a transaction by Hash

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hash` | *Uint8Array* | transaction hash to retrieve   |
`includeProof?` | *boolean* | whether or not to include proof of the transaction inclusion in the block    |

**Returns:** *Promise*<*null* \| TxResponse\>

___

### getValidators

▸ **getValidators**(`blockHeight?`: *number*): *Promise*<ValidatorsResponse\>

Get all validators
Validators are sorted first by voting power (descending), then by address (ascending)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`blockHeight?` | *number* | block height to return. If no height is provided, it will fetch validator set which corresponds to the latest block    |

**Returns:** *Promise*<ValidatorsResponse\>

___

### searchTx

▸ **searchTx**(`queries`: *string*[], `page?`: *number*, `perPage?`: *number*, `includeProof?`: *boolean*): *Promise*<TxResponse[]\>

Search for transactions (paginated)
All queries will be run and results will be deduplicated, merged and sorted by block height

Queries:
To tell which events you want, you need to provide a query. query is a string, which has a form: "condition AND condition ..." (no OR at the moment). condition has a form: "key operation operand". key is a string with a restricted set of possible symbols ( \t\n\r\()"'=>< are not allowed). operation can be "=", "<", "<=", ">", ">=", "CONTAINS" AND "EXISTS". operand can be a string (escaped with single quotes), number, date or time.
Examples: tm.event = 'NewBlock' # new blocks tm.event = 'CompleteProposal' # node got a complete proposal tm.event = 'Tx' AND tx.hash = 'XYZ' # single transaction tm.event = 'Tx' AND tx.height = 5 # all txs of the fifth block tx.height = 5 # all txs of the fifth block
Tendermint provides a few predefined keys: tm.event, tx.hash and tx.height. Note for transactions, you can define additional keys by providing events with DeliverTx response.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`queries` | *string*[] | - | queries to run (see utils/search for helpers)   |
`page` | *number* | 1 | page to query (default to 1)   |
`perPage` | *number* | 30 | result per pages (default to 30)   |
`includeProof?` | *boolean* | - | whether or not to include proofs of the transactions inclusion in the block    |

**Returns:** *Promise*<TxResponse[]\>

___

### signAndBroadcastTx

▸ **signAndBroadcastTx**(`wallet`: [*LumWallet*](lumwallet.md), `messages`: [*Message*](../interfaces/lummessages.message.md)[], `fee`: [*Fee*](../interfaces/lumtypes.fee.md), `memo?`: *string*): *Promise*<BroadcastTxCommitResponse\>

Signs and broadcast the transaction using the specified wallet and messages

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`wallet` | [*LumWallet*](lumwallet.md) | signing wallet   |
`messages` | [*Message*](../interfaces/lummessages.message.md)[] | messages to sign   |
`fee` | [*Fee*](../interfaces/lumtypes.fee.md) | requested fee   |
`memo?` | *string* | optional memo for the transaction    |

**Returns:** *Promise*<BroadcastTxCommitResponse\>

___

### signTx

▸ **signTx**(`wallet`: [*LumWallet*](lumwallet.md), `messages`: [*Message*](../interfaces/lummessages.message.md)[], `fee`: [*Fee*](../interfaces/lumtypes.fee.md), `memo?`: *string*): *Promise*<Uint8Array\>

Signs the messages using the provided wallet and builds the transaction

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`wallet` | [*LumWallet*](lumwallet.md) | signing wallet   |
`messages` | [*Message*](../interfaces/lummessages.message.md)[] | messages to sign   |
`fee` | [*Fee*](../interfaces/lumtypes.fee.md) | requested fee   |
`memo?` | *string* | optional memo for the transaction    |

**Returns:** *Promise*<Uint8Array\>

___

### status

▸ **status**(): *Promise*<StatusResponse\>

Get the connected node status information

**Returns:** *Promise*<StatusResponse\>

___

### txsQuery

▸ `Private`**txsQuery**(`params`: TxSearchParams): *Promise*<TxResponse[]\>

Run a tx search

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`params` | TxSearchParams | Search params    |

**Returns:** *Promise*<TxResponse[]\>

___

### connect

▸ `Static`**connect**(`endpoint`: *string*): *Promise*<[*LumClient*](lumclient.md)\>

Creates a new LumClient for the given endpoint
Uses HTTP when the URL schema is http or https, uses WebSockets otherwise

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`endpoint` | *string* | Blockchain node RPC url    |

**Returns:** *Promise*<[*LumClient*](lumclient.md)\>
