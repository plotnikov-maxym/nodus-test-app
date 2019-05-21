import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {locale} from '../../constants/locales';
import {styles} from './styles';

class FavouriteItems extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event)
  };

  render() {
    const {classes, heading, items} = this.props;

    return (
        <form className={classes.root} onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">{heading}</FormLabel>
            <RadioGroup
                aria-label={heading}
                name="favourites"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
            >
              {items.map(item => <FormControlLabel key={item.value}
                                                   value={item.value}
                                                   control={<Radio/>}
                                                   label={item.label}
                                                   disabled={item.disabled}/>,
              )}
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              {locale.SEARCH}
            </Button>
          </FormControl>
        </form>
    );
  }
}

FavouriteItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavouriteItems);
