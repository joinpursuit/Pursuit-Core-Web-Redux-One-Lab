import countReducer from "./count";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
	decrementCount: countReducer,
	incrementCount: countReducer,
	resetCount: countReducer,
	evenCount: countReducer,
	inputerCounter: countReducer,
});

export default rootReducer;
