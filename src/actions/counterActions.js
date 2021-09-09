import {
  INCREMENT,
  DECREMENT,
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

export const incrementCountBy = (amount) => {
  return { type: INCREMENT_BY, amount: Number(amount) };
};

export const incrementCountifEven = (incrementEvent) => {
  return { type: INCREMENT_IF_EVEN, incrementEvent: Number(incrementEvent) };
};

export const resetCount = () => {
  return { type: RESET };
};
