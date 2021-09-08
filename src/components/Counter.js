import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount, resetCount, incrementEvenCount, incrementByCount } from "../actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  const [customIncrement, setCustomIncrement] = useState("");

  const onDecrement = () => { dispatch(decrementCount()) };
  const onIncrement = () => { dispatch(incrementCount()) };
  const onReset = () => { dispatch(resetCount()) };
  const onIncrementEven = () => { dispatch(incrementEvenCount()) };
  const onIncrementBy = (e) => {
    e.preventDefault();
    dispatch(incrementByCount(customIncrement));
    setCustomIncrement("");
  };
  const handleChange = (e) => {
    setCustomIncrement(Number(e.target.value));
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
      <p>
        <button onClick={onReset}>reset</button><br />
        <button onClick={onIncrementEven}>+ if even</button><br />
        <form onSubmit={onIncrementBy}>
          <input type="number" value={customIncrement} onChange={handleChange} required />
          <button>+ by</button>
        </form>
      </p>
    </div>
  );
};

export default Counter;
