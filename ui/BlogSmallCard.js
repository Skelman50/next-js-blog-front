import { API } from "../config";
import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";

const BlogSmallCard = ({ blog }) => (
  <article className="mb-4">
    <div className="card">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              src="img img-fluid"
              style={{
                height: "250px",
                width: "100%",
              }}
              srcSet={`${API}/blog/photo/${blog.slug}`}
              alt={blog.slug}
            />
          </a>
        </Link>
      </section>
      <div className="card-body" style={{ minHeight: "400px" }}>
        <section>
          <Link href={blog.slug}>
            <a>
              <h5 className="card-title">{blog.title}</h5>
            </a>
          </Link>
          <div className="card-text">{renderHTML(blog.exerpt)}</div>
        </section>
      </div>
      <div className="card-body">
        Written by{" "}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a>{blog.postedBy.name}</a>
        </Link>{" "}
        | Published {moment(blog.updatedAt).fromNow()}
      </div>
    </div>
  </article>
);

export default BlogSmallCard;
