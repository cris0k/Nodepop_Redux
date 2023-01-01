import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, ADVERTS_LOADED, UI_RESET_ERROR} from './types';

const defaultState = {
  auth: false,
  adverts: [],
  ui: {
    isLoading: false,
    error: null
   }
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function adverts(state = defaultState.adverts, action) {
  if (action.type === ADVERTS_LOADED) {
    return action.payload;
  }
  return state;
}

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return {
      isLoading: false,
      error: action.payload
    }
  }
  if (/_REQUEST$/.test(action.type)) {
    return {
      error: null,
      isLoading: true,
    };
  }
  if (/_SUCCESS$/.test(action.type)) {
    return {
      error: null,
      isLoading: false,
    };
  }
  if (action.type === UI_RESET_ERROR) {
    return {
      ...state,
      error: null,
    };
  }
  return state;
}