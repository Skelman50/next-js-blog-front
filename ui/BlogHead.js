import Head from "next/head";
import { APP_NAME, DOMAIN, FB_APP_ID, API } from "../config";

const BlogHead = ({ blog }) => (
  <Head>
    <title>Programming Blog | {APP_NAME}</title>
    <meta name="description" content={blog.mdesc} />
    <link rel="cannonical" href={`${DOMAIN}/blogs/${blog.slug}`} />
    <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
    <meta property="og:description" content={blog.mdesc} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${DOMAIN}/blogs/${blog.slug}`} />
    <meta property="og:site_name" content={`${APP_NAME}`} />

    <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
    <meta
      property="og:image:secure_url"
      content={`${API}/blog/photo/${blog.slug}`}
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="fb:app_id" content={FB_APP_ID} />
  </Head>
);

export default BlogHead;
