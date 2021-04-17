import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrementCount,
  incrementByCount,
  incrementCount,
  incrementIfEvenCount,
  resetCount,
} from "../actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => dispatch(decrementCount());
  const onIncrement = () => dispatch(incrementCount());
  const onIncrementBy = (amount) => dispatch(incrementByCount(amount));
  const onIncrementIfEven = () => dispatch(incrementIfEvenCount());
  const onReset = () => dispatch(resetCount());

  const [amount, setAmount] = useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>reset</button>
      </p>
      <p>
        <button onClick={onIncrementIfEven}>+ if even</button>
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ amount })
          onIncrementBy(amount);
        }}
      >
        <input onChange={(event) => setAmount(parseFloat(event.target.value))} name="amount" type="number" value={amount} />
        <button type="submit">+ by</button>
      </form>
    </div>
  );
};

export default Counter;
