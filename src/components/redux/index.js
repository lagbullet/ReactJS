import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/CardsReducer';
import logger from '../loggger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
