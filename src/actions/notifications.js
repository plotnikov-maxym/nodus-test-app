import {
  INFO_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "./types";
import {sleep} from "../utils/common";

export const clearNotification = {
  type: CLEAR_NOTIFICATION,
};

export const expireNotification = async dispatch => {
  await sleep(3000);

  dispatch(clearNotification);
};

export const infoNotification = message => dispatch => {
  dispatch({
    type: INFO_NOTIFICATION,
    message,
  });

  expireNotification(dispatch);
};

export const errorNotification = ({message}) => dispatch => {
  dispatch({
    type: ERROR_NOTIFICATION,
    message,
  });

  expireNotification(dispatch);
};
