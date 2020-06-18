const ContactFormUi = ({
  handleSubmit,
  handleChange,
  values,
  buttonText,
  loading,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="lead">Message</label>
      <textarea
        name="message"
        value={values.message}
        onChange={handleChange}
        className="form-control"
        rows={10}
        required
      />
    </div>
    <div className="form-group">
      <label className="lead">Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <label className="lead">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="form-group">
      <button className="btn btn-primary" disabled={loading}>
        {buttonText}
      </button>
    </div>
  </form>
);

export default ContactFormUi;
