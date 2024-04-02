import { all, call } from 'typed-redux-saga/macro';

import { categoriesSaga } from './categories';
import { userSagas } from './user';

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSagas)]);
}
