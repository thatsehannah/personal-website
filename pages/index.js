import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

import { ThemeProvider } from "@material-ui/styles";

import LightTheme from "../src/themes/LightTheme";
import DarkTheme from "../src/themes/DarkTheme";
import MainContent from "../src/containers/Content/ForSupportedBrowsers/MainContent";
import UnsupportedContent from "../src/containers/Content/ForUnsupportedBrowsers/UnsupportedContent";
import { detectBrowser } from "../src/utilities/browserDetector";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [browserError, setBrowserError] = useState(false);

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
      sessionStorage.setItem("pageVisited", new Date().getTime().toString());
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

  useEffect(() => {
    setBrowserError(detectBrowser());
  }, []);

  const content = browserError ? (
    <UnsupportedContent browserError={browserError} />
  ) : (
    <MainContent toggleTheme={toggleTheme} />
  );

  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      {content}
    </ThemeProvider>
  );
};

export default App;
