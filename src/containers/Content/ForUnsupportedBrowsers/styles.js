import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  background: {
    height: "100vh",
    backgroundColor: theme.palette.common.base,
  },
  text: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    fontSize: '2em',
    [theme.breakpoints.down("sm")]:{
      fontSize: '1.4em'
    }
  },
  link: {
      color: theme.palette.primary.main,
      "&:hover": {
          color: theme.palette.primary.dark
      }
  },
  signature: {
    fontFamily: "Archivo Black",
    color: theme.palette.primary.main,
    fontSize: '3em',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.7em'
    }
  },
  logo: {
      height: 150,
      width: 150
  },
  item: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      padding: '2em',
      width: "auto"
    }
  }
}));
