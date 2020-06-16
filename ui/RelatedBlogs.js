import { Fragment } from "react";
import BlogSmallCard from "./BlogSmallCard";

const RelatedBlogs = ({ related }) => (
  <Fragment>
    {related &&
      related.length &&
      related.map((blog) => (
        <div className="col-md-4" key={blog._id}>
          <BlogSmallCard blog={blog} />
        </div>
      ))}
  </Fragment>
);

export default RelatedBlogs;
