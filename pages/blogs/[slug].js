import Layout from "../../components/Layout";
import { singleBlog, listRelated } from "../../actions/blog";
import { Fragment, useState, useEffect } from "react";
import BlogHead from "../../ui/BlogHead";
import BlogIntro from "../../ui/BlogIntro";
import BlogContent from "../../ui/BlogContent";

const SingleBlog = ({ blog }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    loadRelated();
  }, []);

  const loadRelated = async () => {
    const response = await listRelated(blog);
    if (response.error) {
      console.log(error);
    } else {
      setRelated(response);
    }
  };
  return (
    <Fragment>
      <BlogHead blog={blog} />
      <Layout>
        <main>
          <article>
            <BlogIntro blog={blog} />
            <BlogContent blog={blog} related={related} />
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
