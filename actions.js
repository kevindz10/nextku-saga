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

export function increment () {
  return { type: actionTypes.INCREMENT }
}

export function decrement () {
  return { type: actionTypes.DECREMENT }
}

export function reset () {
  return { type: actionTypes.RESET }
}

export function startClock () {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock (isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}
