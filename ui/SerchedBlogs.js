import Link from "next/link";

const SearchedBlogs = ({ message, result }) => (
  <div
    className="jumbotron bg-white"
    style={{ paddingBottom: "30px", paddingTop: "0" }}
  >
    {message && <p className="mt-4 text-muted text-italic">{message}</p>}
    {result.map((blog) => (
      <div key={blog._id}>
        <Link href={`/blogs/${blog.slug}`}>
          <a className="text-primary">{blog.title}</a>
        </Link>
      </div>
    ))}
  </div>
);

export default SearchedBlogs;
