import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";

import LightTheme from "../src/themes/LightTheme";
import DarkTheme from "../src/themes/DarkTheme";
import Header from "../src/containers/Header/Header";
import Landing from "../src/components/Landing/Landing";
import About from "../src/components/About/About";
import Resume from "../src/components/Resume/Resume";
import Muses from "../src/components/Muses/Muses";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/containers/Footer/Footer";
import ScrollUpButton from "../src/containers/ScrollUpButton/ScrollUpButton";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      sessionStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      sessionStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const sessionVisit = sessionStorage.getItem("pageVisited");
    if (!sessionVisit) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      sessionStorage.setItem("pageVisited", new Date().getTime().toString())
    }
  });

  useEffect(() => {
    const localTheme = sessionStorage.getItem("theme");

    if (!localTheme) {
      const currentHour = new Date().getHours();
      if (currentHour >= 19 || currentHour <= 6) {
        sessionStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        sessionStorage.setItem("theme", "light");
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
