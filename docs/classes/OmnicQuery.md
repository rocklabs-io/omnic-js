# Class: OmnicQuery

OmnicQuery class is responsible for transaction records and statistic query.

## Table of contents

### Properties

- [GraphQLURL](OmnicQuery.md#graphqlurl)

### Constructors

- [constructor](OmnicQuery.md#constructor)

### Methods

- [getBridgeMessage](OmnicQuery.md#getbridgemessage)
- [getBridgeStatistic](OmnicQuery.md#getbridgestatistic)
- [getLatestBridgeMessage](OmnicQuery.md#getlatestbridgemessage)
- [getMessage](OmnicQuery.md#getmessage)

## Properties

### GraphQLURL

• `Private` **GraphQLURL**: `string`

## Constructors

### constructor

• **new OmnicQuery**()

## Methods

### getBridgeMessage

▸ **getBridgeMessage**(`txhash`): `Promise`<[`getBridgeMessageResult`](../modules/OmnicQuery-1.md#getbridgemessageresult)\>

get Bridge Message by txhash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txhash` | `string` | txhash of the message. |

#### Returns

`Promise`<[`getBridgeMessageResult`](../modules/OmnicQuery-1.md#getbridgemessageresult)\>

___

### getBridgeStatistic

▸ **getBridgeStatistic**(): `Promise`<[`getStatisticResult`](../modules/OmnicQuery-1.md#getstatisticresult)\>

Get the statistic of bridge, includes fee and volume

#### Returns

`Promise`<[`getStatisticResult`](../modules/OmnicQuery-1.md#getstatisticresult)\>

___

### getLatestBridgeMessage

▸ **getLatestBridgeMessage**(`offset`, `limit`, `dispatched`): `Promise`<[`getLatestBridgeMessageResult`](../modules/OmnicQuery-1.md#getlatestbridgemessageresult)\>

Get latest bridge message records, you can set the data query's offset and limit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` |  |
| `limit` | `number` |  |
| `dispatched` | `boolean` | filter the message dispatched or not. |

#### Returns

`Promise`<[`getLatestBridgeMessageResult`](../modules/OmnicQuery-1.md#getlatestbridgemessageresult)\>

___

### getMessage

▸ **getMessage**(`hash`): `Promise`<[`getMessageResult`](../modules/OmnicQuery-1.md#getmessageresult)\>

Get Omnic crosschain message record by hash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | hash of the omnic message. |

#### Returns

`Promise`<[`getMessageResult`](../modules/OmnicQuery-1.md#getmessageresult)\>
