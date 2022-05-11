import * as type from './../type.js';

const initialState = {
  guessCity: {},
  activeFooter: 'elm',
  title: '饿了么',
  tabLevel: 1
};

const common = (state = initialState, action)=> {
  switch(action.type) {
    case type.GET_GUESS_CITY:
      // {}是保证不直接修改state,新建一个副本并把源对象复制到state中。
      return Object.assign({}, state, {
        guessCity: action.guessCity
      })
    case type.CHANGE_FOOTER_SELECT:
        return Object.assign({}, state, {
          activeFooter: action.activeFooter,
          title: action.title
        })
    case type.CHANGE_TAB_LEVEL:
      return Object.assign({}, state, {
        tabLevel: action.tabLevel
      })
    // default的情况下返回旧的state
    default:
      return state;
  }
}

export default common;