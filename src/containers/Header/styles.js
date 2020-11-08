import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "-0.5em",
    [theme.breakpoints.only('lg')]: {
      marginBottom: "-1em"
    }
  },
  appBar: {
    height: "3.5em",
    backgroundColor: theme.palette.common.nav.appBar,
    [theme.breakpoints.down('lg')]: {
      height: '3em'
    }
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
      
    },
  },
  appBarIcon: {
    fontSize: "1.5em",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.2em'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
}));
