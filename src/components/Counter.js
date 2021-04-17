import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {};
  const onIncrement = () => {};

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    </div>
  );
};

export default Counter;
