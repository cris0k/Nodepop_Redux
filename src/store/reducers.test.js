import { authLogin, authLogout, userLoginData } from './actions'
import { auth, user } from './reducers'

describe('auth',()=>{
    test('should manage "AUTH_LOGIN_SUCCESS" action', ()=>{
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
describe('user', ()=>{
    test('should manage "LOGIN_DATA_SUCCESS" action',()=>{
        const state = 'user'
        const action = userLoginData()
        const result = user(state,action)
        expect(result).toBe('user')
    })
})