import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";

import LightTheme from "./themes/LightTheme";
import DarkTheme from "./themes/DarkTheme";
import Header from "./containers/Header/Header";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Muses from "./components/Muses/Muses";
import Contact from "./components/Contact/Contact";
import Footer from "./containers/Footer/Footer";
import ScrollUpButton from "./containers/ScrollUpButton/ScrollUpButton";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    if (!localTheme) {
      const currentHour = new Date().getHours();
      if (currentHour >= 19 || currentHour <= 6) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    } else {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <ScrollUpButton />
      <Header toggler={toggleTheme} />
      <Grid item id="landing">
        <Landing />
      </Grid>
      <Grid item id="about">
        <About />
      </Grid>
      <Grid item id="education">
        <Resume />
      </Grid>
      <Grid item id="muses">
        <Muses />
      </Grid>
      <Grid item id="contact">
        <Contact />
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
