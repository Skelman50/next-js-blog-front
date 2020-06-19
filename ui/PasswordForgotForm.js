const PasswordForgotForm = ({ handleSubmit, handleChange, email, loading }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="email"
        className="form-control"
        required
        onChange={handleChange}
        value={email}
        placeholder="Type your email!"
      />
    </div>
    <div className="form-group">
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Sending" : "Send password reset link"}
      </button>
    </div>
  </form>
);

export default PasswordForgotForm;
