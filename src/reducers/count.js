import { INCREMENT, DECREMENT, RESET, INCREMENT_BY, INCREMENT_IF_EVEN } from "../actions/actionTypes"

export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case INCREMENT_BY:
      return state + action.amount;
    case INCREMENT_IF_EVEN:
      return (state % 2) ? state : state + 1;
    default:
      return state;
  }
}