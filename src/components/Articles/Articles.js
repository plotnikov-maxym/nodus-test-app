import React from "react";
import {array, func, object} from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";
import {locale} from "../../constants/locales";

export const Articles = ({classes, articles, fetchAbstract}) => {
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
        {articles.map((item, index) => {
          return (
            <Paper elevation={2} className={classes.card} key={item.pmid}>
              <div className={classes.flexRow}>
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
                <Button
                  className={classes.detailsBtn}
                  variant="text"
                  color="primary"
                  onClick={() => fetchAbstract(item.pmid, index)}
                >
                  {locale.DETAILS}
                </Button>
              </div>
              {item.abstract && (
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="subtitle1">{item.abstract}</Typography>
                  </div>
                </div>
              )}
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
  fetchAbstract: func.isRequired,
};

export default withStyles(styles)(Articles);
