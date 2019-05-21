import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {styles} from './styles';
import {withStyles} from '@material-ui/core/styles';


const TopBar = ({classes, heading}) => {
  return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" color="inherit" noWrap>
              {heading}
            </Typography>
            <div className={classes.grow}/>
          </Toolbar>
        </AppBar>
      </div>
  );
};

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
};

export default withStyles(styles)(TopBar);
