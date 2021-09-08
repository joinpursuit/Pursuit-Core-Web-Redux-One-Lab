import {
  DECREMENT,
  INCREMENT,
  RESET,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
} from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const resetCount = () => {
  return { type: RESET };
};

export const incrementCountBy = (amount) => {
  return {
    type: INCREMENT_BY,
    amount: Number(amount),
  };
};

export const incrementCountIfEven = (incrementEven) => {
  return {
    type: INCREMENT_IF_EVEN,
    incrementEven: Number(incrementEven),
  };
};
