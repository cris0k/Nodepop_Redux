import { advertsLoaded } from './actions'
import { ADVERTS_LOADED } from './types'

test('should return a "ADVERTS_LOADED" action',()=>{
    const adverts = 'adverts'
    const expectedAction = {
        type: ADVERTS_LOADED,
        payload: adverts
    }
    const action = advertsLoaded(adverts)
    expect(action).toEqual(expectedAction)
})