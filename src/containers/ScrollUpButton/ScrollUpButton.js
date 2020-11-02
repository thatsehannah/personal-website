import React, { useState } from "react";
import smoothScroll from "smoothscroll-polyfill";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import ScrollUpIcon from "@material-ui/icons/ArrowDropUp";

import { useStyles } from "./styles";

const ScrollUpButton = () => {
  const classes = useStyles();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1000) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    smoothScroll.polyfill();
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Grid container>
      {!showScroll ? null : (
        <Slide in={showScroll} direction="left" mountOnEnter unmountOnExit>
          <Grid item className={classes.scrollUpItem}>
            <IconButton
              disableRipple
              disableTouchRipple
              onClick={scrollToTop}
              className={classes.iconButton}
            >
              <Grid item className={classes.circle}>
                <ScrollUpIcon className={classes.scrollUpIcon} />
              </Grid>
            </IconButton>
          </Grid>
        </Slide>
      )}
    </Grid>
  );
};

export default ScrollUpButton;
