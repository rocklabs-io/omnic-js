/**
 * OmnicQuery class is responsible for transaction records and statistic query.
 */
export class OmnicQuery {
  constructor () {}

  private GraphQLURL = process.env.GraphQLURL || "https://api.omnic.network/graphql"

  /**
   * Get Omnic crosschain message record by hash.
   * @param {string} hash hash of the omnic message.
   * @returns {Promise<OmnicQuery.getMessageResult>}
   */
  getMessage = async (
    hash: string): 
    Promise<OmnicQuery.getMessageResult> => {
    const requestBody = {
      query: `{
        getMessage(
          hash: "${hash}"
        ) {
          success
          errors
          message {
            txhash
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
   * @param {number} offset 
   * @param {number} limit 
   * @param {boolean} dispatched filter the message dispatched or not.
   * @returns {Promise <OmnicQuery.getLatestBridgeMessageResult>}
   */
  getLatestBridgeMessage = async (
    offset: number, 
    limit: number, 
    dispatched: boolean
    ): Promise <OmnicQuery.getLatestBridgeMessageResult> => {
    const requestBody = {
      query: `{
        getLatestBridgeMessage(
          offset: ${offset}, 
          limit: ${limit}, 
          dispatched: ${dispatched}) {
          success
          errors
          count
          message {
            txhash
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
   * @param {string} txhash txhash of the message.
   * @returns {Promise<OmnicQuery.getBridgeMessageResult>}
   */
  getBridgeMessage = async (
    txhash: string
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
    txhash: string
    block_number: number
    hash: string
    leaf_index: number
    raw: string
    origin: number
    sender: string
    nonce: number
    destination: number
    recipient: string
    body: string
    proof: string
    status: string
    result: string
    dst_tx_confirm_at: number
    dst_tx_sent_at: number
    src_tx_confirm_at: number
  }

  /**
   * Type of bridge message record, you can find more detailed paranic bridge transaction information here.
   */
  export type BridgeMessage = {
    txhash: string
    block_number: number
    hash: string
    leaf_index: number
    raw: string
    origin: number
    sender: string
    nonce: number
    destination: number
    recipient: string
    tx_sender: string
    body: string
    proof: string
    status: string
    result: string
    method: number
    tx_recipient: string
    src_pool_id: string
    dst_pool_id: string
    amount: string
    fee: string
    dst_tx_confirm_at: number
    dst_tx_sent_at: number
    src_tx_confirm_at: number
    pool_address: string
    token_address: string
    shared_decimals: string
    local_decimals: string
    name: string
    symbol: string
  }

  /**
   * Type of getMessage function result.
   */
  export type getMessageResult = {
    success: boolean
    errors: [string]
    message: Message
  }

  /**
   * Type of getBridgeMessage function result.
   */
  export type getBridgeMessageResult = {
    success: boolean
    errors: [string]
    message: BridgeMessage
    count: number
  }

  /**
   * Type of getLatestBridgeMessage function result.
   */
  export type getLatestBridgeMessageResult = {
    success: boolean
    errors: [string]
    message: [BridgeMessage]
    count: number
  }

  /**
   * Type of statistic record.
   */
  export type Statistic = {
    total_volume: string
    total_fee: string
  }

  /**
   * Type of getLatestBridgeMessage function result.
   */
  export type getStatisticResult = {
    success: boolean
    errors: [string]
    message: Statistic
  }
}

