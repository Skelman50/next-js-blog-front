import { useState, Fragment, useEffect } from "react";
import { getCookie } from "../../actions/auth";
import { createTag, getTags, removetag, getTag } from "../../actions/tag";

const Tag = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingRemove, setLoadingRemove] = useState("");

  const token = getCookie("token");

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    const data = await getTags();
    if (data.error) {
      setError(data.error);
    } else {
      setTags(data);
    }
  };

  const handleChange = (e) => {
    setTag(e.target.value);
    setError(false);
    setSuccess(false);
    setRemoved(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await createTag({ name: tag }, token);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      loadTags();
      setError(false);
      setSuccess(true);
      setTag("");
    }
  };

  const handleDelete = async (slug) => {
    setLoadingRemove(slug);
    const data = await removetag(slug, token);
    setLoadingRemove("");
    if (data.error) {
      setError(data.error);
    } else {
      await loadTags();
      setRemoved(true);
    }
  };

  const mouseMoveHandler = () => {
    setSuccess(false);
    setError(false);
    setRemoved(false);
  };

  const newTagsForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          value={tag}
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

  const showtags = () => {
    return tags.map((tag, idx) => (
      <button
        key={`${tag}${idx}`}
        title="Double click to delete."
        className="btn btn-outline-primary mr-1 ml-1 mt-3"
        onDoubleClick={() => handleDelete(tag.slug)}
        disabled={tag.slug === loadingRemove}
      >
        {tag.name}
      </button>
    ));
  };

  const showSuccess = success && <p className="text-success">Tag is created</p>;

  const showError = error && <p className="text-danger">{error}</p>;

  const showRemoved = removed && <p className="text-danger">Tag is removed</p>;

  return (
    <Fragment>
      {showSuccess}
      {showError}
      {showRemoved}
      <div onMouseMove={mouseMoveHandler}>
        {newTagsForm}
        {showtags()}
      </div>
    </Fragment>
  );
};

export default Tag;
