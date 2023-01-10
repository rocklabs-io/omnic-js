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
| `amount` | `String` |
| `block_number` | `Number` |
| `body` | `String` |
| `destination` | `Number` |
| `dst_pool_id` | `String` |
| `dst_tx_confirm_at` | `Number` |
| `dst_tx_sent_at` | `Number` |
| `fee` | `String` |
| `hash` | `String` |
| `leaf_index` | `Number` |
| `local_decimals` | `String` |
| `method` | `Number` |
| `name` | `String` |
| `nonce` | `Number` |
| `origin` | `Number` |
| `pool_address` | `String` |
| `proof` | `String` |
| `raw` | `String` |
| `recipient` | `String` |
| `result` | `String` |
| `sender` | `String` |
| `shared_decimals` | `String` |
| `src_pool_id` | `String` |
| `src_tx_confirm_at` | `Number` |
| `status` | `String` |
| `symbol` | `String` |
| `token_address` | `String` |
| `tx_recipient` | `String` |
| `tx_sender` | `String` |
| `txhash` | `String` |

___

### Message

Ƭ **Message**: `Object`

Type of Omnic message record.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block_number` | `Number` |
| `body` | `String` |
| `destination` | `Number` |
| `dst_tx_confirm_at` | `Number` |
| `dst_tx_sent_at` | `Number` |
| `hash` | `String` |
| `leaf_index` | `Number` |
| `nonce` | `Number` |
| `origin` | `Number` |
| `proof` | `String` |
| `raw` | `String` |
| `recipient` | `String` |
| `result` | `String` |
| `sender` | `String` |
| `src_tx_confirm_at` | `Number` |
| `status` | `String` |
| `txhash` | `String` |

___

### Statistic

Ƭ **Statistic**: `Object`

Type of statistic record.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `total_fee` | `String` |
| `total_volume` | `String` |

___

### getBridgeMessageResult

Ƭ **getBridgeMessageResult**: `Object`

Type of getBridgeMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`String`] |
| `message` | [`BridgeMessage`](OmnicQuery-1.md#bridgemessage) |
| `success` | `Boolean` |

___

### getLatestBridgeMessageResult

Ƭ **getLatestBridgeMessageResult**: `Object`

Type of getLatestBridgeMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`String`] |
| `message` | [[`BridgeMessage`](OmnicQuery-1.md#bridgemessage)] |
| `success` | `Boolean` |

___

### getMessageResult

Ƭ **getMessageResult**: `Object`

Type of getMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`String`] |
| `message` | [`Message`](OmnicQuery-1.md#message) |
| `success` | `Boolean` |

___

### getStatisticResult

Ƭ **getStatisticResult**: `Object`

Type of getLatestBridgeMessage function result.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `errors` | [`String`] |
| `message` | [`Statistic`](OmnicQuery-1.md#statistic) |
| `success` | `Boolean` |
