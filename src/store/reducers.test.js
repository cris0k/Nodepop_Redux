import { authLogin, authLogout } from './actions'
import { auth } from './reducers'

describe('auth',()=>{
    test('should manage "AUTH_LOGIN" action', ()=>{
        const state = true
        const action = authLogin()
        const result= auth(state, action)
        expect(result).toBe(true)
    })
    test('should manage "AUTH_LOGOUT" action', ()=>{
        const state = false
        const action = authLogout()
        const result= auth(state, action)
        expect(result).toBe(false)
    })
})