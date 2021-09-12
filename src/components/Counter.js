import React, {useState} from "react";
import { incrementCount, decrementCount, reset, incrementBY, incrementIfEven } from "../actions/counterActions"
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  const [num, setNum] = useState(0)

  const onDecrement = () => {
    dispatch(decrementCount())
  };
  const onIncrement = () => {
    dispatch(incrementCount())
  };

  const incrementByNumber = (e) => {
    e.preventDefault();
    dispatch(incrementBY(Number(num)))
  }

  const incrementIfEvenNumber = () => {

    dispatch(incrementIfEven())
  }

  const resetScore = () => {
    dispatch(reset())
  }

  const handleChange = (e)=>{
    setNum(e.target.value)
  }


  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={resetScore}>reset</button>
        <button onClick={incrementIfEvenNumber}>+ if even</button>
      </p>
      <form onSubmit={incrementByNumber}>
        <input type="number" value={num} onChange={handleChange}></input>
        <button>Increase By ...</button>
      </form>
    </div>
  );
};

export default Counter;
