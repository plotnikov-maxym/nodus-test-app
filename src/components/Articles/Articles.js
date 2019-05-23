import React from "react";
import {array, object} from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";
import {styles} from "./styles";

export const Articles = ({classes, articles}) => {
  if (!articles.length) {
    return (
      <div className={classes.root}>
        <Typography variant="button" gutterBottom>
          {locale.NO_MATCHES}
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.group}>
        {articles.map(item => {
          return (
            <Paper className={classes.card} key={item.pmid}>
              <div className={classes.flexColumn}>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" display="inline">
                  {item.authors}
                </Typography>
                <Typography variant="subtitle2" display="inline">
                  {item.raw.source} ({item.raw.pubdate})
                </Typography>
              </div>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};

Articles.propTypes = {
  classes: object.isRequired,
  articles: array.isRequired,
};

export default withStyles(styles)(Articles);
