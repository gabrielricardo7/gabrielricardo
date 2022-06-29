import Head from "next/head";
import { avatar } from "../utils/data";

function SEO({ description, siteTitle, title }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={avatar} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export default SEO;
