import * as type from './../type.js';

const initialState = {
  index_entry: [],  // 食品分类列表
  merchant_list: []   // 商铺列表
};

const home = (state = initialState, action)=> {
  switch(action.type) {
    case type.GET_INDEX_ENTRY:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        index_entry: action.index_entry
      });
    case type.GET_MERCHANT_LIST:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        merchant_list: action.merchant_list
      });
    // default的情况下返回旧的state
    default:
      return state;
  }
}

export default home;