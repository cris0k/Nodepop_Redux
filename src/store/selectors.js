export const getIsLogged = state => state.auth;

export const getAdverts = state => state.adverts;

// export const getAdvert = (state, advertId) =>
//   getAdvert(state).find(advert  => advert.id.toString() === advertId);

// export function getAdvert(state, advertId) {
//   return getAdverts(state).find(advert => advert.id.toString() === advertId);
// }

// export function getAdvert(advertId) {
//   return function (state) {
//     return getAdverts(state).find(advert => advert.id.toString() === advertId);
//   };
// }

export const getAdvert = advertId => state =>
  getAdvert(state).find(advert => advert.id.toString() === advertId);

export const getUi = state => state.ui;