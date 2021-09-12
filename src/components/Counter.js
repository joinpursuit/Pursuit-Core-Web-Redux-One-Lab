import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  reset,
  incrementOnEven,
  incrementByInputValue,
} from "../actions/counterActions";

const Counter = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(incrementByInputValue(inputValue));
  };

  const onDecrement = () => {
    dispatch(decrementCount());
  };
  const onIncrement = () => {
    dispatch(incrementCount());
  };

  const onReset = () => {
    dispatch(reset());
  };

  const incrementOnEvenNum = () => {
    dispatch(incrementOnEven());
  };

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
        <button onClick={incrementOnEvenNum}>increment when even</button>
      </p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={inputValue} onChange={handleChange} />
        <button>increment by</button>
      </form>
    </div>
  );
};

export default Counter;
