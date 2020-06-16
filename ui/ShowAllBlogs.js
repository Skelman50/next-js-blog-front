import { Fragment } from "react";

import BlogCard from "./BlogCard";

const ShowAllBlogs = ({ blogs }) => {
  return (
    <Fragment>
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </Fragment>
  );
};

export default ShowAllBlogs;
