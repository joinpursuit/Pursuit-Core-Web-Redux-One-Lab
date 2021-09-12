import React from "react";
import { decrementCount, incrementCount, reset} from "../actions/counterActions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount());
  };
  const onIncrement = () => {
    dispatch(incrementCount());
  };
  const resetFunction = () => {
    dispatch(reset())
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={resetFunction}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
