import React, {Component} from "react";
import {object, func} from "prop-types";
import {Formik, Field, Form} from "formik";
import {TextField} from "formik-material-ui";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";
import {styles} from "./styles";

class Search extends Component {
  state = {
    value: "",
  };

  handleSubmit = async (values, {setSubmitting}) => {
    const {fetchArticles} = this.props;
    setSubmitting(false);
    console.log(values.search);
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
        render={({values}) => (
          <Form className={classes.root}>
            <div className={classes.container}>
              <FormControl className={classes.inputContainer}>
                <div className={classes.search}>
                  <Field
                    value={values.search}
                    type="text"
                    label={locale.SEARCH_IN_PUBMED}
                    placeholder={locale.SEARCH}
                    name="search"
                    component={TextField}
                    margin="none"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
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
