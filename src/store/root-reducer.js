import { combineReducers } from 'redux';

import { userReducer, categoriesReducer } from './reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
