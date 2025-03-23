import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Sagas';
import RootReducer from './Reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(RootSaga);

export type AppDispatch = typeof store.dispatch;
export default store;
