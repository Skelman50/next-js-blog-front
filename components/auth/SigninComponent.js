import { useState, Fragment, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";

const SigninComponent = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const showLoading = loading && (
    <div className="alert alert-info">Loading...</div>
  );

  const showError = error && <div className="alert alert-danger">{error}</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const response = await signin(values);
    setLoading(false);
    if (response.error) {
      setError(response.error);
    } else {
      authenticate(response, () => {
        if (isAuth() && isAuth().role === 1) {
          Router.push("/admin");
        } else {
          Router.push("/user");
        }
      });
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
  const signinForm = (
    <form onSubmit={handleSubmit}>
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
          Signin
        </button>
      </div>
    </form>
  );
  return (
    <Fragment>
      {showLoading}
      {showError}
      {signinForm}
      <Link href="/auth/password/forgot">
        <a className="btn btn-outline-danger btn-sm">Forgot your password?</a>
      </Link>
    </Fragment>
  );
};

export default SigninComponent;
