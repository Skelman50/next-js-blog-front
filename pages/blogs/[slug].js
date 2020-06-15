import moment from "moment";
import renderHTML from "react-render-html";

import Layout from "../../components/Layout";
import { singleBlog } from "../../actions/blog";
import { API } from "../../config";
import BlogCategories from "../../ui/BlogCategories";
import BlogTags from "../../ui/BlogTags";
import { Fragment } from "react";
import BlogHead from "../../ui/BlogHead";

const SingleBlog = ({ blog }) => {
  return (
    <Fragment>
      <BlogHead blog={blog} />
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row">
                  <img
                    srcSet={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>
              <section>
                <div className="container">
                  <h2 className="display-2 pb-3 pt-3 text-center font-weight-bold">
                    {blog.title}
                  </h2>
                  <p className="lead mt-3 mark">
                    Written by {blog.postedBy.name} | Published{" "}
                    {moment(blog.updatedAt).fromNow()}
                  </p>
                  <div className="pb-3">
                    <BlogCategories blog={blog} />
                    <BlogTags blog={blog} />
                    <br />
                    <br />
                  </div>
                </div>
              </section>
            </div>
            <div className="container">
              <section>
                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
              </section>
            </div>
            <div className="container pb-5">
              <h4 className="text-center pt-5 pb-5 h2">Related Blogs</h4>
              <hr />
              <p>Show related blogs</p>
            </div>
            <div className="container pb-5">
              <p>Show comments</p>
            </div>
          </article>
        </main>
      </Layout>
    </Fragment>
  );
};

SingleBlog.getInitialProps = async ({ query }) => {
  const blog = await singleBlog(query.slug);
  if (blog.error) {
    console.log(blog.error);
  } else {
    return { blog };
  }
};

export default SingleBlog;
