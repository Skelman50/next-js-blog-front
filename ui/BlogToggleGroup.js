const BlogToggleGroup = ({ handleChange, showCategories, showTags }) => (
  <div className="col-md-4">
    <div>
      <div className="form-group pb-2">
        <h5>Featured Image</h5>
        <hr />
        <small style={{ display: "block" }} className="text-muted mb-1">
          Max size: 1mb
        </small>
        <label className="btn btn-outline-info">
          Upload image
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleChange}
            hidden
          />
        </label>
      </div>
      <h5>Categories</h5>
      <hr />
      <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
        {showCategories}
      </ul>
    </div>
    <div>
      <h5>Tags</h5>
      <hr />
      <ul style={{ maxHeight: "200px", overflowY: "auto" }}>{showTags}</ul>
    </div>
  </div>
);

export default BlogToggleGroup;
