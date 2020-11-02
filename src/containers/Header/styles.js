import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "-0.5em",
  },
  appBar: {
    height: "3.5em",
    backgroundColor: theme.palette.common.nav.appBar,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  appBarIcon: {
    fontSize: "1.5em",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  
}));
