import Layout from "../components/Layout";
import { listBlogwithCategoriesAndTags } from "../actions/blog";
import ShowAllBlogs from "../ui/ShowAllBlogs";
import AllCategories from "../ui/AllCategories";
import AllTags from "../ui/AllTags";
import { withRouter } from "next/router";
import { Fragment, useState } from "react";
import BlogHead from "../ui/BlogHead";
import LoadMoreButton from "../ui/LoadMoreButton";

const Blogs = ({
  blogs,
  categories,
  tags,
  size: blogsSize,
  router,
  blogsLimit,
  blogsSkip,
}) => {
  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(blogsSkip);
  const [size, setSize] = useState(blogsSize);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = async () => {
    const toSkip = skip + limit;
    const data = await listBlogwithCategoriesAndTags(toSkip, limit);
    if (data.error) {
      console.log(data.error);
    } else {
      setLoadedBlogs([...loadedBlogs, ...data.blogs]);
      setSize(data.size);
      setSkip(toSkip);
    }
  };
  return (
    <Fragment>
      <BlogHead router={router} />
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">
                  Programming blog and tutorials
                </h1>
              </div>
              <section>
                <div className="pb-5 text-center">
                  <AllCategories categories={categories} />
                  <br />
                  <AllTags tags={tags} />
                </div>
              </section>
            </header>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <ShowAllBlogs blogs={blogs} />
                <ShowAllBlogs blogs={loadedBlogs} />
                <LoadMoreButton
                  limit={limit}
                  handleClick={loadMore}
                  size={size}
                />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </Fragment>
  );
};

Blogs.getInitialProps = async () => {
  const skip = 0;
  const limit = 2;
  const response = await listBlogwithCategoriesAndTags(skip, limit);
  if (response.error) {
    console.log(response.error);
  } else
    return {
      ...response,
      blogsLimit: limit,
      blogsSkip: skip,
    };
};

export default withRouter(Blogs);
