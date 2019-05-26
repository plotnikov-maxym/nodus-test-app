import {
  INFO_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../actions/types";

const initialState = {
  type: null,
  message: "",
};

export default (state = initialState, {type, message}) => {
  switch (type) {
    case ERROR_NOTIFICATION:
      return {
        type: "error",
        message: message || "Something went wrong!",
      };
    case INFO_NOTIFICATION:
      return {
        type: "info",
        message,
      };
    case CLEAR_NOTIFICATION:
      return initialState;
    default:
      return state;
  }
};
