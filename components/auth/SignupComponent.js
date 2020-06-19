import { useState, Fragment, useEffect } from "react";
import { isAuth, preSignup } from "../../actions/auth";
import Router from "next/router";

const SignupComponent = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const showLoading = loading && (
    <div className="alert alert-info">Loading...</div>
  );

  const showError = error && <div className="alert alert-danger">{error}</div>;

  const showMessage = message && (
    <div className="alert alert-success">{message}</div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const response = await preSignup(values);
    setLoading(false);
    if (response.error) {
      setError(response.error);
    } else {
      setvalues({ name: "", password: "", email: "" });
      setError("");
      setMessage(response.message);
      setShowForm(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setvalues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };
  const signupForm = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="form-control"
          placeholder="Type your name"
          value={values.name}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="Type your email"
          value={values.email}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange}
          type="password"
          name="password"
          className="form-control"
          placeholder="Type your password"
          value={values.password}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" disabled={loading}>
          Signup
        </button>
      </div>
    </form>
  );
  return (
    <Fragment>
      {showLoading}
      {showMessage}
      {showError}
      {showForm && signupForm}
    </Fragment>
  );
};

export default SignupComponent;
