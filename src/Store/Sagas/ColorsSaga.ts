import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SaveColorAction } from 'Interfaces';
import * as type from 'Store/types';
import {
  deleteColorFromFirebase,
  getColorsFromFirebase,
  saveColorToFirebase,
} from 'Services/API/Firebase/firebaseService';

function* getColors(): Generator {
  try {
    const colorsList = yield call(getColorsFromFirebase);
    yield put({
      type: type.colors.get.succeeded,
      payload: colorsList,
    });
  } catch (error) {
    yield put({ type: type.colors.get.failed, payload: error });
  }
}

function* saveColor(action: SaveColorAction) {
  try {
    const { colorName, colorHex } = action.payload;
    yield call(saveColorToFirebase, colorName, colorHex);
    yield put({
      type: type.colors.saveColor.succeeded,
      payload: { colorName, colorHex },
    });
  } catch (error) {
    yield put({ type: type.colors.saveColor.failed, payload: error });
  }
}

function* deleteColor(action: { type: string; payload: string }) {
  try {
    const { payload: colorId } = action;
    yield call(deleteColorFromFirebase, colorId);
    yield put({ type: type.colors.deleteColor.succeeded, payload: colorId });
  } catch (error) {
    yield put({ type: type.colors.deleteColor.failed, payload: error });
  }
}

export default function* ColorsSaga(): Generator {
  yield all([
    takeLatest(type.colors.get.requested, getColors),
    takeLatest(type.colors.saveColor.requested, saveColor),
    takeLatest(type.colors.deleteColor.requested, deleteColor),
  ]);
}
