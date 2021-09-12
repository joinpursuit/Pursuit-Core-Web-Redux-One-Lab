import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
  RESET,
} from "../actions/actionTypes";

export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      return --state;
    case INCREMENT:
      return ++state;
    case INCREMENT_BY:
      return Number((state = state + action.amount));
    case INCREMENT_IF_EVEN:
      if (state % 2 === 0) {
        return ++state;
      } else {
        return state;
      }
    case RESET:
      return (state = 0);
    default:
      return state;
  }
}
