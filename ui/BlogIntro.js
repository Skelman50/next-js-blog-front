import { API } from "../config";
import BlogCategories from "./BlogCategories";
import BlogTags from "./BlogTags";
import moment from "moment";
import Link from "next/link";

const BlogIntro = ({ blog }) => (
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
          Written by{" "}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a>{blog.postedBy.name} </a>
          </Link>
          | Published {moment(blog.updatedAt).fromNow()}
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
);

export default BlogIntro;
