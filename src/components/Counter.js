import React, { useState } from "react";
import { decrementCount, incrementCount, reset, incrementBy, incrementIfEven } from "../actions/counterActions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [num, setNum] = useState(0)
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
  const ifEven = () => {
   dispatch(incrementIfEven())
  }

  const addByAmount = (e) => {
    e.preventDefault()
    dispatch(incrementBy(num))
  }

  const handleChange = (e) => {
    setNum(e.target.value)
  
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement }>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={ifEven}>+</button>
        <form onSubmit={addByAmount}>
          <input value={num} type='number' onChange={handleChange} />
        <button type="submit">submit</button>
        </form>
        <button onClick={resetFunction}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
