import { advertsLoadedSuccess, authLogin, authLoginFailure, authLoginRequest, authLoginSuccess, loginDataSuccess} from './actions'
import { ADVERTS_LOADED_SUCCESS, LOGIN_DATA_SUCCESS } from './types'

test('should return a "ADVERTS_LOADED_SUCCESS" action',()=>{
    const adverts = 'adverts'
    const expectedAction = {
        type: ADVERTS_LOADED_SUCCESS,
        payload: adverts
    }
    const action = advertsLoadedSuccess(adverts)
    expect(action).toEqual(expectedAction)
})

test('should return a "LOGIN_DATA_SUCCESS" action',()=>{
    const userData = 'userData'
    const expectedAction = {
        type: LOGIN_DATA_SUCCESS,
        payload: userData
    }
    const action = loginDataSuccess(userData)
    expect(action).toEqual(expectedAction)
})

describe('authLogin',()=>{
    const credentials = 'credentials'
    const action = authLogin(credentials)
    const dispatch = jest.fn()
    const api = {
        auth:{}
    }
    describe('Login api resolves',()=>{
        test('should follow the login flow',async ()=>{
            api.auth.login = jest.fn().mockResolvedValue()
            await action(dispatch, undefined, {api});
            expect(dispatch).toHaveBeenNthCalledWith(1,authLoginRequest());
            expect(api.auth.login).toHaveBeenCalledWith(credentials);
            expect(dispatch).toHaveBeenNthCalledWith(2, authLoginSuccess());
        })
    })
    describe('Login api fails',()=>{
        const error = 'error';
        test('should follow the error flow', async () => {
            api.auth.login = jest.fn().mockRejectedValue(error);
            await action(dispatch, undefined, { api });
            expect(dispatch).toHaveBeenNthCalledWith(1, authLoginRequest());
            expect(dispatch).toHaveBeenNthCalledWith(2, authLoginFailure(error));
        });
    })
})
