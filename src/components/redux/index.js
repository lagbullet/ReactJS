import { createStore } from 'redux';

import reducer from './reducers/CardsReducer';

const store = createStore(reducer);

export default store;
