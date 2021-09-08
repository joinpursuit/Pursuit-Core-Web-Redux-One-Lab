import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
  incrementCountBy,
  incrementCountIfEven,
} from "../actions/counterActions";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const amountTarget = (e) => {
    setAmount(e.target.value);
  };

  const dispatch = useDispatch();
  const { reduceCount } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount());
  };
  const onIncrement = () => {
    dispatch(incrementCount());
  };

  const onReset = () => {
    dispatch(resetCount());
  };

  const onIncrementBy = () => {
    dispatch(incrementCountBy(amount));
  };

  const onIncrementIfEven = () => {
    dispatch(incrementCountIfEven());
  };

  return (
    <div>
      <p>count: {reduceCount}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
        <input type="number" value={amount} onChange={amountTarget} />
        <button onClick={onIncrementBy}>+ by</button>
        <button onClick={onIncrementIfEven}>+ if even</button>
      </p>
    </div>
  );
};

export default Counter;
