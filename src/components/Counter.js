import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrementCount, incrementCount} from '../actions/counterActions'


const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => dispatch(decrementCount());
  const onIncrement = () => dispatch(incrementCount());

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={()=>onIncrement()}>+</button>
        <button onClick={()=>onDecrement()}>-</button>
      </p>
    </div>
  );
};

export default Counter;
