import { createSelector } from 'reselect';

import { UserState } from 'types/user';

export const selectUserReducer = (state: any): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser,
);
