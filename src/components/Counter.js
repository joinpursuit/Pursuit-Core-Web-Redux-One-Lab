import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementCount,
	decrementCount,
	resetCount,
	evenCount,
	inputCounter,
} from "../actions/counterActions";

const Counter = () => {
	const dispatch = useDispatch();
	const { count } = useSelector((state) => state);

	const onDecrement = useSelector((state) => state.decrementCount);
	const onIncrement = useSelector((state) => state.incrementCount);
	
	

	return (
		<div>
			<p>count: {count ? onIncrement : onDecrement}</p>
			<p>
				<button onClick={() => dispatch(incrementCount())}>+</button>
				<button onClick={() => dispatch(decrementCount())}>-</button>
				<button onClick={() => dispatch(resetCount())}>reset</button>
				<button onClick={() => dispatch(evenCount())}>+ if even</button>
				<input
					onChange={({target}) => dispatch(inputCounter((Number(target.value))))}
					value={count}
          type= "number"
				/>
			</p>
		</div>
	);
};

export default Counter;
