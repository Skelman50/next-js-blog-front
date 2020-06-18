import ProfileUpdate from "../../components/auth/ProfileUpdate";
import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";

const UpdateProfile = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid">
          <div className="row">
            <ProfileUpdate />
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UpdateProfile;
