import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";

export const cache = createCache();

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Elliot Hannah | Full Stack Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          key="description"
          content="An exceptional software developer, sneaker lover, and beat maker. Visit my site to learn about me and my programming experience, as well as to explore this carefully crafted, custom website built by me!"
        />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
