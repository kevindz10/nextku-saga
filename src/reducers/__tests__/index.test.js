import { actionTypes } from '../../actions'
import reducer from '../index'

// Reducers
describe('Reducers working properly', () => {
  // Clock
  describe('Clock reducers', () => {
    it('Tick clock', () => {
      const ts = '1'
      const light = true
      const state = reducer(undefined, {
        type: actionTypes.TICK_CLOCK,
        ts,
        light
      })
      expect(state.lastUpdate).toBe('1')
      expect(state.light).toBe(!!light)
    })
  })

  // Counter
  describe('Counter reducers', () => {
    // Increment
    it('Increment', () => {
      const state = reducer(undefined, { type: actionTypes.INCREMENT })
      expect(state.count).toBe(1)
    })

    // Decrement
    it('Decrement', () => {
      const state = reducer(undefined, { type: actionTypes.DECREMENT })
      expect(state.count).toBe(-1)
    })

    // Reset
    it('Reset', () => {
      const state = reducer(undefined, { type: actionTypes.RESET })
      expect(state.count).toBe(0)
    })
  })

  // Failure
  it('Failure', () => {
    const state = reducer(undefined, {
      type: actionTypes.FAILURE,
      error: 'ERROR'
    })
    expect(state.error).toBe('ERROR')
  })
})
