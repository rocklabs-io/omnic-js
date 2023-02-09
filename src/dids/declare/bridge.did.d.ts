import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Event {
  'is_native_token' : [] | [boolean],
  'dst_chain' : [] | [number],
  'sender' : Uint8Array,
  'src_chain' : [] | [number],
  'src_token_addr' : [] | [string],
  'timestamp' : bigint,
  'index' : bigint,
  'op_type' : number,
  'amount' : [] | [bigint],
  'receiver' : [] | [Uint8Array],
}
export interface Metadata {
  'shared_decimals' : number,
  'name' : string,
  'is_mapped_token' : boolean,
  'address' : string,
  'symbol' : string,
}
export interface PoolBaseInfo {
  'name' : string,
  'pool_id' : bigint,
  'symbol' : string,
}
export interface PoolsInfo {
  'routers' : Array<[number, string]>,
  'pools' : Array<[PoolBaseInfo, Array<[number, Token]>]>,
}
export type Result = { 'Ok' : boolean } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Array<[number, bigint]> } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : PoolsInfo } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : Metadata } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : Array<Event> } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_6 = { 'Ok' : bigint } |
  { 'Err' : string };
export interface Token {
  'decimals' : number,
  'src_chain_id' : number,
  'is_mapped_token' : boolean,
  'address' : string,
}
export interface _SERVICE {
  'add_chain' : ActorMethod<[number, string], Result>,
  'add_owner' : ActorMethod<[Principal], Result>,
  'add_supported_tokens' : ActorMethod<[bigint, Array<Token>], Result>,
  'check_transfer' : ActorMethod<[bigint, number, bigint], Result>,
  'create_pool' : ActorMethod<[Array<Metadata>], Result>,
  'delete_pool' : ActorMethod<[bigint], Result>,
  'get_all_chains_liquidity' : ActorMethod<[bigint], Result_1>,
  'get_all_pools' : ActorMethod<[], Result_2>,
  'get_logs' : ActorMethod<[], Array<string>>,
  'get_pool_metadata' : ActorMethod<[bigint], Result_3>,
  'get_records' : ActorMethod<[bigint, bigint], Result_4>,
  'handle_message' : ActorMethod<
    [number, Uint8Array, number, Uint8Array],
    Result_5
  >,
  'handle_revert' : ActorMethod<
    [number, string, string, bigint, Uint8Array],
    Result_5
  >,
  'pool_id_by_token_address' : ActorMethod<[number, string], Result_6>,
  'remove_owner' : ActorMethod<[Principal], Result>,
  'set_canister_addr' : ActorMethod<[], Result_5>,
  'set_chain' : ActorMethod<[number, string], Result>,
  'set_nonce' : ActorMethod<[bigint], Result>,
  'set_omnic' : ActorMethod<[Principal], Result>,
  'transfer' : ActorMethod<[bigint, number, string, bigint], Result_5>,
  'transfer_native' : ActorMethod<[number, number, string, bigint], Result_5>,
  'update_supported_tokens' : ActorMethod<[bigint, Token], Result>,
}
