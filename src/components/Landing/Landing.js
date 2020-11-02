import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import DownloadIcon from "@material-ui/icons/GetApp";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import ehannah from "../../assets/images/resumePhoto.jpg";

const Landing = () => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (window.pageYOffset >= 0) {
      setIsPageLoaded(true);
    }
  }, []);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.landingSection}
    >
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify={matchesSM ? "center" : undefined}
          direction="column"
          className={classes.intro}
        >
          <Fade in={isPageLoaded} timeout={1000}>
            <Grid item>
              <Avatar
                src={ehannah}
                classes={{ img: classes.image }}
                className={classes.avatar}
              />
            </Grid>
          </Fade>

          <Grid item>
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              className={classes.name}
            >
              Elliot C. Hannah III
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              className={classes.statement}
            >
              Full Stack Developer <span className={classes.bulletPt}>•</span>{" "}
              Beat Maker <span className={classes.bulletPt}>•</span> Sneakerhead
            </Typography>
          </Grid>
          <Grid item>
            <Grid container justify={matchesSM ? "center" : undefined}>
              <Button
                variant="contained"
                className={classes.button}
                component={"a"}
                rel="noopener noreferrer"
                target="_blank"
                href="https://pdfhost.io/v/qam2LVSpS_ElliotCHannahResume.pdf"
              >
                <DownloadIcon />
                <span style={{ marginLeft: "0.5em" }}>Download My Résumé</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;
