import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  museCard: {
    height: "20em",
    width: "20em",
    margin: theme.spacing(1, 1),
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em",
      width: "15em",
    },
  },
  paper: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.secondary.light
        : theme.palette.secondary.dark,
  },
  dividers: {
    backgroundColor: theme.palette.type === "light" ? "#888888" : "#fff",
  },
  button: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
  },
  museImage: {
    height: "100%",
  },
  museImageResize: {
    objectFit: "cover",
    objectPosition: "50% 5%",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    height: "1.5em",
    width: "1.5em",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  description: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    fontSize: "1.1em",
  },
  title: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
  },
  dialogContent: {
    padding: 0,
  },
}));
