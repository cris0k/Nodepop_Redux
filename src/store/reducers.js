import { 
  AUTH_LOGIN_SUCCESS, 
  AUTH_LOGOUT, 
  ADVERTS_LOADED_SUCCESS, 
  UI_RESET_ERROR,
  DETAILS_LOADED_SUCCESS,
  ADVERT_CREATED_SUCCESS} 
  from './types';

export const defaultState = {
  auth: false,
  adverts: {
    areLoaded: false,
    data: [],
  },
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
  if (action.type === ADVERTS_LOADED_SUCCESS) {
    return { areLoaded:true, data: action.payload};
  }
  if (action.type === DETAILS_LOADED_SUCCESS){
    return {...state, data: [action.payload]}
  }
  if (action.type === ADVERT_CREATED_SUCCESS) {
    return { ...state, data: [action.payload, ...state.data] };
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