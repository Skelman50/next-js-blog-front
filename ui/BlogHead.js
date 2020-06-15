import Head from "next/head";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../config";

const BlogHead = ({ router }) => (
  <Head>
    <title>Programming Blog | {APP_NAME}</title>
    <meta name="description" content="Programming blog on react node next" />
    <link rel="cannonical" href={`${DOMAIN}${router.pathname}`} />
    <meta
      property="og:title"
      content={`Latest web development | ${APP_NAME}`}
    />
    <meta
      property="og:description"
      content="Programming blog on react node next"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
    <meta property="og:site_name" content={`${APP_NAME}`} />

    <meta property="og:image" content={`${DOMAIN}/images/seoblog.png`} />
    <meta
      property="og:image:secure_url"
      content={`${DOMAIN}/images/seoblog.png`}
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="fb:app_id" content={FB_APP_ID} />
  </Head>
);

export default BlogHead;
