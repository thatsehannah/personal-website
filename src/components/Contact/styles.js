import { makeStyles } from "@material-ui/core/styles";
import contactBg from "../../assets/backgrounds/contactBg.jpeg";

export const useStyles = makeStyles((theme) => ({
  contactSection: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1em",
    },
  },
  textField: {
    marginBottom: "2em",
    width: "70%",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
  },
  inputLabel: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    "&.focused": {
      color: theme.palette.type === "light" ? "#505050" : "#fff",
    },
    "&.shrink": {
      color: theme.palette.type === "light" ? "#000" : "#fff",
    },
  },
  inputLabelError: {
    "&.focused": {
      color: "#f44336",
    },
    "&.shrink": {
      color: "#f44336",
    },
  },
  fieldset: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    fontWeight: 600,
    "&:hover $notchedOutline": {
      borderColor: theme.palette.primary.light,
    },
  },
  notchedOutline: {
    border: `2.5px solid ${theme.palette.primary.main}`,
  },
  fieldsetError: {
    "&:hover $notchedOutline": {
      borderColor: "#f44336",
    },
  },
  statement: {
    fontSize: "2em",
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.8em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  email: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "1.5em",
    color: theme.palette.type === "light" ? "#000" : "#fff",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25em",
    },
  },
  mailIcon: {
    fontSize: "2.1em",
    color: theme.palette.primary.main,
    marginRight: "0.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.9em",
    },
  },
  contactBg: {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${contactBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  button: {
    marginTop: "0.5em",
    width: "25em",
    color: theme.palette.type === "light" ? "#fff" : "#000",
    backgroundColor: theme.palette.primary.main,
    height: "4em",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: "4em",
      width: "15em",
    },
  },
  circularProgress: {
    color: theme.palette.type === "light" ? "#fff" : "#000",
    fontSize: "2.5em",
  },
}));
