import { DECREMENT, INCREMENT,  } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};
