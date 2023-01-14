import { areAdvertsLoaded, areTagsLoaded, getDetails} from './selectors';
import { 
  AUTH_LOGIN_SUCCESS, 
  AUTH_LOGOUT, 
  AUTH_LOGIN_REQUEST, 
  AUTH_LOGIN_FAILURE, 
  UI_RESET_ERROR, 
  ADVERTS_LOADED_REQUEST, 
  ADVERTS_LOADED_SUCCESS, 
  ADVERTS_LOADED_FAILURE, 
  DETAILS_LOADED_REQUEST, 
  DETAILS_LOADED_SUCCESS,
  DETAILS_LOADED_FAILURE,
  ADVERT_CREATED_REQUEST,
  ADVERT_CREATED_SUCCESS,
  ADVERT_CREATED_FAILURE,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_SUCCESS,
  ADVERT_DELETE_FAILURE,
  TAGS_LOAD_REQUEST,
  TAGS_LOAD_FAILURE,
  TAGS_LOAD_SUCCESS} 
  from './types';

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginSuccess = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLoginFailure = error => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
  error: true,
});

export const authLogin = credentials => {
  return async function(dispatch, getState, { api }){
    try {
      dispatch(authLoginRequest())
      await api.auth.login(credentials)
      dispatch(authLoginSuccess())

    } catch (error) {
      dispatch(authLoginFailure(error))
      
    }
  }
}

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT,
});

export const authLogout = () => {
  return async function (dispatch, getState, { api }) {
    await api.auth.logout();
    dispatch(authLogoutSuccess());
  };
};

export const advertsLoadedRequest = () => ({
  type: ADVERTS_LOADED_REQUEST
  
});
export const advertsLoadedSuccess = adverts => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});
export const advertsLoadedFailure = error => ({
  type: ADVERTS_LOADED_FAILURE,
  payload: error,
  error: true
});
export const advertsLoad = () =>{
  return async function(dispatch,getState,{ api }){
    
    const areLoaded = areAdvertsLoaded(getState()) 
    if (areLoaded) return ;//if storedAdverts = true it'll get the adverts in state,else try/catch
    
    try {
      dispatch(advertsLoadedRequest())
      const adverts = await api.adverts.getAdverts()
      dispatch(advertsLoadedSuccess(adverts))
    } catch (error) {
      dispatch(advertsLoadedFailure(error))
    }
  }
}

export const detailsLoadedRequest = () => ({
  type: DETAILS_LOADED_REQUEST
  
});
export const detailsLoadedSuccess = advert => ({
  type: DETAILS_LOADED_SUCCESS,
  payload: advert,
});
export const detailsLoadedFailure = error => ({
  type: DETAILS_LOADED_FAILURE,
  payload: error,
  error: true
});

export const detailsLoad = advertId =>{
  return async function(dispatch,getState,{ api }){
    
    const isLoaded = getDetails(advertId)(getState()) 
    if (isLoaded) return ;

    try {
      dispatch(detailsLoadedRequest())
      const advert = await api.adverts.getAdvert(advertId)
      dispatch(detailsLoadedSuccess(advert))
    } catch (error) {
      dispatch(detailsLoadedFailure(error))
    }
  }
}

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});

export const advertCreatedRequest = () => ({
  type: ADVERT_CREATED_REQUEST,
});

export const advertCreatedSuccess = advert => ({
  type: ADVERT_CREATED_SUCCESS,
  payload: advert,
});

export const advertCreatedFailure = error => ({
  type: ADVERT_CREATED_FAILURE,
  payload: error,
  error: true,
});

export const advertCreate = advert => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(advertCreatedRequest());
      const createdAdvert = await api.adverts.createAdvert(advert);
      dispatch(advertCreatedSuccess(createdAdvert));
      return createdAdvert;
    } catch (error) {
      dispatch(advertCreatedFailure(error));
    }
  };
};

export const advertDeleteRequest = () => ({
  type: ADVERT_DELETE_REQUEST,
});

export const advertDeleteSuccess = () => ({
  type: ADVERT_DELETE_SUCCESS
});

export const advertDeleteFailure = error => ({
  type: ADVERT_DELETE_FAILURE,
  payload: error,
  error: true,
});

export const advertDelete = advertId => {
  return async function (dispatch, getState, { api }) {
    try {
      dispatch(advertDeleteRequest());
      await api.adverts.deleteAdvert(advertId);
      dispatch(advertDeleteSuccess());
    
    } catch (error) {
      dispatch(advertDeleteFailure(error));
    }
  };
};

export const tagsLoadRequest = () => ({
  type: TAGS_LOAD_REQUEST,
});

export const tagsLoadSuccess = tags => ({
  type: TAGS_LOAD_SUCCESS,
  payload: tags
});

export const tagsLoadFailure = error => ({
  type: TAGS_LOAD_FAILURE,
  payload: error,
  error: true,
});

export const tagsLoad = () => {
  return async function (dispatch, getState, { api }) {

    const areLoaded = areTagsLoaded(getState()) 
    if (areLoaded) return ;

    try {
      dispatch(tagsLoadRequest())
      const tags = await api.adverts.getTags();
      dispatch(tagsLoadSuccess(tags));
      
    } catch (error) {
      dispatch(tagsLoadFailure())
      console.log(error);
    }
  };
};