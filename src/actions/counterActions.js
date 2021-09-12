import { DECREMENT, INCREMENT, INCREMENT_BY, INCREMENT_IF_EVEN, RESET } from "./actionTypes";


export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const incrementBy = (amount) => {
  return { type: INCREMENT_BY, amount};
};

export const incrementIfEven = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const resetCount = () => {
  return { type: RESET };
};
