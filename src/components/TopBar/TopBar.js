import React from "react";
import {bool, object, string} from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Preloader from "../Preloader";
import {styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";

export const TopBar = ({classes, heading, isLoading}) => {
  return (
    <div className={classes.root}>
      <Preloader loading={isLoading} />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            {heading}
          </Typography>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

TopBar.propTypes = {
  classes: object.isRequired,
  heading: string.isRequired,
  isLoading: bool.isRequired
};

export default withStyles(styles)(TopBar);
