import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementByAmountCount,
  incrementCount,
  incrementIfEvenCount,
  resetCount,
} from "../actions/counterActions";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const { reduceCount } = useSelector((state) => state);

  const onDecrement = () => {
    console.log("minus", decrementCount());
    dispatch(decrementCount());
  };
  const onIncrement = () => {
    console.log("plus");
    dispatch(incrementCount());
  };

  const onReset = () => {
    dispatch(resetCount());
  };

  const onIncrementIfEven = () => {
    dispatch(incrementIfEvenCount());
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const onIncrementByAmount = () => {
    dispatch(incrementByAmountCount(amount));
  };

  return (
    <div>
      <p>count: {reduceCount}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrementIfEven}>+ if even</button>
      </p>
      <div>
        <input value={amount} onChange={handleAmount} />
        <button onClick={onIncrementByAmount}>+ by</button>
      </div>
      <button onClick={onReset}>reset</button>
    </div>
  );
};

export default Counter;
