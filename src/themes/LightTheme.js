import { createMuiTheme } from "@material-ui/core/styles";
import background from "../assets/backgrounds/landingBgLight.jpg";

// font-family: 'Balsamiq Sans', cursive;
// font-family: 'DM Sans', sans-serif;
// font-family: 'Lato', sans-serif;
// font-family: 'Oxygen', sans-serif;
// font-family: 'Rubik', sans-serif;

const theme = createMuiTheme({
  palette: {
    type: "light",
    common: {
      base: "#fff",
      nav: {
        appBar: "#f5f5ff",
        footer: "#f5f5ff",
      },
    },
    primary: {
      main: "#2f6f2f",
    },
    secondary: {
      main: "#d2be99",
    },
    background: {
      landing: background,
    },
  },
  typography: {
    h1: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "Rubik",
    },
    h4: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
    },
    h5: {
      fontFamily: "Archivo Black",
      textTransform: "uppercase",
      fontSize: "1.5em",
    },
    h6: {
      fontFamily: "Rubik",
      fontWeight: 700,
      fontSize: "1.3em",
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontSize: "1.1em",
    },
    body1: {
      fontFamily: "Rubik",
      fontSize: "1.1em",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "Rubik",
      fontSize: "1.15rem",
      fontWeight: 300,
    },
  },
});

export default theme;
