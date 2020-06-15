import { Fragment } from "react";
import Link from "next/link";

const BlogCategories = ({ blog }) => (
  <Fragment>
    {blog.categories.map((bc) => (
      <Link key={bc._id} href={`/categories/${bc._slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{bc.name}</a>
      </Link>
    ))}
  </Fragment>
);

export default BlogCategories;
