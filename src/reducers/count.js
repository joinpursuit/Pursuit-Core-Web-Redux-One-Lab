import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
} from "../actions/actionTypes";

const reduceCount = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    case RESET:
      return 0;
    case INCREMENT_BY:
      return state + action.amount;
    case INCREMENT_IF_EVEN:
      if (state % 2 === 0) {
        return state + 1;
      }
      return state;
    default:
      return state;
  }
};

export default reduceCount;
