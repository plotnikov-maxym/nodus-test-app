import React, {Component} from "react";
import {object} from "prop-types";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";
import {styles} from "./styles";

class FavouriteItems extends Component {
  state = {
    value: "",
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {fetchArticles} = this.props;
    const {value} = this.state;
    await fetchArticles(value);
  };

  deleteItem = index => {
    const {removeFromFavourites} = this.props;
    removeFromFavourites(index);
  };

  render() {
    const {classes, heading, favourites} = this.props;
    if (!Object.keys(favourites).length) {
      return (
        <div className={classes.root}>
          <div className={classes.formControl}>
            <Typography variant="h5" gutterBottom>
              {heading}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {locale.NO_FAVOURITES}
            </Typography>
          </div>
        </div>
      );
    }

    return (
      <form
        className={classes.root}
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className={classes.formControl}>
          <Typography variant="h5" gutterBottom>
            {heading}
          </Typography>
          <FormControl component="fieldset">
            {Object.entries(favourites).map(([key, value]) => {
              return (
                <div className={classes.flexRow} key={key}>
                  <FormControlLabel
                    label={value}
                    control={
                      <Radio
                        checked={this.state.value === value}
                        onChange={this.handleChange}
                        value={value}
                        name={value}
                        aria-label={key}
                      />
                    }
                  />
                  <IconButton
                    className={classes.deleteButton}
                    aria-label="Delete"
                    onClick={() => this.deleteItem(key)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              {locale.SEARCH}
            </Button>
          </FormControl>
        </div>
      </form>
    );
  }
}

FavouriteItems.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(FavouriteItems);
