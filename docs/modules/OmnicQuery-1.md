# Namespace: OmnicQuery

Type definition for the OmnicQuery.

## Table of contents

### Type Aliases

- [BridgeMessage](OmnicQuery-1.md#bridgemessage)
- [Message](OmnicQuery-1.md#message)
- [Statistic](OmnicQuery-1.md#statistic)
- [getBridgeMessageResult](OmnicQuery-1.md#getbridgemessageresult)
- [getLatestBridgeMessageResult](OmnicQuery-1.md#getlatestbridgemessageresult)
- [getMessageResult](OmnicQuery-1.md#getmessageresult)
- [getStatisticResult](OmnicQuery-1.md#getstatisticresult)

## Type Aliases

### BridgeMessage

Ƭ **BridgeMessage**: `Object`

Type of bridge message record, you can find more detailed paranic bridge transaction information here.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `string` |
| `block_number` | `number` |
| `body` | `string` |
| `destination` | `number` |
| `dst_pool_id` | `string` |
| `dst_tx_confirm_at` | `number` |
| `dst_tx_sent_at` | `number` |
| `fee` | `string` |
| `hash` | `string` |
| `leaf_index` | `number` |
| `local_decimals` | `string` |
| `method` | `number` |
| `name` | `string` |
| `nonce` | `number` |
| `origin` | `number` |
| `pool_address` | `string` |
| `proof` | `string` |
| `raw` | `string` |
| `recipient` | `string` |
| `result` | `string` |
| `sender` | `string` |
| `shared_decimals` | `string` |
| `src_pool_id` | `string` |
| `src_tx_confirm_at` | `number` |
| `status` | `string` |
| `symbol` | `string` |
| `token_address` | `string` |
| `tx_recipient` | `string` |
| `tx_sender` | `string` |
| `txhash` | `string` |

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

### Statistic

Ƭ **Statistic**: `Object`

Type of statistic record.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `total_fee` | `string` |
| `total_volume` | `string` |

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

### getLatestBridgeMessageResult

Ƭ **getLatestBridgeMessageResult**: `Object`

Type of getLatestBridgeMessage function result.

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

Type of getLatestBridgeMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`string`] |
| `message` | [`Statistic`](OmnicQuery-1.md#statistic) |
| `success` | `boolean` |
