export const getIsLogged = state => state.auth;

export const getStateAdverts = state => state.adverts.data;

export const areAdvertsLoaded = state=> state.adverts.areLoaded;

// export const getAdvert = (state, advertId) =>
//   getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

export const getDetails =  advertId => state =>
 getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

  export const getUi = state => state.ui;