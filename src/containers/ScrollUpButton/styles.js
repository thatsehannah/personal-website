import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    borderRadius: "50%",
    height: "2em",
    width: "2em",
  },
  scrollUpItem: {
    zIndex: 1310,
    position: "fixed",
    right: 0,
    bottom: 0,
  },
  scrollUpIcon: {
    height: "2em",
    width: "2em",
    color: theme.palette.type === "light" ? "#fff" : "#000",
  },
}));
