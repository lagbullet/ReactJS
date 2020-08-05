import * as types from '../actions/types';

const initialState = JSON.parse(localStorage.getItem('authData')) || {
  loggedIn: false,
  currentUser: undefined,
  isAdmin: false,
};

const authorizationReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.LOG_IN:
      newState = {
        loggedIn: true,
        currentUser: action.username,
        isAdmin: action.username === 'testAdmin@gmail.com' && action.password === '12345yuiopp',
      };
      localStorage.setItem('authData', JSON.stringify(newState));
      return newState;
    case types.LOG_OUT:
      newState = {
        loggedIn: false,
        currentUser: undefined,
        isAdmin: false,
      };
      localStorage.setItem('authData', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default authorizationReducer;
