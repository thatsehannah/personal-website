import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  museCard: {
    height: "32em",
    width: "32em",
    marginRight: "2em",
    marginBottom: "2em",
    "&:hover $museImage": {
      height: "8em",
    },
    [theme.breakpoints.down('lg')]: {
      height: '24em',
      width: '24em',
      "&:hover $museImage": {
        height: "7em",
      },
    }
  },
  cardContent: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.secondary.light
        : theme.palette.common.base,
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  museImageResize: {
    objectFit: "cover",
    objectPosition: "50% 5%",
  },
  museImage: {
    height: "100%",
    width: "100%",
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
  museDescriptionContainer: {
    padding: "0.5em 1em",
    height: "25em",
    transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    height: "1.7em",
    width: "1.7em",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('lg')]: {
      height: '1.4em',
      width: '1.4em'
    }
  },
  museTitleGrid: {
    margin: "1em 0",
    [theme.breakpoints.down('lg')]: {
      margin: "0.6em 0"
    }
  },
  museTitleText: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.25rem'
    }
  },
  museText: {
    color: theme.palette.type === "light" ? "#000" : "#fff",
    lineHeight: 1.5,
    [theme.breakpoints.down('lg')]:{
      fontSize: '0.95rem',
    }
  },
}));
