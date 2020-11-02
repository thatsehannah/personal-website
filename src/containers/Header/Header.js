import React, { useState } from "react";
import smoothScroll from "smoothscroll-polyfill";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Tooltip from "@material-ui/core/Tooltip";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import LightModeIcon from "@material-ui/icons/Brightness4";
import DarkModeIcon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import { useTheme } from "@material-ui/core/styles";

import { useStyles } from "./styles";
import Menu from "./Menu/Menu";

const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const classes = useStyles();

  const toggleModeHandler = () => {
    props.toggler(theme.palette.type);
  };

  const scrollIntoView = (id) => {
    smoothScroll.polyfill();
    const yOffset = -56;
    const element = document.querySelector(id);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300);
  };

  const scrollToTop = () => {
    smoothScroll.polyfill();
    setTimeout(() => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Grid item>
                <Tooltip title="Menu">
                  <IconButton
                    className={classes.button}
                    onClick={() => setOpenMenu(true)}
                    disableRipple
                    disableTouchRipple
                  >
                    <MenuIcon className={classes.appBarIcon} />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Toggle light/dark mode">
                  <IconButton
                    onClick={toggleModeHandler}
                    disableRipple
                    disableTouchRipple
                    className={classes.button}
                  >
                    {theme.palette.type === "light" ? (
                      <LightModeIcon className={classes.appBarIcon} />
                    ) : (
                      <DarkModeIcon className={classes.appBarIcon} />
                    )}
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Menu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        scrollToTop={scrollToTop}
        scrollIntoView={scrollIntoView}
      />
    </>
  );
};

export default Header;
