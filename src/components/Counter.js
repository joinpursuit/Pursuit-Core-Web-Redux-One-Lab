import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementCount,
  incrementCount,
  resetCount,
  incrementIfEvenCount,
  incrementByCount
} from '../actions/counterActions'

const Counter = () => {
  const [number, setNumber] = React.useState(0)

  const dispatch = useDispatch()
  const { count } = useSelector(state => state)

  const onDecrement = () => dispatch(decrementCount())
  const onIncrement = () => dispatch(incrementCount())
  const onReset = () => dispatch(resetCount())
  const onEven = () => dispatch(incrementIfEvenCount())

  const handleChange = e => {
    setNumber(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(incrementByCount(number))
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={() => onIncrement()}>+</button>
        <button onClick={() => onDecrement()}>-</button>
        <button onClick={() => onReset()}>reset</button>
        <button onClick={() => onEven()}>+ if even</button>
      </p>
      <form onSubmit={handleSubmit}>
        <input type='number' name='count' onChange={handleChange} />
        <button type='submit'>+ by</button>
      </form>
    </div>
  )
}

export default Counter
