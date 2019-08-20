import { combineReducers } from 'redux'
import common from './common'
import home from './home'

const rootReducers = combineReducers({
  common,
  home
});

export default rootReducers;