import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY,
  INCREMENT_IF_EVEN,
  RESET,
} from "../actions/actionTypes";
import reduceCount from "./count";

describe("reduceCount", () => {
  it.each([
    [0, { type: DECREMENT }, -1],
    [2, { type: DECREMENT }, 1],
    [0, { type: INCREMENT }, 1],
    [2, { type: INCREMENT }, 3],
    [0, { amount: 3, type: INCREMENT_BY }, 3],
    [4, { amount: 5, type: INCREMENT_BY }, 9],
    [0, { type: INCREMENT_IF_EVEN }, 1],
    [1, { type: INCREMENT_IF_EVEN }, 1],
    [2, { type: INCREMENT_IF_EVEN }, 3],
    [0, { type: RESET }, 0],
    [10, { type: RESET }, 0],
  ])(`changes %d with %o to %d`, (state, action, expected) => {
    const result = reduceCount(state, action);

    expect(result).toBe(expected);
  });
});
