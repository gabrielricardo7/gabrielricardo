import { Head, Html, Main, NextScript } from "next/document";
import { avatar } from "../src/utils/data";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          type="image/png"
          href={`${avatar}?s=32`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${avatar}?s=180`}
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${avatar}?s=192`}
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${avatar}?s=196`}
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${avatar}?s=228`}
          sizes="228x228"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
