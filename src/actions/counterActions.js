import { DECREMENT, INCREMENT, INCREMENT_BY, INCREMENT_IF_EVEN, RESET } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const incrementByCount = (amount) => {
  return { amount, type: INCREMENT_BY };
};

export const incrementIfEvenCount = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const resetCount = () => {
  return { type: RESET };
};
