import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const initialState = {};

const middleWear = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWear),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;