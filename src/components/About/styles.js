import { makeStyles } from "@material-ui/core/styles";
import aboutBackgroundLight from "../../assets/backgrounds/aboutBg.jpg";

export const useStyles = makeStyles((theme) => ({
  aboutSection: {
    backgroundImage: `url(${aboutBackgroundLight})`,
    height: "80em",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2em",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  paper: {
    width: "70%",
    padding: "2em",
    marginTop: "1em",
    marginBottom: "1em",
    borderRadius: "1em",
    backgroundColor:
      theme.palette.type === "light" ? "#fff" : theme.palette.secondary.dark,
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      backgroundColor: "rgba(0,0,0,0.74)",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },
  sectionTitle: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("lg")]: {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.8em",
    },
  },
  avatar: {
    height: "25em",
    width: "15em",
    [theme.breakpoints.down("xs")]: {
      height: "20em",
      width: "12em",
    },
  },
  aboutMeText: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("lg")]: {
      color: "#fff",
    },
  },
  contactIcon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("lg")]: {
      color: "#d2be99",
    },
  },
  contactText: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down("lg")]: {
      color: "#fff",
      
    },
  },
  bornWord: {
    color: theme.palette.primary.main,
    fontFamily: 'Archivo Black',
    textTransform: 'uppercase',
    fontSize: '1.5em',
    [theme.breakpoints.down("lg")]: {
      color: "#d2be99",
    },
  },
  email: {
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "underline",
    },
  },
}));
