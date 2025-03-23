import { all } from 'redux-saga/effects';

import ColorsSaga from './ColorsSaga';

export default function* RootSaga(): Generator {
  yield all([ColorsSaga()]);
}
