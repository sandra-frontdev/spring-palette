import { ActionType } from 'Interfaces';
import * as type from '../types';

export const getColors = (): ActionType<undefined> => {
  return {
    type: type.colors.get.requested,
  };
};

export const setColorList = (colors: any[]): ActionType<any[]> => {
  return {
    type: type.colors.setColorList.requested,
    payload: colors,
  };
};

export const saveColors = (colors: any[]): ActionType<any[]> => {
  return {
    type: type.colors.saveColors.requested,
    payload: colors,
  };
};
