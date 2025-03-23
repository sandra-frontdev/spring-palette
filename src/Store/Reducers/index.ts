import { combineReducers, Reducer, CombinedState } from 'redux';
import * as type from 'Store/types';
import ColorsReducer from './ColorsReducer';

export type RootState = {
  colors: any;
};

const RootReducer: Reducer<CombinedState<RootState>> = (state, action) => {
  const appReducer = combineReducers<RootState>({
    colors: ColorsReducer,
  });

  return appReducer(state, action);
};

export default RootReducer;
