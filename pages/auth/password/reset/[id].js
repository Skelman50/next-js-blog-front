import { withRouter } from "next/router";
import { useState } from "react";
import { resetPassword } from "../../../../actions/auth";
import Layout from "../../../../components/Layout";
import ShowError from "../../../../ui/ShowError";
import ShowSuccess from "../../../../ui/ShowSuccess";
import PasswordResetForm from "../../../../ui/PasswordResetForm";

const ResetPassword = ({ router }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const response = await resetPassword({
      password,
      resetPasswordLink: router.query.id,
    });
    setLoading(false);
    if (response.error) {
      setError(response.error);
    } else {
      setSuccess(response.message);
      setShowForm(false);
      setPassword("");
    }
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Layout>
      <div className="container">
        <h2>Reset your password</h2>
        {error && <ShowError error={error} />}
        {success && <ShowSuccess text={success} />}
        {showForm && (
          <PasswordResetForm
            loading={loading}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </Layout>
  );
};

export default withRouter(ResetPassword);
