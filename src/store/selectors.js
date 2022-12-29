export const getIsLogged = state => state.auth;

export const getStateAdverts = state => state.adverts;

// export const getAdvert = (state, advertId) =>
//   getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

export const getAdvert =  advertId => state =>
  getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

  