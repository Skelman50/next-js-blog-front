import Link from "next/link";
import Layout from "../components/Layout";

const Signin = () => {
  return (
    <Layout>
      <h1>signin</h1>
      <Link href="/">
        <a>HOME</a>
      </Link>
    </Layout>
  );
};

export default Signin;
