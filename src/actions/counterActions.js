import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};