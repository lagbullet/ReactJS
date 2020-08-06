import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from './reducers/CardsReducer';
import authorizationReducer from './reducers/AuthorizationReducer';
import logger from '../loggger';

const reducers = combineReducers({
  cards: cardsReducer,
  auth: authorizationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
