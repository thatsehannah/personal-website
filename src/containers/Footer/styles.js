import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.nav.footer,
    height: "20em",
    width: "100%",
    position: "relative",
  },
  text: {
    fontSize: 17,
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
  copyright: {
    color: "#696969",
    fontSize: "0.8em",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50%",
    height: "2em",
    width: "2em",
  },
  scrollUpItem: {
    position: "relative",
    top: -70,
    [theme.breakpoints.down("lg")]: {
      top: -74,
    },
    [theme.breakpoints.down("sm")]: {
      top: -78,
    },
    [theme.breakpoints.down("xs")]: {
      top: -40,
    },
  },
  scrollUpIcon: {
    height: "2em",
    width: "2em",
    color: theme.palette.type === "light" ? "#fff" : "#000",
  },
}));
