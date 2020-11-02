import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import createEmotionServer from "create-emotion-server";
import { cache } from "./_app.js";

const { extractCritical } = createEmotionServer(cache);

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/assets/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/favicons/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&family=Balsamiq+Sans&family=DM+Sans&family=Archivo+Black&family=Lato&family=Oxygen:wght@300;400;700&family=Rubik:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta property="og:type" key="og:type" content="website" />
          <meta property="og:image" key="og:image" content="https://i.imgur.com/gDgPQg4.png" />
          <meta property="og:image:type" key="og:image:type" content="image/png" />
          <meta property="og:image:width" key="og:image:width" content="1200" />
          <meta proeprty="og:image:height" key="og:image:height" content="630" />
          <meta proerty="og:image:alt" key="og:image:alt" content="Elliot C. Hannah" />
          <meta
            property="og:title"
            key="og:title"
            content="Elliot C. Hannah | Full Stack Developer • Beatmaker • Sneakerhead"
          />
          <meta property="og:url" key="og:url" content="https://thatsehannah.com" />
          <link rel="canonical" key="canonical" href="https://thatsehannah.com" />
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const styles = extractCritical(initialProps.html);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion-css={styles.ids.join(" ")}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  };
};
