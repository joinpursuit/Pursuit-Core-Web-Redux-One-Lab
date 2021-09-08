import { DECREMENT, INCREMENT, RESET, INCREMENT_IF_EVEN, INCREMENT_BY } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};

export const incrementEvenCount = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const incrementByCount = (increasedBy) => {
  return { type: INCREMENT_BY, increasedBy };
};
