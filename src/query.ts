import { Actor, HttpAgent } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { idlFactory } from './dids/bridge.did'

/**
 * OmnicQuery class is responsible for transaction records and statistic query.
 */
export class OmnicQuery {
  constructor() { }

  private GraphQLURL = process.env.GraphQLURL || "https://api.omnic.network/graphql"

  /**
   * Get all Paranic pools information.
   * @returns {Promise<Array<[number, OmnicQuery.Router]>>} 
   */
  getPoolsInfo = async (): Promise<OmnicQuery.PoolsInfo> => {
    const agent = new HttpAgent({ host: "https://ic0.app" });
    const actor = Actor.createActor(
      idlFactory, {
      agent,
      canisterId: "3uldh-yyaaa-aaaam-aauiq-cai"
    })
    const res: any = await actor.get_all_pools()
    if ('Ok' in res) {
      return Promise.resolve(res.Ok as OmnicQuery.PoolsInfo)
    } else {
      return Promise.reject(res.Err as string)
    }
  }

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
        if (data.data && data.data.getMessage)
          return data.data.getMessage
        else if (data.errors)
          return Promise.reject("Failed to fetch data: " + data.errors);
      else
          return Promise.reject("Failed to fetch data: Connection Error");
      })).catch((error)=>{
        return Promise.reject('Fail to fetch: ' + error)
      })
    return data
  }

  /**
   * Get latest bridge message records, you can set the data query's offset and limit.
   * @param {number} offset 
   * @param {number} limit 
   * @param {boolean} dispatched filter the message dispatched or not.
   * @returns {Promise <OmnicQuery.getBridgeMessagesResult>}
   */
  getLatestBridgeMessage = async (
    offset: number,
    limit: number,
    dispatched: boolean
  ): Promise<OmnicQuery.getBridgeMessagesResult> => {
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
          hash
          leaf_index
          nonce
          sender
          origin
          destination
          recipient
          tx_sender
          proof
          raw
          body
          status
          result
          fee
          tx_from
          method
          tx_recipient
          timestamp
          token_addr
          src_chain_id
          dst_chain_id
          amount
          amount_min
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
        if (data.data && data.data.getLatestBridgeMessage)
          return data.data.getLatestBridgeMessage
        else if (data.errors)
            return Promise.reject("Failed to fetch data: " + data.errors);
        else
            return Promise.reject("Failed to fetch data: Connection Error");
      })).catch((error)=>{
        return Promise.reject('Fail to fetch: ' + error)
      })
    return data
  }

  /**
   * Get latest bridge message records, you can set the data query's offset and limit.
   * @param {string} id User's EVM Address or Principal ID 
   * @param {number} offset 
   * @param {number} limit 
   * @returns {Promise <OmnicQuery.getBridgeMessagesResult>}
   */
  getUserTransferHistory = async (
    id: string,
    offset: number,
    limit: number,
  ): Promise<OmnicQuery.getBridgeMessagesResult> => {
    var _id = id.trim().toLowerCase()
    if(!_id.startsWith('0x') && _id.length != 40){ // dfinity pid
      _id = Principal.fromText(id).toHex().padStart(64, '0')
    }
    const requestBody = {
      query: `{
        getUserTransferHistory(
        id: "${_id}",
        offset: ${offset}, 
        limit: ${limit}) {
        success
        errors
        count
        message {
          txhash
          block_number
          hash
          leaf_index
          nonce
          sender
          origin
          destination
          recipient
          tx_sender
          proof
          raw
          body
          status
          result
          fee
          tx_from
          method
          tx_recipient
          src_tx_confirm_at
          dst_tx_sent_at
          dst_tx_confirm_at
          token_addr
          src_chain_id
          dst_chain_id
          amount
          amount_min
        }
        }
    }`,
      variables: { _id, offset, limit }
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
        if (data.data && data.data.getUserTransferHistory)
          return data.data.getUserTransferHistory
        else if (data.errors)
            return Promise.reject("Failed to fetch data: " + data.errors);
        else
            return Promise.reject("Failed to fetch data: Connection Error");
      })).catch((error)=>{
        return Promise.reject('Fail to fetch: ' + error)
      })
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
          message{
            amounts{
              token_id
              name
              decimals
              token_addr
              symbol
              amount
            }
            fees{
              chain_id
              decimals
              symbol
              fee
            }
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
        if (data.data && data.data.getBridgeStatistic)
          return data.data.getBridgeStatistic
        else if (data.errors)
            return Promise.reject("Failed to fetch data: " + data.errors);
        else
            return Promise.reject("Failed to fetch data: Connection Error");
      })).catch((error)=>{
        return Promise.reject('Fail to fetch: ' + error)
      })
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
            txhash
            block_number
            hash
            leaf_index
            nonce
            sender
            origin
            destination
            recipient
            tx_sender
            proof
            raw
            body
            status
            result
            fee
            tx_from
            method
            tx_recipient
            src_tx_confirm_at
            dst_tx_sent_at
            dst_tx_confirm_at
            token_addr
            src_chain_id
            dst_chain_id
            amount
            amount_min
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
        if (data.data && data.data.getBridgeMessage)
          return data.data.getBridgeMessage
        else if (data.errors)
            return Promise.reject("Failed to fetch data: " + data.errors);
        else
            return Promise.reject("Failed to fetch data: Connection Error");
      })).catch((error)=>{
        return Promise.reject('Fail to fetch: ' + error)
      })
    return data
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
    amount: string
    amount_min: string
    fee: string
    token_addr: string
    tx_recipient: string
    tx_from: string
    src_chain_id: number
    dst_chain_id: number
    dst_tx_confirm_at: number
    dst_tx_sent_at: number
    src_tx_confirm_at: number
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
   * Type of Bridge Messages function result.
   */
  export type getBridgeMessagesResult = {
    success: boolean
    errors: [string]
    message: [BridgeMessage]
    count: number
  }

  /**
   * Type of Fee record
   */
  export type Fee = {
    chain_id: number
    decimals: number
    symbol: string
    fee: string
  }

  /**
   * Type of Amount record
   */
  export type Amount = {
    token_id: number
    name: string
    decimals: number
    token_addr: string
    symbol: string
    amount: string
  }

  /**
   * Type of statistic record.
   */
  export type Statistic = {
    fees: [Fee]
    amounts: [Amount]
  }

  /**
   * Type of getStatisticResult function result.
   */
  export type getStatisticResult = {
    success: boolean
    errors: [string]
    message: Statistic
  }

  /**
   * Type of PoolsInfo 
   */
  export type PoolsInfo = {
    'router' : Array<[number, string]>,
    'pools' : Array<[PoolBaseInfo, Array<[number, Token]>]>,
  }

  /**
   * Type of PoolBaseInfo 
   */
  export type PoolBaseInfo = {
    'name' : string,
    'pool_id' : bigint,
    'symbol' : string,
  }


  /**
   * Type of Pool
   */
  export interface Pool {
    'shared_decimals': number,
    'token': Token,
    'src_pool_id': number,
    'local_decimals': number,
    'liquidity': bigint,
    'src_chain': number,
    'convert_rate': bigint,
    'pool_address': string,
  }

  /**
   * Type of Token 
   */
  export interface Token {
    'decimals' : number,
    'src_chain_id' : number,
    'is_mapped_token' : boolean,
    'address' : string,
  }
}

