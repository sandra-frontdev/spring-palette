import { ActionType } from 'Interfaces';
import { ColorsState } from 'Interfaces/ColorsType';
import * as TYPES from 'Store/types';

const initialState: ColorsState = {
    colors: [],
    loading: false,
    error: undefined,
};

const ColorsReducer = (
    state: ColorsState = initialState,
    action: ActionType<any>
): ColorsState => {
    switch (action.type) {
        case TYPES.colors.get.requested:
        case TYPES.colors.saveColor.requested:
        case TYPES.colors.deleteColor.requested:
            return { ...state, loading: true, error: undefined };
        case TYPES.colors.get.succeeded:
            return { ...state, colors: action.payload, loading: false };
        case TYPES.colors.saveColor.succeeded:
            return {
                ...state,
                loading: false,
                colors: [...state.colors, action.payload],
            };
        case TYPES.colors.deleteColor.succeeded:
            return {
                ...state,
                loading: false,
                colors: state.colors.filter((color) => color.id !== action.payload),
            };
        case TYPES.colors.get.failed:
        case TYPES.colors.saveColor.failed:
        case TYPES.colors.deleteColor.failed:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default ColorsReducer;
