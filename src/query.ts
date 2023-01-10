/**
 * OmnicQuery class is responsible for transaction records and statistic query.
 */
export class OmnicQuery {
  constructor () {}

  private GraphQLURL = process.env.GraphQLURL || "https://api.omnic.network/graphql"

  /**
   * Get Omnic crosschain message record by hash.
   * @param {String} hash hash of the omnic message.
   * @returns {Promise<OmnicQuery.getMessageResult>}
   */
  getMessage = async (
    hash: String): 
    Promise<OmnicQuery.getMessageResult> => {
    const requestBody = {
      query: `{
        getMessage(
          hash: "${hash}"
        ) {
          success
          errors
          message {
            status
            destination
            block_number
            hash
            leaf_index
            raw
            origin
            sender
            nonce
            destination
            recipient
            body
            proof
            status
            result
            dst_tx_confirm_at
            dst_tx_sent_at
            src_tx_confirm_at
          }
        }
      }`,
      variables: { hash }
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    };
    const data = fetch(this.GraphQLURL, options).then(res => 
      res.json().then(data => {
        if(data.data && data.data.getMessage)
          return data.data.getMessage
        else
          return Promise.reject('Fail to fetch: Connection Error')
      }))
    return data
  }

  /**
   * Get latest bridge message records, you can set the data query's offset and limit.
   * @param {Number} offset 
   * @param {Number} limit 
   * @param {Boolean} dispatched filter the message dispatched or not.
   * @returns {Promise <OmnicQuery.getLatestBridgeMessageResult>}
   */
  getLatestBridgeMessage = async (
    offset: Number, 
    limit: Number, 
    dispatched: Boolean
    ): Promise <OmnicQuery.getLatestBridgeMessageResult> => {
    const requestBody = {
      query: `{
        getLatestBridgeMessage(
          offset: ${offset}, 
          limit: ${limit}, 
          dispatched: ${dispatched}) {
          success
          errors
          message {
            method
            sender
            origin
            destination
            tx_sender
            tx_recipient
            status
            src_pool_id
            fee
            raw
            amount
            result
            src_tx_confirm_at
            dst_tx_sent_at
            pool_address
            token_address
            shared_decimals
            local_decimals
            name
            symbol
          }
        }
      }`,
      variables: { offset, limit, dispatched }
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    };
    const data = fetch(this.GraphQLURL, options).then(res => 
      res.json().then(data => {
        if(data.data && data.data.getLatestBridgeMessage)
          return data.data.getLatestBridgeMessage
        else
          return Promise.reject('Fail to fetch: Connection Error')
      }))
    return data
  }

  /**
   * Get the statistic of bridge, includes fee and volume
   * @returns {Promise<OmnicQuery.getStatisticResult>}
   */
  getBridgeStatistic = async (): 
  Promise<OmnicQuery.getStatisticResult> => {
    const requestBody = {
      query: `{
        getBridgeStatistic{
          success
          errors
          message {
            total_fee
            total_volume
          }
        }
      }`,
      // variables: { }
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    };
    const data = fetch(this.GraphQLURL, options).then(res => 
      res.json().then(data => {
        if(data.data && data.data.getBridgeStatistic)
          return data.data.getBridgeStatistic
        else
          return Promise.reject('Fail to fetch: Connection Error')
      }))
    return data
  }

  /**
   * get Bridge Message by txhash.
   * @param {String} txhash txhash of the message.
   * @returns {Promise<OmnicQuery.getBridgeMessageResult>}
   */
  getBridgeMessage = async (
    txhash: String
  ): 
  Promise<OmnicQuery.getBridgeMessageResult> => {
    const requestBody = {
      query: `{
      getBridgeMessage(txhash: "${txhash}")
      {
        success
        errors
        message {
          method
          sender
          origin
          destination
          tx_sender
          tx_recipient
          status
          src_pool_id
          fee
          raw
          amount
          result
          src_tx_confirm_at
          dst_tx_sent_at
          pool_address
          token_address
          shared_decimals
          local_decimals
          name
          symbol
        }
      }
    }`,
      // variables: { }
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    };
    const data = fetch(this.GraphQLURL, options).then(res => 
      res.json().then(data => {
        if(data.data && data.data.getBridgeMessage)
          return data.data.getBridgeMessage
        else
          return Promise.reject('Fail to fetch: Connection Error')
      }))
    return Promise.resolve(data)
  }
}

/**
 * Type definition for the OmnicQuery.
 */
export namespace OmnicQuery {
  /**
   * Type of Omnic message record.
   */
  export type Message = {
    txhash: String
    block_number: Number
    hash: String
    leaf_index: Number
    raw: String
    origin: Number
    sender: String
    nonce: Number
    destination: Number
    recipient: String
    body: String
    proof: String
    status: String
    result: String
    dst_tx_confirm_at: Number
    dst_tx_sent_at: Number
    src_tx_confirm_at: Number
  }

  /**
   * Type of bridge message record, you can find more detailed paranic bridge transaction information here.
   */
  export type BridgeMessage = {
    txhash: String
    block_number: Number
    hash: String
    leaf_index: Number
    raw: String
    origin: Number
    sender: String
    nonce: Number
    destination: Number
    recipient: String
    tx_sender: String
    body: String
    proof: String
    status: String
    result: String
    method: Number
    tx_recipient: String
    src_pool_id: String
    dst_pool_id: String
    amount: String
    fee: String
    dst_tx_confirm_at: Number
    dst_tx_sent_at: Number
    src_tx_confirm_at: Number
    pool_address: String
    token_address: String
    shared_decimals: String
    local_decimals: String
    name: String
    symbol: String
  }

  /**
   * Type of getMessage function result.
   */
  export type getMessageResult = {
    success: Boolean
    errors: [String]
    message: Message
  }

  /**
   * Type of getBridgeMessage function result.
   */
  export type getBridgeMessageResult = {
    success: Boolean
    errors: [String]
    message: BridgeMessage
  }

  /**
   * Type of getLatestBridgeMessage function result.
   */
  export type getLatestBridgeMessageResult = {
    success: Boolean
    errors: [String]
    message: [BridgeMessage]
  }

  /**
   * Type of statistic record.
   */
  export type Statistic = {
    total_volume: String
    total_fee: String
  }

  /**
   * Type of getLatestBridgeMessage function result.
   */
  export type getStatisticResult = {
    success: Boolean
    errors: [String]
    message: Statistic
  }
}

