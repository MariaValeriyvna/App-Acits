import { AnyAction, Reducer } from 'redux';
import { UPDATE_ANIMALS, UPDATE_TODAY } from './actions';
import { initialState, RootState } from './store';

export const rootReducer: Reducer<RootState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_ANIMALS:
      return {
        ...state,
        animals: action.animals
      };
    case UPDATE_TODAY:
      return {
        ...state,
        today: action.today
      };
    
    default:
      return state;
  }
};
