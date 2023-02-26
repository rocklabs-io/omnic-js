# Namespace: OmnicQuery

Type definition for the OmnicQuery.

## Table of contents

### Type Aliases

- [Amount](OmnicQuery-1.md#amount)
- [BridgeMessage](OmnicQuery-1.md#bridgemessage)
- [Fee](OmnicQuery-1.md#fee)
- [Message](OmnicQuery-1.md#message)
- [PoolBaseInfo](OmnicQuery-1.md#poolbaseinfo)
- [PoolsInfo](OmnicQuery-1.md#poolsinfo)
- [Statistic](OmnicQuery-1.md#statistic)
- [getBridgeMessageResult](OmnicQuery-1.md#getbridgemessageresult)
- [getBridgeMessagesResult](OmnicQuery-1.md#getbridgemessagesresult)
- [getMessageResult](OmnicQuery-1.md#getmessageresult)
- [getStatisticResult](OmnicQuery-1.md#getstatisticresult)

### Interfaces

- [Pool](../interfaces/OmnicQuery-1.Pool.md)
- [Token](../interfaces/OmnicQuery-1.Token.md)

## Type Aliases

### Amount

Ƭ **Amount**: `Object`

Type of Amount record

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `decimals` | `number` |
| `name` | `string` |
| `symbol` | `string` |
| `token_addr` | `string` |
| `token_id` | `number` |

___

### BridgeMessage

Ƭ **BridgeMessage**: `Object`

Type of bridge message record, you can find more detailed paranic bridge transaction information here.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `amount_min` | `string` |
| `block_number` | `number` |
| `body` | `string` |
| `destination` | `number` |
| `dst_chain_id` | `number` |
| `dst_tx_confirm_at` | `number` |
| `dst_tx_sent_at` | `number` |
| `fee` | `string` |
| `hash` | `string` |
| `leaf_index` | `number` |
| `method` | `number` |
| `nonce` | `number` |
| `origin` | `number` |
| `proof` | `string` |
| `raw` | `string` |
| `recipient` | `string` |
| `result` | `string` |
| `sender` | `string` |
| `src_chain_id` | `number` |
| `src_tx_confirm_at` | `number` |
| `status` | `string` |
| `token_addr` | `string` |
| `tx_from` | `string` |
| `tx_recipient` | `string` |
| `tx_sender` | `string` |
| `txhash` | `string` |

___

### Fee

Ƭ **Fee**: `Object`

Type of Fee record

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chain_id` | `number` |
| `decimals` | `number` |
| `fee` | `string` |
| `symbol` | `string` |

___

### Message

Ƭ **Message**: `Object`

Type of Omnic message record.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block_number` | `number` |
| `body` | `string` |
| `destination` | `number` |
| `dst_tx_confirm_at` | `number` |
| `dst_tx_sent_at` | `number` |
| `hash` | `string` |
| `leaf_index` | `number` |
| `nonce` | `number` |
| `origin` | `number` |
| `proof` | `string` |
| `raw` | `string` |
| `recipient` | `string` |
| `result` | `string` |
| `sender` | `string` |
| `src_tx_confirm_at` | `number` |
| `status` | `string` |
| `txhash` | `string` |

___

### PoolBaseInfo

Ƭ **PoolBaseInfo**: `Object`

Type of PoolBaseInfo

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `pool_id` | `bigint` |
| `symbol` | `string` |

___

### PoolsInfo

Ƭ **PoolsInfo**: `Object`

Type of PoolsInfo

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pools` | [[`PoolBaseInfo`](OmnicQuery-1.md#poolbaseinfo), [`number`, [`Token`](../interfaces/OmnicQuery-1.Token.md)][]][] |
| `router` | [`number`, `string`][] |

___

### Statistic

Ƭ **Statistic**: `Object`

Type of statistic record.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amounts` | [[`Amount`](OmnicQuery-1.md#amount)] |
| `fees` | [[`Fee`](OmnicQuery-1.md#fee)] |

___

### getBridgeMessageResult

Ƭ **getBridgeMessageResult**: `Object`

Type of getBridgeMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `errors` | [`string`] |
| `message` | [`BridgeMessage`](OmnicQuery-1.md#bridgemessage) |
| `success` | `boolean` |

___

### getBridgeMessagesResult

Ƭ **getBridgeMessagesResult**: `Object`

Type of Bridge Messages function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `errors` | [`string`] |
| `message` | [[`BridgeMessage`](OmnicQuery-1.md#bridgemessage)] |
| `success` | `boolean` |

___

### getMessageResult

Ƭ **getMessageResult**: `Object`

Type of getMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`string`] |
| `message` | [`Message`](OmnicQuery-1.md#message) |
| `success` | `boolean` |

___

### getStatisticResult

Ƭ **getStatisticResult**: `Object`

Type of getStatisticResult function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`string`] |
| `message` | [`Statistic`](OmnicQuery-1.md#statistic) |
| `success` | `boolean` |
