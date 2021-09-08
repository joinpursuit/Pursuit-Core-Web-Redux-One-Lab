export default function reduceCount (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    case 'INCREMENT_IF_EVEN':
      return state + !(state % 2)
    case 'INCREMENT_BY':
      return state + action.number
    default:
      return state
  }
}
