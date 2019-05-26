import React from "react";
import {oneOf, shape, string} from "prop-types";
import classNames from "classnames";
import {NOTIFICATION_TYPES} from "../../constants/notifications";
import {styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const Notification = ({classes, notification}) => {
  if (notification) {
    const {type, message} = notification;
    const notificationClass = classes[type];

    if (message) {
      return (
        <div className={classNames(classes.container, notificationClass)}>
          {message && (
            <Typography variant="body1" className={classes.text}>
              {message}
            </Typography>
          )}
        </div>
      );
    }
  }

  return null;
};

Notification.propTypes = {
  notification: shape({
    type: oneOf(NOTIFICATION_TYPES),
    message: string,
  }),
};

export default withStyles(styles)(Notification);
