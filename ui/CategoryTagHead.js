import Head from "next/head";
import { APP_NAME, DOMAIN, FB_APP_ID } from "../config";
import { Fragment } from "react";

const CategoryHead = ({ element }) => (
  <Head>
    {element && (
      <Fragment>
        <title>
          {element.name}| {APP_NAME}
        </title>
        <meta name="description" content={element.name} />
        <link rel="cannonical" href={`${DOMAIN}/categories/${element.slug}`} />
        <meta property="og:title" content={`${element.name} | ${APP_NAME}`} />
        <meta property="og:description" content={element.name} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${DOMAIN}/categories/${element.slug}`}
        />
        <meta property="og:site_name" content={`${APP_NAME}`} />

        <meta property="og:image" content={`${DOMAIN}/images/seoblog.png`} />
        <meta
          property="og:image:secure_url"
          content={`${DOMAIN}/images/seoblog.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="fb:app_id" content={FB_APP_ID} />
      </Fragment>
    )}
  </Head>
);

export default CategoryHead;
