import Head from "next/head";
import { APP_NAME, DOMAIN, FB_APP_ID, API } from "../config";

const UserProfileHead = ({ user }) => (
  <Head>
    <title>
      {user.username} | {APP_NAME}
    </title>
    <meta name="description" content={`Blogs by ${user.username}`} />
    <link rel="cannonical" href={`${DOMAIN}/profile/${user.username}`} />
    <meta property="og:title" content={`${user.username} | ${APP_NAME}`} />
    <meta property="og:description" content={`Blogs by ${user.username}`} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${DOMAIN}/profile/${user.username}`} />
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

export default UserProfileHead;
