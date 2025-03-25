import { ActionType } from 'Interfaces';
import * as TYPES from '../types';
import { Color } from 'Interfaces/ColorsType';

export const getColors = () => ({
  type: TYPES.colors.get.requested,
});

export const saveColor = (
  colorName: string,
  colorHex: string
): ActionType<Omit<Color, 'id'>> => ({
  type: TYPES.colors.saveColor.requested,
  payload: { colorName, colorHex },
});

export const deleteColor = (colorId: string): ActionType<string> => ({
  type: TYPES.colors.deleteColor.requested,
  payload: colorId,
});
