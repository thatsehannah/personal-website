import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";

const Unsupported = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item style={{marginBottom: '2em'}}>
        <img src="/assets/images/uhoh.gif" alt="Uh oh!" />
      </Grid>
      <Grid item className={classes.item}>
        <Typography align="center" variant="h3" className={classes.text}>
          Hey, I promise the site isn't down! Unfortunately, my site is not
          stable in this particular browser. Until I figure out an optimal
          solution, please visit my site on any of the{" "}
          <a
            className={classes.link}
            target="_blank"
            href="https://browsehappy.com/"
          >
            latest browsers
          </a>{" "}
          for the best user experience. Thank you for your cooperation. <br /> <p>Best,</p>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center" className={classes.signature}>
          Elliot C. Hannah III
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Unsupported;
