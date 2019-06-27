import { increment, decrement, reset } from '../counter'
import { actionTypes } from '../index'

// Counter
describe('Counter actions creators working properly', () => {
  // Increment
  it('Increment', () => {
    const action = increment()
    expect(action.type).toBe(actionTypes.INCREMENT)
  })

  // Decrement
  it('Decrement', () => {
    const action = decrement()
    expect(action.type).toBe(actionTypes.DECREMENT)
  })

  // Reset
  it('Reset', () => {
    const action = reset()
    expect(action.type).toBe(actionTypes.RESET)
  })
})
