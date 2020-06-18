import { withRouter } from "next/router";

import { useState, useEffect } from "react";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { blogToggle } from "../../helpers/blogToggle";
import { getCookie } from "../../actions/auth";
import { createTBlog } from "../../actions/blog";
import CreateBlogForm from "../../ui/CreateBlogForm";
import ShowBlogCheckboxes from "../../ui/ShowBlogCheckboxes";
import BlogToggleGroup from "../../ui/BlogToggleGroup";

const CreateBlog = ({ router }) => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("body")) {
      return JSON.parse(localStorage.getItem("body"));
    } else {
      return false;
    }
  };

  const [body, setBody] = useState(blogFromLS());
  const [formData, setFormData] = useState("");
  const [values, setValues] = useState({ title: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [categoties, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getCookie("token");

  useEffect(() => {
    setFormData(new FormData());
    initCategories();
    initTags();
  }, [router]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await createTBlog(formData, token);
    setLoading(false);
    if (response.error) {
      return setError(response.error);
    }
    setValues({ ...values, title: "" });
    setSuccess(`A new blog titled "${response.title}" is created!`);
    setBody("");
    setError("");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const valueToSet = name === "photo" ? files[0] : value;
    formData.set(name, valueToSet);
    setValues({ ...values, [name]: value });
    setFormData(formData);
    setError("");
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("body", JSON.stringify(e));
    }
  };

  const handleCategoryToggle = (id) => {
    setError("");
    const result = blogToggle(id, checkedCategory);
    console.log(result);
    formData.set("categories", result);
    setCheckedCategory(result);
  };

  const handleTagToggle = (id) => {
    setError("");
    const result = blogToggle(id, checkedTag);
    formData.set("tags", result);
    setCheckedTag(result);
  };

  const createBlogForm = (
    <CreateBlogForm
      handleBody={handleBody}
      body={body}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      loading={loading}
    />
  );

  const showCategories = (
    <ShowBlogCheckboxes
      list={categoties}
      checkedList={checkedCategory}
      handleChange={handleCategoryToggle}
    />
  );

  const showTags = (
    <ShowBlogCheckboxes
      list={tags}
      checkedList={checkedTag}
      handleChange={handleTagToggle}
    />
  );

  const showError = error && <div className="alert alert-danger">{error}</div>;
  const showSuccess = success && (
    <div className="alert alert-success">{success}</div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm}
          <div>
            {showError}
            {showSuccess}
          </div>
        </div>
        <BlogToggleGroup
          showTags={showTags}
          showCategories={showCategories}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default withRouter(CreateBlog);
