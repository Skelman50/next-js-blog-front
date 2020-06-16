import { useState, useEffect } from "react";
import Router, { withRouter } from "next/router";
import { singleBlog, updateBlog } from "../../actions/blog";
import CreateBlogForm from "../../ui/CreateBlogForm";
import { getTags } from "../../actions/tag";
import { getCategories } from "../../actions/category";
import { blogToggle } from "../../helpers/blogToggle";
import BlogToggleGroup from "../../ui/BlogToggleGroup";
import ShowBlogCheckboxes from "../../ui/ShowBlogCheckboxes";
import { getCookie, isAuth } from "../../actions/auth";

const BlogUpdate = ({ router }) => {
  const [body, setBody] = useState("");
  const [formData, setFormData] = useState("");
  const [values, setValues] = useState({ title: "" });
  const [categoties, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setFormData(new FormData());
    initBlog();
    initTags();
    initCategories();
  }, [router]);

  const token = getCookie("token");

  const initBlog = async () => {
    if (router.query.slug) {
      const response = await singleBlog(router.query.slug);
      if (response.error) {
        setError(response.error);
      } else {
        setValues({ ...values, title: response.title });
        setBody(response.body);
        setCheckedCategory(response.categories.map((item) => item._id));
        setCheckedTag(response.tags.map((item) => item._id));
      }
    }
  };

  const initCategories = async () => {
    const response = await getCategories();
    if (response.error) {
      return setError(response.error);
    }
    setCategories(response);
  };
  const initTags = async () => {
    const response = await getTags();
    if (response.error) {
      return setError(response.error);
    }
    setTags(response);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const valueToSet = name === "photo" ? files[0] : value;
    formData.set(name, valueToSet);
    setValues({ ...values, [name]: value });
    setError("");
    setSuccess("");
  };

  const handleCategoryToggle = (id) => {
    setError("");
    const result = blogToggle(id, checkedCategory);
    formData.set("categories", result);
    setCheckedCategory(result);
  };

  const handleTagToggle = (id) => {
    setError("");
    const result = blogToggle(id, checkedTag);
    formData.set("tags", result);
    setCheckedTag(result);
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
  };

  const editBlog = async (e) => {
    e.preventDefault();
    const response = await updateBlog(formData, token, router.query.slug);

    if (response.error) {
      setError(response.error);
    } else {
      setSuccess("Blog Updated!");
      if (isAuth() && isAuth().role === 1) {
        Router.replace(`/admin/crud/${router.query.slug}`);
      } else if (isAuth() && isAuth().role === 0) {
        Router.replace(`/user/crud/${router.query.slug}`);
      }
    }
  };

  const showCategories = (
    <ShowBlogCheckboxes
      list={categoties}
      handleChange={handleCategoryToggle}
      checkedList={checkedCategory}
    />
  );

  const showTags = (
    <ShowBlogCheckboxes
      list={tags}
      handleChange={handleTagToggle}
      checkedList={checkedTag}
    />
  );

  const showError = error && <div className="alert alert-danger">{error}</div>;
  const showSuccess = success && (
    <div className="alert alert-success">{success}</div>
  );

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          <CreateBlogForm
            values={values}
            handleChange={handleChange}
            handleBody={handleBody}
            body={body}
            handleSubmit={editBlog}
            update={true}
          />
          <div className="pt-3">
            {showError}
            {showSuccess}
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group pb-2">
            <BlogToggleGroup
              showTags={showTags}
              showCategories={showCategories}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogUpdate);
