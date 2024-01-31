import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './reducers/categories/categories.saga';
import { userSaga } from './reducers/user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
