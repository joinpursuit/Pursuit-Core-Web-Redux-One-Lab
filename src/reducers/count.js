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
			return (state -= 1);
		case INCREMENT:
			return (state += 1);
		case RESET:
			return (state = 0);
		case INCREMENT_BY:
			return (state = action.payload);
		case INCREMENT_IF_EVEN:
			return (state += 1);
		default:
			return state;
	}
};
export default countReducer;
