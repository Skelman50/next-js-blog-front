import ReactGoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../../config";

const GoogleLogin = ({ responseGoogle }) => {
  return (
    <div className="mb-3">
      <ReactGoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login with google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme="dark"
      />
    </div>
  );
};

export default GoogleLogin;
