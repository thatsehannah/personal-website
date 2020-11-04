import React from "react";
import { SiGithub } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiCashapp } from "react-icons/si";
import { SiSoundcloud } from "react-icons/si";

import Grid from "@material-ui/core/Grid";

import { useStyles } from "./styles";
import { createSocialsIconItem } from "../../utilities/createSocialsIconItem";

const SocialMedia = (props) => {
  const classes = useStyles(props);

  const socials = [
    {
      title: props.location,
      type: 'LinkedIn',
      icon: SiLinkedin,
      link: "https://www.linkedin.com/in/elliothannah/",
    },
    {
      title: props.location,
      type: 'Github',
      icon: SiGithub,
      link: "https:///www.github.com/thatsehannah",
    },
    {
      title: props.location,
      type: 'Soundcloud',
      icon: SiSoundcloud,
      link: "https://soundcloud.com/thatsehannah/tracks",
    },
    {
      title: props.location,
      type: 'Facebook',
      icon: SiFacebook,
      link: "https:///wwww.facebook.com/ehannahiii",
    },
    {
      title: props.location,
      type: 'Instagram',
      icon: SiInstagram,
      link: "https://www.instagram.com/thatsehannah/",
    },
    {
      title: props.location,
      type: 'Cashapp',
      icon: SiCashapp,
      link: "https://cash.app/$thatsehannah/",
    },
  ];

  return (
    <Grid item container className={classes.socialContainer} justify="center">
      {socials.map((social) =>
        createSocialsIconItem(
          social.icon,
          social.link,
          classes.icon,
          classes.button,
          social.title,
          social.type
        )
      )}
    </Grid>
  );
};

export default SocialMedia;
