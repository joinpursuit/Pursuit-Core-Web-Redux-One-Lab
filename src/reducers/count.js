import { DECREMENT, INCREMENT, INCREMENT_BY, INCREMENT_IF_EVEN, RESET } from "../actions/actionTypes";


export default function reduceCount(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return state = 0;
    case INCREMENT_IF_EVEN:
      if(state % 2 === 0) {
        return state + 1;
      } else {
        return state
      }
    case INCREMENT_BY:
      return state + action.amount;
    default:
      return state;
  }
}
