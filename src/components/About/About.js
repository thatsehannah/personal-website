import React from "react";
import LazyLoad from "react-lazyload";
import FadeIn from "react-lazyload-fadein";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Pin from "@material-ui/icons/PersonPinCircle";
import IphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/MailOutline";
import BirthdayIcon from "@material-ui/icons/Cake";

import SocialMedia from "../../containers/SocialMedia/SocialMedia";
import aboutAvatar from "../../assets/images/wedding.jpeg";
import { useStyles } from "./styles";

const About = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <LazyLoad offset={150}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.aboutSection}
      >
        <Grid item>
          <Grid container justify="center">
            <Paper className={classes.paper}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <Typography
                    variant="h2"
                    align="center"
                    className={classes.sectionTitle}
                    gutterBottom
                  >
                    About Me
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction={matchesMD ? "column" : "row"}
                    justfiy={matchesMD ? "center" : undefined}
                  >
                    <Grid item container justify="center" lg={3}>
                      <FadeIn
                        render={(onload) => (
                          <Grid onLoad={onload} item>
                            <Avatar
                              variant="rounded"
                              src={aboutAvatar}
                              className={classes.avatar}
                            />
                          </Grid>
                        )}
                      />
                    </Grid>

                    <Grid
                      item
                      container
                      justify="center"
                      style={{ marginTop: matchesMD ? "2em" : undefined }}
                      lg
                    >
                      <Grid
                        item
                        style={{
                          width: matchesXS ? "auto" : matchesMD ? "90%" : "75%",
                        }}
                      >
                        <Typography
                          paragraph
                          align="center"
                          variant="body2"
                          className={classes.aboutMeText}
                          gutterBottom
                        >
                          <span className={classes.bornWord}>Born</span> and
                          raised in Augusta, GA, I was the only child to Cristal
                          and Elliot Hannah Jr. I've always had an affinity for
                          computers since I was about 7 years old. Seeing how
                          fascinated I was with computers definitely made me
                          want to pursue a career working with them, so here I
                          am today!
                        </Typography>
                        <Typography
                          paragraph
                          align="center"
                          variant="body2"
                          className={classes.aboutMeText}
                          gutterBottom
                        >
                          I attended Georgia State University for my Bachelor's
                          and after graduating, I went straight into my Master's
                          program at Kennesaw State Unviersity. During my first
                          semester, I decided to attend a coding bootcamp in
                          Reston, VA for 3 months to enhance my coding skills.
                          This led me to relocate to Bentonville, AR where I
                          first got a taste of being a full stack developer.
                          After a brief stint in Bentonville, I was relocated to
                          Los Angeles for a different project, and I've been
                          here ever since!.
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          className={classes.aboutMeText}
                        >
                          In my spare time, you can catch me doing a variety of
                          activities, such as making beats, playing NBA2K with
                          my friends, attending Dodgers or Lakers games (prior
                          to COVID-19), or exploring the city with my fiancée
                          and pup Coco.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      alignItems="center"
                      justify={matchesMD ? "center" : undefined}
                      style={{ marginTop: matchesMD ? "2em" : undefined }}
                      lg={3}
                    >
                      <Grid item container direction="column">
                        <Grid
                          item
                          container
                          alignItems={matchesSM ? "center" : undefined}
                          justify="center"
                        >
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              alignItems="center"
                            >
                              <Grid item style={{ marginBottom: "0.75em" }}>
                                <Grid container alignItems="center">
                                  <Grid item style={{ marginRight: "0.61em" }}>
                                    <BirthdayIcon
                                      className={classes.contactIcon}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="body2"
                                      className={classes.contactText}
                                    >
                                      12/31/1993
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item style={{ marginBottom: "0.75em" }}>
                                <Grid container alignItems="center">
                                  <Grid item style={{ marginRight: "0.61em" }}>
                                    <IphoneIcon
                                      className={classes.contactIcon}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="body2"
                                      className={classes.contactText}
                                    >
                                      (706) 631-7005
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item style={{ marginBottom: "0.75em" }}>
                                <Grid container alignItems="center">
                                  <Grid item style={{ marginRight: "0.61em" }}>
                                    <EmailIcon
                                      className={classes.contactIcon}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="body2"
                                      component={"a"}
                                      href="mailto:elliotchannah@outlook.com"
                                      target="_blank"
                                      className={[
                                        classes.contactText,
                                        classes.email,
                                      ].join(" ")}
                                    >
                                      elliotchannah@outlook.com
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Grid container alignItems="center">
                                  <Grid item style={{ marginRight: "0.61em" }}>
                                    <Pin className={classes.contactIcon} />
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="body2"
                                      className={classes.contactText}
                                    >
                                      {" "}
                                      Los Angeles, CA
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          container
                          justify="center"
                          style={{ marginTop: "2em" }}
                        >
                          <Grid item>
                            <Grid container direction="column">
                              <SocialMedia
                                size={[35, 40, 25]}
                                color={
                                  matchesLG
                                    ? "#d2be99"
                                    : theme.palette.primary.main
                                }
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </LazyLoad>
  );
};

export default About;
