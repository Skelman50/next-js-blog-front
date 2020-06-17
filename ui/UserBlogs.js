import { Fragment } from "react";
import Link from "next/link";

const UserBlogs = ({ blogs, user }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title bg-primary pb-4 pt-4 pl-4 pr-4 text-light">
          Recent blog by {user.name}
        </h5>
        <Fragment>
          {blogs.map((blog) => (
            <div key={blog._id} className="mb-4 mt-4">
              <Link href={`/blogs/${blog.slug}`}>
                <a className="lead">{blog.title}</a>
              </Link>
            </div>
          ))}
        </Fragment>
      </div>
    </div>
  </div>
);

export default UserBlogs;
