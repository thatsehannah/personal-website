import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  projectsSections: {
    backgroundImage: `url("/assets/backgrounds/comingSoon.jpeg")`,
    height: "80em",
  
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "2em",
    [theme.breakpoints.down("md")]: {
      height: "50em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  comingSoonContainer: {
    height: '25em',
  },
  title: {
    fontSize: '4em',
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.8em",
    },
  },
  comingSoon: {
    fontSize: '1.7em',
  }
}))