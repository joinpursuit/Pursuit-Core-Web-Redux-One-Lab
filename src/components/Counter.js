import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementBy,
  incrementCount,
  incrementIfEven,
  resetCount,
} from "../actions/counterActions";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount());
  };
  const onIncrement = () => {
    dispatch(incrementCount());
  };

  const incrBy = () => {
    dispatch(incrementBy(Number(amount)));
  };

  const ifEven = () => {
    dispatch(incrementIfEven());
  };

  const onReset = () => {
    dispatch(resetCount());
  };

  const handleNum = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={ifEven}>+ if even</button>
        <button onClick={onReset}>reset</button>
        <label htmlFor="num_check">Num:</label>
        <input id="num_check" onChange={handleNum} type="number" value={amount} />
        <button onClick={incrBy}>+ by</button>
      </p>
    </div>
  );
};

export default Counter;
