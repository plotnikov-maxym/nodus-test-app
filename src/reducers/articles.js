import {GET_ARTICLES} from "../actions/types";

const initialState = {
  list: [],
};

export default (state = initialState, {type, value}) => {
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        list: value,
      };
    default:
      return state;
  }
};
