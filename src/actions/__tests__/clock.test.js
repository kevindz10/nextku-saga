import { startClock, tickClock } from '../clock'
import { actionTypes } from '../index'

// Clock
describe('Clock actions creators working properly', () => {
  // Start clock
  it('Start clock', () => {
    const action = startClock()
    expect(action.type).toBe(actionTypes.START_CLOCK)
  })

  // Tick clock
  describe('Tick clock', () => {
    // Tick clock server-side
    it('Server-side', () => {
      const isServer = true
      const action = tickClock(isServer)
      expect(action.type).toBe(actionTypes.TICK_CLOCK)
      expect(action.light).toBe(!isServer)
    })

    // Tick clock client-side
    it('Client-side', () => {
      const isServer = false
      const action = tickClock(isServer)
      expect(action.type).toBe(actionTypes.TICK_CLOCK)
      expect(action.light).toBe(!isServer)
    })
  })
})
