import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {bool, object, string} from "prop-types";
import {styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";

export const Preloader = ({classes, color, loading}) => {
  return (
    loading && (
      <div className={classes.root}>
        <LinearProgress color={color} />
      </div>
    )
  );
};

Preloader.propTypes = {
  classes: object.isRequired,
  loading: bool.isRequired,
  color: string,
};

export default withStyles(styles)(Preloader);
