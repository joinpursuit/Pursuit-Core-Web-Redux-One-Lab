import {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
  RESET,
} from "../actions/actionTypes";

export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    case INCREMENT_BY:
      return state + action.amount;
    case INCREMENT_IF_EVEN:
      return state + ((state + 1) % 2);
    case RESET:
      return 0;
    default:
      return state;
  }
}
