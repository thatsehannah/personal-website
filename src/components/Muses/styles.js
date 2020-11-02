import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  musesSection: {
    padding: "2em",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light" ? "#fff" : theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  container: {
    marginTop: "1em",
    marginBottom: "1em",
  },
  title: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.8em",
    },
  },
  text: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
  },
}));
