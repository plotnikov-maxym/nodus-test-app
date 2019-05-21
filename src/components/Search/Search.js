import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Formik, Field, Form} from 'formik';
import {TextField} from 'formik-material-ui';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {locale} from '../../constants/locales';
import {styles} from './styles';

class Search extends Component {
  state = {
    value: '',
  };

  render() {
    const {classes} = this.props;
    return (
        <Formik
            initialValues={{
              search: '',
            }}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
              }, 1000);
            }}
            render={({submitForm, isSubmitting, values, setFieldValue}) => (
                <Form className={classes.root}>
                  <div className={classes.container}>
                    <FormControl>
                      <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                          <SearchIcon/>
                        </Grid>
                        <Grid item>
                          <div className={classes.search}>
                            <Field
                                type="text"
                                label={locale.SEARCH_IN_PUBMED}
                                placeholder={locale.SEARCH}
                                name="search"
                                component={TextField}
                                margin="none"
                                fullWidth
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </FormControl>

                    <Button type="submit" variant="contained" color="primary"
                            className={classes.button}>
                      {locale.SEARCH}
                    </Button>

                    <Button variant="contained" color="primary"
                            className={classes.button}>
                      {locale.ADD_TO_FAVOURITES}
                    </Button>
                  </div>
                </Form>
            )}
        />

    );
  };
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
