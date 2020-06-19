import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import { useState, useEffect } from "react";
import { signup } from "../../../../actions/auth";
import ShowError from "../../../../ui/ShowError";
import ShowSuccess from "../../../../ui/ShowSuccess";
import Link from "next/link";

const AccountActivate = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) return;
    activate();
  }, [router.query.id]);

  const activate = async () => {
    const token = router.query.id;
    setLoading(true);
    const response = await signup(token);
    setLoading(false);
    if (response.error) {
      setError(response.error);
    } else {
      setSuccess(response.message);
    }
  };
  return (
    <Layout>
      <div className="container">
        {loading && <h2>Loading...</h2>}
        {error && <ShowError error={error} />}
        {success && (
          <div>
            <ShowSuccess text={success} />
            <Link href="/signin">
              <a className="btn btn-outline-primary">Signin</a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AccountActivate;
