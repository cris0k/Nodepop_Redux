export const getIsLogged = state => state.auth;

export const whoIsLogged = state => state.user.data;

export const getStateAdverts = state => state.adverts.data;

export const areAdvertsLoaded = state => state.adverts.areLoaded;

// export const getAdvert = (state, advertId) =>
//   getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

export const getDetails =  advertId => state =>
 getStateAdverts(state).find(advert  => advert.id.toString() === advertId);

export const getUi = state => state.ui;

export const getStateTags = state => state.tags.data;
export const areTagsLoaded = state => state.tags.areLoaded;