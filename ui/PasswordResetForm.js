const PasswordResetForm = ({
  handleSubmit,
  handleChange,
  password,
  loading,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="password"
        className="form-control"
        required
        onChange={handleChange}
        value={password}
        placeholder="Type your new password!"
      />
    </div>
    <div className="form-group">
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Sending" : "Send password reset link"}
      </button>
    </div>
  </form>
);

export default PasswordResetForm;
