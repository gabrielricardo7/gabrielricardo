import React from "react";
import Head from "next/head";
import SEO from "../src/components/seo";
import { useRouter } from "next/router";
import { author, stack } from "../src/utils/data";
import { Footer, Header } from "../src/components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../src/theme";
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
      <ThemeProvider theme={theme}>
        <SEO description={stack} siteTitle={author} title={title} />
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
