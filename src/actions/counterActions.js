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

export const incrementBY = () =>{
  return {type: INCREMENT_BY}
}

export const incrementIfEven = () =>{
  return {type: INCREMENT_IF_EVEN}
}
