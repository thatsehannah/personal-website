import React from "react";
import ReactGA from "react-ga";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

export const createSocialsIconItem = (
  Icon,
  link,
  componentClass,
  buttonClass,
  title,
  type
) => (
  <Grid
    onClick={() =>
      ReactGA.event({
        category: "Social Media",
        action: `${title} ${type} Social Icon Clicked`,
      })
    }
    key={link}
    item
    component={"a"}
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <IconButton disableRipple disableTouchRipple className={buttonClass}>
      <Icon className={componentClass} />
    </IconButton>
  </Grid>
);
