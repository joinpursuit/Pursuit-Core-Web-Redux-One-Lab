import {
  DECREMENT,
  INCREMENT,
  RESET,
  INCREMENT_IF_EVEN,
  INCREMENT_BY
} from './actionTypes'

export const decrementCount = () => {
  return { type: DECREMENT }
}

export const incrementCount = () => {
  return { type: INCREMENT }
}
export const resetCount = () => {
  return { type: RESET }
}
export const incrementIfEvenCount = () => {
  return { type: INCREMENT_IF_EVEN }
}
export const incrementByCount = number => {
  return { type: INCREMENT_BY, number: Number(number) }
}
