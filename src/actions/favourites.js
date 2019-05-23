import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../actions/types";

export const addToFavourites = article => {
  return {
    type: ADD_TO_FAVOURITES,
    article,
  };
};

export const removeFromFavourites = index => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    index,
  };
};
