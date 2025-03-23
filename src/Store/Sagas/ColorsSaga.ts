import { ActionType } from 'Interfaces';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { API } from 'Services/API/API';
import * as type from 'Store/types';

function* getColors(action: ActionType<string | undefined>) {
  const { response, error } = yield call(API.get, `/colors`);
  if (response) {
    yield put({
      type: type.colors.get.succeeded,
      payload: response.data,
    });
  } else {
    yield put({ type: type.colors.get.failed, error });
  }
}

export default function* ColorsSaga(): Generator {
  yield all([takeLatest(type.colors.get.requested, getColors)]);
}
