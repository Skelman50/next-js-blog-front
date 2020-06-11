import { useState } from "react";

const SignupComponent = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    message: "",
    showForm: true,
    loading: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(values);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues((prevValues) => {
      return {
        ...prevValues,
        error: false,
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
        <button className="btn btn-primary">Signup</button>
      </div>
    </form>
  );
  return signupForm;
};

export default SignupComponent;
