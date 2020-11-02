import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    background: "rgba(0,0,0,0.9)",
  },
  listItem: {
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: "Roboto",
    textTransform: "uppercase",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  logoIcon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "3em",
    width: "3em",
  },
  closeIconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    color: "#fff",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
}));
