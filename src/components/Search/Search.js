import React, {Component} from "react";
import {object, func} from "prop-types";
import {Formik, Field, Form} from "formik";
import {TextField} from "formik-material-ui";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";
import {styles} from "./styles";

class Search extends Component {
  state = {
    value: "",
  };

  handleAddToFavorites = value => {
    if (value.length > 1) {
      const {addToFavourites} = this.props;
      const id = value.replace(/\s+/g, "");
      addToFavourites({id, value});
    }
  };

  handleClearInput = reset => {
    this.setState({value: ""});
    reset();
  };

  handleSubmit = async (values, {setSubmitting}) => {
    const {fetchArticles} = this.props;
    setSubmitting(false);
    // console.log(values.search);
    this.setState({value: values.search});
    await fetchArticles(values.search);
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <Formik
        initialValues={{
          search: value,
        }}
        onSubmit={this.handleSubmit}
        render={({values, handleChange, resetForm}) => (
          <Form className={classes.root}>
            <div className={classes.container}>
              <FormControl className={classes.inputContainer}>
                <Field
                  className={classes.search}
                  component={TextField}
                  value={values.search}
                  type="text"
                  label={locale.SEARCH_IN_PUBMED}
                  placeholder={locale.SEARCH}
                  name="search"
                  margin="none"
                  variant="outlined"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="Toggle password visibility"
                          onClick={() => this.handleClearInput(resetForm)}
                        >
                          <CloseIcon />
                        </IconButton>
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
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => this.handleAddToFavorites(values.search)}
              >
                {locale.ADD_TO_FAVOURITES}
              </Button>
            </div>
          </Form>
        )}
      />
    );
  }
}

Search.propTypes = {
  classes: object.isRequired,
  fetchArticles: func.isRequired,
};

export default withStyles(styles)(Search);
