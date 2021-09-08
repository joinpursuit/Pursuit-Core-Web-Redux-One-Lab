import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, resetCount } from "../actions/counterActions"

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount())
  };

  const onIncrement = () => {
    dispatch(incrementCount())
  };

  const onReset = () => {
    dispatch(resetCount())
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
      </p>
    </div>
  );
};

export default Counter;
