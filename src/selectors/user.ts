import { createSelector } from 'reselect';

import { UserState } from 'types/user';
import { RootState } from 'types/store';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.currentUser,
);
