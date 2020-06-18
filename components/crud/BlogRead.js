import { Fragment, useState, useEffect } from "react";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeBlog } from "../../actions/blog";
import moment from "moment";
import Link from "next/link";

const BlogRead = ({ username }) => {
  const [blogs, setBlogs] = useState([]);
  const [message, setNessage] = useState("");
  const token = getCookie("token");

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const response = await list(username);
    if (response.error) {
      console.log(response.error);
    } else {
      setBlogs(response);
    }
  };

  const deleteConfirm = async (slug) => {
    const confirm = window.confirm(
      "Are your sure you want to delete yor blog?"
    );
    if (confirm) {
      const response = await removeBlog(slug, token);
      if (response.error) {
        console.log(response.error);
      } else {
        await loadBlogs();
        setNessage(response.message);
      }
    }
  };

  const showUpdateButton = (blog) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/${blog.slug}`}>
          <a className="ml-3 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1) {
      return (
        <Link href={`/admin/crud/${blog.slug}`}>
          <a className="ml-3 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    }
  };

  const showAllBlogs = () =>
    blogs.map((blog) => (
      <div key={blog._id} className="mb-5">
        <h3>{blog.title}</h3>
        <p className="mark">
          Written by {blog.postedBy.name} | published on{" "}
          {moment(blog.createdAt).fromNow()}
        </p>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteConfirm(blog.slug)}
        >
          Delete
        </button>
        {showUpdateButton(blog)}
      </div>
    ));
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          {message && <div className="alert alert-warning">{message}</div>}
          {showAllBlogs()}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogRead;
