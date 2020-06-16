import Layout from "../../components/Layout";
import { Fragment } from "react";
import { getCategory } from "../../actions/category";
import BlogCard from "../../ui/BlogCard";
import CategoryTagHead from "../../ui/CategoryTagHead";
import { getTag } from "../../actions/tag";

const Category = ({ category, blogs }) => {
  return (
    <Fragment>
      <CategoryTagHead element={category} />
      <Layout>
        <main>
          <div className="container-fluid text-center">
            <header className="col-md-12 pt-3">
              <h1 className="display-4 font-weight-bold">
                {category ? category.name : "No related blogs"}
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

Category.getInitialProps = async ({ query }) => {
  const response = await getCategory(query.slug);

  if (response.error) {
    console.log(response.error);
  } else {
    return { category: response.category, blogs: response.blogs };
  }
};

export default Category;
