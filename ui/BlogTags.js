import { Fragment } from "react";
import Link from "next/link";

const BlogTags = ({ blog }) => (
  <Fragment>
    {blog.tags &&
      blog.tags.map((bt) => (
        <Link key={bt._id} href={`/tags/${bt._slug}`}>
          <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{bt.name}</a>
        </Link>
      ))}
  </Fragment>
);

export default BlogTags;
