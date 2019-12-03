import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'

const middlewares = [logger]

const store = createStore()

export default store;
