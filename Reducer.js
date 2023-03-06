import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './ActionType';

const initialStateData = {
    count: 0
  };
  
 export const counterReducer = (state = initialStateData, action) => {
    switch (action.type) {
      case INCREMENT_COUNTER:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNTER:
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
  };
