import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from '../store/reducers/categories/categories.saga';
import { userSagas } from '../store/reducers/user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
