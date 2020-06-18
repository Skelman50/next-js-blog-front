const ProfileUpdateForm = ({ handleChange, handleSubmit, values, loading }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <small style={{ display: "block" }} className="text-muted mb-1">
        Max size: 1mb
      </small>
      <label className="btn btn-outline-info">
        Profile Photo
        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={handleChange}
          hidden
        />
      </label>
    </div>
    <div className="form-group">
      <label className="text-muted">Username</label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        name="username"
        value={values.username}
      />
    </div>
    <div className="form-group">
      <label className="text-muted">Name</label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        name="name"
        value={values.name}
      />
    </div>
    <div className="form-group">
      <label className="text-muted">Email</label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        name="email"
        value={values.email}
      />
    </div>
    <div className="form-group">
      <label className="text-muted">About</label>
      <textarea
        type="text"
        className="form-control"
        onChange={handleChange}
        name="about"
        value={values.about}
      />
    </div>
    <div className="form-group">
      <label className="text-muted">Password</label>
      <input
        type="password"
        className="form-control"
        onChange={handleChange}
        name="password"
        value={values.password}
      />
    </div>
    <div className="form-group">
      <button className="btn btn-primary" type="submit" disabled={loading}>
        Update profile
      </button>
    </div>
  </form>
);

export default ProfileUpdateForm;
