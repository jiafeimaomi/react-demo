import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';

import toDoApp from './modules/toDoApp';
import toTest from './modules/toTest';

const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux

const reducer = combineReducers({
  toDoApp,
  toTest
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;