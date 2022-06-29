import React from "react";
import Head from "next/head";
import BaseTheme from "../src/theme";
import SEO from "../src/components/SEO";
import { useRouter } from "next/router";
import { author, stack } from "../src/utils/data";
import { CssBaseline } from "@mui/material";
import { Footer, Header } from "../src/components/Layout";
import "../styles/global.css";

function App({ Component, pageProps }) {
  const path = useRouter().pathname;

  const page =
    path.length === 1
      ? "Home"
      : path[1].toUpperCase() + path.slice(2);

  const title = page === "Home" ? author : `${page} | ${author}`;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <BaseTheme>
        <SEO description={stack} siteTitle={author} title={title} />
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BaseTheme>
    </React.Fragment>
  );
}

export default App;
