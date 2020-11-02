import React from "react";
import LazyLoad from "react-lazyload";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { useStyles } from "./styles";
import { education, work, skills } from "./resumeData";
import SkillBar from "react-skillbars";

const EducationSkills = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const skillbarColors = {
    bar: theme.palette.primary.main,
    title: {
      text: "#fff",
      background: "#c9c9c9",
    },
  };

  return (
    <LazyLoad offset={150}>
      <Grid
        container
        className={classes.educationSkillsSection}
        direction={matchesSM ? "column" : "row"}
      >
        <Grid item>
          <Grid container justify="center">
            <Paper elevation={8} className={classes.paper}>
              <Grid container direction="column">
                <Grid item>
                  <Grid
                    container
                    style={{ marginTop: "1em" }}
                    direction={matchesSM ? "column" : "row"}
                  >
                    <Grid item sm={matchesSM ? undefined : 4}>
                      <Typography variant="h5">
                        <span className={classes.title}>Education</span>
                      </Typography>
                    </Grid>
                    <Grid item sm>
                      <Grid
                        item
                        container
                        direction="column"
                        style={{
                          maxWidth: matchesSM ? undefined : "90%",
                          marginTop: matchesSM ? "1em" : undefined,
                        }}
                      >
                        {education.map((school) => (
                          <Grid key={school.subText} item>
                            <Grid
                              item
                              className={classes.item}
                              container
                              direction="column"
                            >
                              <Grid item>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  className={classes.header}
                                >
                                  {school.header}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle2"
                                  gutterBottom
                                  className={classes.subtext}
                                >
                                  {school.subText}
                                  <span
                                    style={{
                                      color: theme.palette.primary.main,
                                    }}
                                  >
                                    {" "}
                                    |{" "}
                                  </span>
                                  {school.date}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  gutterBottom
                                  className={classes.description}
                                >
                                  {school.description}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    style={{ marginTop: "2em" }}
                    direction={matchesSM ? "column" : "row"}
                  >
                    <Grid item sm={matchesSM ? undefined : 4}>
                      <Typography variant="h5">
                        <span className={classes.title}>Experience</span>
                      </Typography>
                    </Grid>
                    <Grid item sm>
                      <Grid
                        item
                        container
                        direction="column"
                        style={{
                          maxWidth: matchesSM ? undefined : "90%",
                          marginTop: matchesSM ? "1em" : undefined,
                        }}
                      >
                        {work.map((job) => (
                          <Grid key={job.subText} item>
                            <Grid
                              item
                              className={classes.item}
                              container
                              direction="column"
                            >
                              <Grid item>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  className={classes.header}
                                >
                                  {job.header}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle2"
                                  gutterBottom
                                  className={classes.subtext}
                                >
                                  {job.subText}
                                  <span
                                    style={{
                                      color: theme.palette.primary.main,
                                    }}
                                  >
                                    {" "}
                                    |{" "}
                                  </span>
                                  {job.date}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="body2"
                                  gutterBottom
                                  className={classes.description}
                                >
                                  {job.description}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    style={{ marginTop: "2em" }}
                    direction={matchesSM ? "column" : "row"}
                  >
                    <Grid item sm={matchesSM ? undefined : 4}>
                      <Typography variant="h5">
                        <span className={classes.title}>Skills</span>
                      </Typography>
                    </Grid>
                    <Grid item sm>
                      <Grid
                        item
                        container
                        direction="column"
                        style={{
                          maxWidth: matchesSM ? undefined : "90%",
                          marginTop: matchesSM ? "1em" : undefined,
                        }}
                      >
                        <Grid item>
                          <SkillBar skills={skills} colors={skillbarColors} />
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

export default EducationSkills;
