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
}));
