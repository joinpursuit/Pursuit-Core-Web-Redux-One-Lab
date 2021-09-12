import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY,
  RESET,
  INCREMENT_IF_EVEN,
} from "../actions/actionTypes";

export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_BY:
      return state + action.amount;
    case INCREMENT_IF_EVEN:
      return state % 2 === 0 ? state + 1 : state;
    case RESET:
      return 0;
    default:
      return state;
  }
}
