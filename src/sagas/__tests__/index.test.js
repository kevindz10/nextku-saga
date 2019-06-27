import { take, put, delay } from 'redux-saga/effects'
import { actionTypes, tickClock } from '../../actions'
import { runClockSaga } from '../index'

// Sagas
describe('Sagas working properly', () => {
  it('Run Clock', () => {
    const gen = runClockSaga()

    expect(gen.next().value).toEqual(take(actionTypes.START_CLOCK))
    expect(gen.next().value).toEqual(put(tickClock(false)))
    expect(gen.next().value).toEqual(delay(1000))
  })
})
