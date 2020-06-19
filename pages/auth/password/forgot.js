import { useState } from "react";
import { forgotPassword } from "../../../actions/auth";
import ShowError from "../../../ui/ShowError";
import ShowSuccess from "../../../ui/ShowSuccess";
import PasswordForgotForm from "../../../ui/PasswordForgotForm";
import Layout from "../../../components/Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError("");
    setMessage("");
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    setEmail("");
    const response = await forgotPassword(email);
    setLoading(false);
    if (response.error) {
      setError(response.error);
    } else {
      setMessage(response.message);
      setEmail("");
      setShowForm(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2>Forgot password?</h2>
        <hr />
        {error && <ShowError error={error} />}
        {message && <ShowSuccess text={message} />}
        {showForm && (
          <PasswordForgotForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            email={email}
            loading={loading}
          />
        )}
      </div>
    </Layout>
  );
};

export default ForgotPassword;
