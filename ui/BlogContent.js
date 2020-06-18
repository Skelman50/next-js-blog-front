import { Fragment } from "react";
import renderHTML from "react-render-html";
import RelatedBlogs from "./RelatedBlogs";
import DisqusThread from "../components/DisqusThread";

const BlogContent = ({ blog, related }) => (
  <Fragment>
    <div className="container">
      <section>
        <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
      </section>
    </div>
    <div className="container pb-5">
      <h4 className="text-center pt-5 pb-5 h2">Related Blogs</h4>
      <hr />
      <div className="row">
        <RelatedBlogs related={related} />
      </div>
    </div>
    <div className="container pb-5">
      <div className="pt-5">
        <DisqusThread
          id={blog._id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    </div>
  </Fragment>
);

export default BlogContent;
