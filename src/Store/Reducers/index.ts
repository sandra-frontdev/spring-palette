import { combineReducers } from 'redux';
import ColorsReducer from './ColorsReducer';
import { ColorsState } from 'Interfaces';

export interface RootState {
  colors: ColorsState;
}

const RootReducer = combineReducers({
  colors: ColorsReducer
});

export default RootReducer;