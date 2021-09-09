import React from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, incrementCountBy, incrementCountifEven, resetCount } from "../actions/counterActions";

const Counter = () => {

  const [amount, setAmount] = useState(0)

  const handleInput = (e) =>{
    const { value }  = e.target;
    setAmount(value)
  }

  const dispatch = useDispatch();
  const { reduceCount } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount())
  };
  const onIncrement = () => {
    dispatch(incrementCount())
  };
  const onIncrementBy = () => {
    dispatch(incrementCountBy(amount))
  };
  const onIncrementifEven = () => {
    dispatch(incrementCountifEven())
  };
  const onReset = () => {
    dispatch(resetCount())
  };

  return (
    <div>
      <p>count: {reduceCount}</p>
      <p>
        <input type="number" value={amount} onChange={handleInput}></input>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrementBy}>+ by</button>
        <button onClick={onIncrementifEven}>+ if even</button>
        <button onClick={onReset}>reset</button>
      </p>
    </div>
  );
};

export default Counter;
