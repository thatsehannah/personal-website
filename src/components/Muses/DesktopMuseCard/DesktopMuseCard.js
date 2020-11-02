import React from "react";
import FadeIn from "react-lazyload-fadein";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";

const MuseCard = (props) => {
  const classes = useStyles();
  const { muse } = props;

  return (
    <FadeIn
      duration={muse.fadeInDuration}
      render={(onload) => (
        <Card onLoad={onload} className={classes.museCard}>
          <CardMedia
            className={classes.museImage}
            component="img"
            classes={{
              root: classes.museImageResize,
            }}
            image={muse.pic.url}
            title={muse.pic.title}
          />
          <CardContent classes={{ root: classes.cardContent }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              className={classes.museDescriptionContainer}
            >
              <Grid item>
                <Typography
                  align="center"
                  variant="h6"
                  className={classes.museText}
                >
                  {muse.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  variant="body2"
                  className={classes.museText}
                >
                  {muse.description}
                </Typography>
              </Grid>
              {muse.socialMedia ? (
                <Grid item>
                  <Tooltip title={muse.socialMedia.tooltip}>
                    {createSocialsIconItem(
                      muse.socialMedia.icon,
                      muse.socialMedia.link,
                      classes.icon,
                      classes.button
                    )}
                  </Tooltip>
                </Grid>
              ) : null}
            </Grid>
          </CardContent>
        </Card>
      )}
    />
  );
};

export default MuseCard;
