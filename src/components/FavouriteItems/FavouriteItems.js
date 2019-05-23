import React from "react";
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

class FavouriteItems extends React.Component {
  state = {
    value: "",
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  deleteItem = item => {
    console.log(item);
  };

  render() {
    const {classes, heading, items} = this.props;

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
            {items.map(item => {
              return (
                <div className={classes.flexRow} key={item.value}>
                  <FormControlLabel
                    label={item.label}
                    control={
                      <Radio
                        checked={this.state.value === item.value}
                        onChange={this.handleChange}
                        value={item.value}
                        name={item.value}
                        aria-label={item.label}
                      />
                    }
                  />
                  <IconButton
                    className={classes.deleteButton}
                    aria-label="Delete"
                    onClick={() => this.deleteItem(item.value)}
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
