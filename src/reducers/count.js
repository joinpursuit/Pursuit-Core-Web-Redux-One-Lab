import {
	DECREMENT,
	INCREMENT,
	INCREMENT_BY,
	INCREMENT_IF_EVEN,
	RESET,
} from "../actions/actionTypes";

const countReducer = (state = 0, action) => {
	switch (action.type) {
		case DECREMENT:
			return state - 1;
		case INCREMENT:
			return state + 1;
		case RESET:
			return 0;
		case INCREMENT_BY:
			return state + action.amount;
		case INCREMENT_IF_EVEN:
			return state % 2 === 0 ? state + 1 : state;
		default:
			return state;
	}
};
export default countReducer;
