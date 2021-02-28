import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';

import { useStyles } from './styles';

const Projects = () => {
  const classes = useStyles();

  return (
    <LazyLoad offset={150}>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.projectsSections}
      >
        <Grid item direction='column' className={classes.comingSoonContainer}>
          <Typography align='center' variant='h1' className={classes.title}>
            Personal Projects
          </Typography>
          <Typography align='center' variant='body1' className={classes.comingSoon}>Coming Soon! 🚧 🚧 🚧 🚧</Typography>
        </Grid>
      </Grid>
    </LazyLoad>
  );
};

export default Projects;
