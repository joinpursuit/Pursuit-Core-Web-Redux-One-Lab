import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	incrementCount,
	decrementCount,
	resetCount,
	evenCount,
	incrementByCount,
} from "../actions/counterActions";

const Counter = () => {
	const dispatch = useDispatch();
	const { count } = useSelector((state) => state);

	const onDecrement = useSelector((state) => state.decrementCount);
	const onIncrement = useSelector((state) => state.incrementCount);
	const onInput = useSelector((state) => state.incrementByCount);

	const even = count % 2 === 0 ? onEven : count;

	const onEven = useSelector((state) => state.evenCount);

	return (
		<div>
			<p>count: {count ? onIncrement : onDecrement}</p>
			<p>
				<button onClick={() => dispatch(incrementCount())}>+</button>
				<button onClick={() => dispatch(decrementCount())}>-</button>
				<button onClick={() => dispatch(resetCount())}>reset</button>

				<button onClick={() => dispatch(onEven())}>+ if even</button>
				<input
					onChange={({ target }) => dispatch(incrementByCount(target.value))}
					value={count}
				/>
			</p>
		</div>
	);
};

export default Counter;
