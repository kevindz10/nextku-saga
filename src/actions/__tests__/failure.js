import { actionTypes, failure } from '../index'

// Failure
describe('Failure actions creators working properly', () => {
  // Success
  it('Success', () => {
    const action = failure(true)
    expect(action.type).toBe(actionTypes.FAILURE)
    expect(action.error).toBeTruthy()
  })

  // Failure
  it('Failure', () => {
    const action = failure(false)
    expect(action.type).toBe(actionTypes.FAILURE)
    expect(action.error).toBeFalsy()
  })
})
