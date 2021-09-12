import React from "react";
import { incrementCount, decrementCount, reset, incrementBY, incrementIfEven } from "../actions/counterActions"
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount())
  };
  const onIncrement = () => {
    dispatch(incrementCount())
  };

  const incrementByNumber = () => {
    dispatch(incrementBY())
  }

  const incrementIfEvenNumber = () => {
    dispatch(incrementIfEven())
  }

  const resetScore = () => {
    dispatch(reset())
  }


  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={resetScore}>reset</button>
        <button onClick={incrementIfEvenNumber}>increment if even</button>
      </p>
      <form>
        <input type="number"></input>
        <button onClick={incrementByNumber}>INCREMENT BY THIS NUMBER</button>
      </form>
    </div>
  );
};

export default Counter;
