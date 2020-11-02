import React, { useState } from "react";
import FadeIn from "react-lazyload-fadein";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../../utilities/createSocialsIconItem";

const MobileMuseCard = (props) => {
  const classes = useStyles();
  const { muse } = props;
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <FadeIn
        duration={muse.fadeInDuration}
        render={(onload) => (
          <Card
            onLoad={onload}
            onClick={() => setOpenDialog(true)}
            className={classes.museCard}
          >
            <CardMedia
              className={classes.museImage}
              component={"img"}
              classes={{
                root: classes.museImageResize,
              }}
              image={muse.pic.url}
              title={muse.pic.title}
            />
          </Card>
        )}
      />
      <Dialog
        open={openDialog}
        disableBackdropClick
        onClose={() => setOpenDialog(false)}
        PaperProps={{ classes: { root: classes.paper } }}
      >
        <DialogTitle disableTypography>
          <Typography variant="h6" className={classes.title}>
            {muse.title}
          </Typography>
          <IconButton
            disableRipple
            disableTouchRipple
            onClick={() => setOpenDialog(false)}
            className={classes.button}
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </DialogTitle>
        <Divider className={classes.dividers} />
        <DialogContent className={classes.dialogContent}>
          <Grid
            container
            direction="column"
            alignItems="center"
            style={{ margin: "1em 0" }}
          >
            <Grid item style={{ width: "95%" }}>
              <Typography
                variant="body2"
                align="center"
                gutterBottom
                className={classes.description}
              >
                {muse.description}
              </Typography>
            </Grid>
            {muse.socialMedia ? (
              <Grid item>
                {createSocialsIconItem(
                  muse.socialMedia.icon,
                  muse.socialMedia.link,
                  classes.icon,
                  classes.iconButton
                )}
              </Grid>
            ) : null}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MobileMuseCard;
