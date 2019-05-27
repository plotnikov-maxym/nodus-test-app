import {GET_ARTICLES, ADD_ABSTRACT} from "../actions/types";

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
    case ADD_ABSTRACT:
      return {
        ...state,
        list: state.list.map((item, idx) =>
          idx === value.index ? {...item, abstract: value.abstract} : item,
        ),
      };
    default:
      return state;
  }
};
