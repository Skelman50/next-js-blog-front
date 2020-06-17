import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import BlogCategories from "./BlogCategories";
import BlogTags from "./BlogTags";
import { API } from "../config";

const BlogCard = ({ blog }) => {
  return (
    <article>
      <div className="lead pb-4">
        <header>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h2 className="display-4 pb-3 pt-3 font-weight-bold">
                {blog.title}
              </h2>
            </a>
          </Link>
        </header>
        <section>
          <p className="mark ml-1 pb-2 pt-2">
            Written by{" "}
            <Link href={`/profile/${blog.postedBy.username}`}>
              <a>{blog.postedBy.name}</a>
            </Link>{" "}
            | Published {moment(blog.updatedAt).fromNow()}
          </p>
        </section>
        <section>
          <BlogCategories blog={blog} />
          <BlogTags blog={blog} />
          <br />
          <br />
        </section>
        <div className="row">
          <div className="col-md-4">
            <section>
              <img
                src="img img-fluid"
                style={{
                  maxHeight: "300px",
                  objectFit: "contain",
                  width: "100%",
                }}
                srcSet={`${API}/blog/photo/${blog.slug}`}
                alt={blog.slug}
              />
            </section>
          </div>
          <div className="col-md-8">
            <section>
              <div className="pb-3">{renderHTML(blog.exerpt)}</div>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="btn btn-primary pt-2">Read more</a>
              </Link>
            </section>
          </div>
        </div>
      </div>
      <hr />
    </article>
  );
};

export default BlogCard;
