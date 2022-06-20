import React from "react";
import Head from "next/head";
import { Footer, Header } from "../src/components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "../src/theme";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
