import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './styles';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <footer className={classes.footer}>
      <Grid
        container
        style={{ height: '100%', padding: '0 1em' }}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' className={classes.text} gutterBottom>
                "The moment you give up is the moment you let someone else win."
              </Typography>
              <Typography
                align='center'
                className={classes.text}
                style={{ textTransform: 'uppercase' }}
              >
                Kobe Bryant
              </Typography>
            </Grid>
            <Grid item style={{ margin: '1.5em 0' }}>
              <SocialMedia
                location='Footer'
                size={[30, 23, 23]}
                color={theme.palette.primary.main}
              />
            </Grid>
            <Grid item>
              <Typography
                align='center'
                gutterBottom
                className={classes.copyright}
              >
                Built with ❤ by me using{' '}
                <a
                  className={classes.copyrightLink}
                  target='_blank'
                  href='https://reactjs.org'
                >
                  NextJS
                </a>
                . Visit project{' '}
                <a
                  className={classes.copyrightLink}
                  target='_blank'
                  href='https://github.com/thatsehannah/personal-website-nextjs'
                >
                  here
                </a>
                .
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
