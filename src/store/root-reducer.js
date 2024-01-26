import { combineReducers } from 'redux';

import { userReducer, categoriesReducer, cartReducer } from './reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
