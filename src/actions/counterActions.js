import { DECREMENT, INCREMENT, RESET, INCREMENT_BY, INCREMENT_IF_EVEN } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const reset = () =>{
  return {type: RESET} 
}

export const incrementBY = (amount) =>{
  return {type: INCREMENT_BY, amount}
}

export const incrementIfEven = () =>{
  return {type: INCREMENT_IF_EVEN}
}
