import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import DownloadIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useStyles } from './styles';

const Landing = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (window.pageYOffset >= 0) {
      setIsPageLoaded(true);
    }
  }, []);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className={classes.landingSection}
    >
      <Grid item>
        <Grid
          container
          alignItems='center'
          justifyContent={matchesSM ? 'center' : undefined}
          direction='column'
          className={classes.intro}
        >
          <Fade in={isPageLoaded} timeout={1000}>
            <Grid item>
              <Avatar
                src='/assets/images/resumePhoto.jpeg'
                classes={{ img: classes.image }}
                className={classes.avatar}
              />
            </Grid>
          </Fade>

          <Grid item>
            <Typography
              variant='h1'
              align='center'
              gutterBottom
              className={classes.name}
            >
              Elliot C. Hannah III
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='h3'
              align='center'
              gutterBottom
              className={classes.statement}
            >
              Full Stack/iOS Developer{' '}
              <span className={classes.bulletPt}>•</span> Beat Maker{' '}
              <span className={classes.bulletPt}>•</span> Sneakerhead
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justifyContent={matchesSM ? 'center' : undefined}>
              <Button
                onClick={() =>
                  ReactGA.event({
                    category: 'Resume',
                    action: 'Resume Downloaded',
                  })
                }
                variant='contained'
                className={classes.button}
                component={'a'}
                rel='noopener noreferrer'
                target='_blank'
                href='https://drive.google.com/file/d/1DuWfX38E44ZJvLNhpw2ieaUW6o16_QNa/view?usp=sharing'
              >
                <DownloadIcon />
                <span style={{ marginLeft: '0.5em' }}>Download My Résumé</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
