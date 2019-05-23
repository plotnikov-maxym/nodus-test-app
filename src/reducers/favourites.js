import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../actions/types";

const initialState = {};

export default (state = initialState, {type, article, index}) => {
  switch (type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        [article.pmid]: article.title,
      };
    case REMOVE_FROM_FAVOURITES:
      delete state[index];

      return {...state};
    default:
      return state;
  }
};
