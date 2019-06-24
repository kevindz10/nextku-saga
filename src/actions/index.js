export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export { startClock, tickClock } from './clock'
export { reset, increment, decrement } from './counter'
