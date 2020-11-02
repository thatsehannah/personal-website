import React from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

export const createSocialsIconItem = (
  Icon,
  link,
  componentClass,
  buttonClass
) => (
  <Grid
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
