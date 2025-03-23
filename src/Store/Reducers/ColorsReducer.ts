import { ActionType } from 'Interfaces';
import * as type from 'Store/types';

const initialState: any = {
  colors: [],
  loading: false,
  error: undefined,
};

const AssessmentsReducer = (
  state: any = initialState,
  action: ActionType<string>
): any => {
  switch (action.type) {
    case type.colors.get.requested:
      return {
        ...state,
        companyConsentGranted: false,
      };

    case type.colors.get.succeeded:
      return {
        ...state,
        languageTests: action.payload as any,
        loading: false,
        error: undefined,
      };

    case type.colors.get.failed:
      return {
        ...state,
        loading: false,
        error: action.payload as any,
      };

    default:
      return state;
  }
};

export default AssessmentsReducer;
