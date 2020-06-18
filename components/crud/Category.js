import { useState, Fragment, useEffect } from "react";
import { getCookie } from "../../actions/auth";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../actions/category";

const Category = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState("");

  const token = getCookie("token");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const data = await getCategories();
    if (data.error) {
      setError(data.error);
    } else {
      setCategories(data);
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
    setError(false);
    setSuccess(false);
    setRemoved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await createCategory({ name: category }, token);
    console.log(data);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      loadCategories();
      setError(false);
      setSuccess(true);
      setCategory("");
    }
  };

  const handleDelete = async (slug) => {
    setLoadingRemove(slug);
    const data = await removeCategory(slug, token);
    setLoadingRemove("");
    if (data.error) {
      setError(data.error);
    } else {
      await loadCategories();
      setRemoved(true);
    }
  };

  const mouseMoveHandler = () => {
    setSuccess(false);
    setError(false);
    setRemoved(false);
  };

  const newCategoryForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          value={category}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" disabled={loading}>
          Create
        </button>
      </div>
    </form>
  );

  const showCategories = () => {
    return categories.map((category, idx) => (
      <button
        key={`${category}${idx}`}
        title="Double click to delete."
        className="btn btn-outline-primary mr-1 ml-1 mt-3"
        onDoubleClick={() => handleDelete(category.slug)}
        disabled={category.slug === loadingRemove}
      >
        {category.name}
      </button>
    ));
  };

  const showSuccess = success && (
    <p className="text-success">Category is created</p>
  );

  const showError = error && <p className="text-danger">{error}</p>;

  const showRemoved = removed && (
    <p className="text-danger">Category is removed</p>
  );

  return (
    <Fragment>
      {showSuccess}
      {showError}
      {showRemoved}
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryForm}
        {showCategories()}
      </div>
    </Fragment>
  );
};

export default Category;
