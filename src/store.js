import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducers/root-reducers';

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

