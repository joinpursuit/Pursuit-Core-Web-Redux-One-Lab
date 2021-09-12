import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
  RESET,
} from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const reset = () => {
  return { type: RESET };
};

export const incrementOnEven = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const incrementByInputValue = (number) => {
  return { type: INCREMENT_BY, amount: number };
};
