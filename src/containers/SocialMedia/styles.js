import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: "0.5em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0
    }
  },
  icon: {
    color: (props) => props.color,
    height: (props) => props.size[0],
    width: (props) => props.size[0],
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("lg")]: {
      height: (props) => props.size[1],
      width: (props) => props.size[1],
    },
    [theme.breakpoints.down("xs")]: {
      height: (props) => props.size[2],
      width: (props) => props.size[2],
    },
  },
}));
