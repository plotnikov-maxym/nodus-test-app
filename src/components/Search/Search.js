import React, {Component} from "react";
import {object, func} from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";
import {styles} from "./styles";

export class Search extends Component {
  state = {
    value: "",
  };

  handleAddToFavorites = () => {
    const {value} = this.state;
    console.log(value);
    if (value.length > 3) {
      const {addToFavourites} = this.props;
      const id = value.replace(/[^\w\s]/gi, "").replace(" ", "_");
      addToFavourites({id, value});
    } else {
      const {infoNotification} = this.props;
      infoNotification(locale.TOO_SHORT_SEARCH_QUERY);
    }
  };

  handleClearInput = () => {
    this.setState({value: ""});
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {value} = this.state;
    if (value.length > 3) {
      const {fetchArticles} = this.props;
      await fetchArticles(value);
    } else {
      const {infoNotification} = this.props;
      infoNotification(locale.TOO_SHORT_SEARCH_QUERY);
    }
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit} noValidate>
        <div className={classes.container}>
          <FormControl className={classes.inputContainer}>
            <TextField
              className={classes.search}
              value={value}
              type="text"
              label={locale.SEARCH_IN_PUBMED}
              placeholder={locale.SEARCH}
              name="search"
              margin="none"
              variant="outlined"
              onChange={this.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {value.length > 0 && (
                      <IconButton
                        edge="end"
                        aria-label="Toggle password visibility"
                        onClick={this.handleClearInput}
                      >
                        <CloseIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {locale.SEARCH}
          </Button>

          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleAddToFavorites}
          >
            {locale.ADD_TO_FAVOURITES}
          </Button>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  classes: object.isRequired,
  fetchArticles: func.isRequired,
  addToFavourites: func.isRequired,
  infoNotification: func.isRequired,
};

export default withStyles(styles)(Search);
