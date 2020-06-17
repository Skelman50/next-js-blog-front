import Layout from "../../components/Layout";
import { getPublicProfile } from "../../actions/user";

import UserBlogs from "../../ui/UserBlogs";
import UserProfileIntro from "../../ui/UserProfileIntro";
import UserContactForm from "../../ui/UserContactForm";
import { Fragment } from "react";
import UserProfileHead from "../../ui/UserProfileHead";

const PublicProfile = ({ user, blogs, error }) => {
  return (
    <Fragment>
      {user && <UserProfileHead user={user} />}
      <Layout>
        <UserProfileIntro user={user} />
        <br />
        {user && (
          <div className="container">
            <div className="row">
              <UserBlogs user={user} blogs={blogs} />
              <UserContactForm user={user} />
            </div>
          </div>
        )}
      </Layout>
    </Fragment>
  );
};

PublicProfile.getInitialProps = async ({ query }) => {
  const response = await getPublicProfile(query.username);
  if (response.error) {
    console.log(response.error);
    return { error: response.error };
  } else {
    return { ...response };
  }
};

export default PublicProfile;
