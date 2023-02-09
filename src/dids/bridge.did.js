export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text });
  const Token = IDL.Record({
    'decimals' : IDL.Nat8,
    'src_chain_id' : IDL.Nat32,
    'is_mapped_token' : IDL.Bool,
    'address' : IDL.Text,
  });
  const Metadata = IDL.Record({
    'shared_decimals' : IDL.Nat8,
    'name' : IDL.Text,
    'is_mapped_token' : IDL.Bool,
    'address' : IDL.Text,
    'symbol' : IDL.Text,
  });
  const Result_1 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Tuple(IDL.Nat32, IDL.Nat)),
    'Err' : IDL.Text,
  });
  const PoolBaseInfo = IDL.Record({
    'name' : IDL.Text,
    'pool_id' : IDL.Nat64,
    'symbol' : IDL.Text,
  });
  const PoolsInfo = IDL.Record({
    'routers' : IDL.Vec(IDL.Tuple(IDL.Nat32, IDL.Text)),
    'pools' : IDL.Vec(
      IDL.Tuple(PoolBaseInfo, IDL.Vec(IDL.Tuple(IDL.Nat32, Token)))
    ),
  });
  const Result_2 = IDL.Variant({ 'Ok' : PoolsInfo, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'Ok' : Metadata, 'Err' : IDL.Text });
  const Event = IDL.Record({
    'is_native_token' : IDL.Opt(IDL.Bool),
    'dst_chain' : IDL.Opt(IDL.Nat32),
    'sender' : IDL.Vec(IDL.Nat8),
    'src_chain' : IDL.Opt(IDL.Nat32),
    'src_token_addr' : IDL.Opt(IDL.Text),
    'timestamp' : IDL.Nat64,
    'index' : IDL.Nat64,
    'op_type' : IDL.Nat8,
    'amount' : IDL.Opt(IDL.Nat),
    'receiver' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const Result_4 = IDL.Variant({ 'Ok' : IDL.Vec(Event), 'Err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const Result_6 = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  return IDL.Service({
    'add_chain' : IDL.Func([IDL.Nat32, IDL.Text], [Result], []),
    'add_owner' : IDL.Func([IDL.Principal], [Result], []),
    'add_supported_tokens' : IDL.Func(
        [IDL.Nat64, IDL.Vec(Token)],
        [Result],
        [],
      ),
    'check_transfer' : IDL.Func(
        [IDL.Nat64, IDL.Nat32, IDL.Nat64],
        [Result],
        ['query'],
      ),
    'create_pool' : IDL.Func([IDL.Vec(Metadata)], [Result], []),
    'delete_pool' : IDL.Func([IDL.Nat64], [Result], []),
    'get_all_chains_liquidity' : IDL.Func([IDL.Nat64], [Result_1], ['query']),
    'get_all_pools' : IDL.Func([], [Result_2], ['query']),
    'get_logs' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'get_pool_metadata' : IDL.Func([IDL.Nat64], [Result_3], ['query']),
    'get_records' : IDL.Func([IDL.Nat64, IDL.Nat64], [Result_4], ['query']),
    'handle_message' : IDL.Func(
        [IDL.Nat32, IDL.Vec(IDL.Nat8), IDL.Nat32, IDL.Vec(IDL.Nat8)],
        [Result_5],
        [],
      ),
    'handle_revert' : IDL.Func(
        [IDL.Nat32, IDL.Text, IDL.Text, IDL.Nat, IDL.Vec(IDL.Nat8)],
        [Result_5],
        [],
      ),
    'pool_id_by_token_address' : IDL.Func(
        [IDL.Nat32, IDL.Text],
        [Result_6],
        ['query'],
      ),
    'remove_owner' : IDL.Func([IDL.Principal], [Result], []),
    'set_canister_addr' : IDL.Func([], [Result_5], []),
    'set_chain' : IDL.Func([IDL.Nat32, IDL.Text], [Result], []),
    'set_nonce' : IDL.Func([IDL.Nat64], [Result], []),
    'set_omnic' : IDL.Func([IDL.Principal], [Result], []),
    'transfer' : IDL.Func(
        [IDL.Nat64, IDL.Nat32, IDL.Text, IDL.Nat64],
        [Result_5],
        [],
      ),
    'transfer_native' : IDL.Func(
        [IDL.Nat32, IDL.Nat32, IDL.Text, IDL.Nat64],
        [Result_5],
        [],
      ),
    'update_supported_tokens' : IDL.Func([IDL.Nat64, Token], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
