import Layout from "../../components/Layout";
import { Fragment } from "react";
import { getCategory } from "../../actions/category";
import BlogCard from "../../ui/BlogCard";
import CategoryTagHead from "../../ui/CategoryTagHead";
import { getTag } from "../../actions/tag";

const Tag = ({ tag, blogs }) => {
  return (
    <Fragment>
      <CategoryTagHead element={tag} />
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header className="col-md-12 pt-3">
              <h1 className="display-4 font-weight-bold">
                {tag ? tag.name : "No related blogs"}
              </h1>
            </header>
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </main>
      </Layout>
    </Fragment>
  );
};

Tag.getInitialProps = async ({ query }) => {
  const response = await getTag(query.slug);

  if (response.error) {
    console.log(response.error);
  } else {
    return { tag: response.tag, blogs: response.blogs };
  }
};

export default Tag;
