import { combineReducers } from 'redux';

import { cartReducer, categoriesReducer } from 'reducers/index';

import { userReducer } from './reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
