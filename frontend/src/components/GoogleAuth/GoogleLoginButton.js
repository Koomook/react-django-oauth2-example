import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = props => {
  const responseGoogleSuccess = response => {
    console.log(response);
    if (response.profileObj) {
      localStorage.setItem("goog_avatar_url", response.profileObj.imageUrl);
      localStorage.setItem("goog_name", response.profileObj.name);
      localStorage.setItem("goog_email", response.profileObj.email);
    }
    props.convertGoogleToken(response.Zi.access_token);
  };
  const responseGoogleFailure = response => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="564437000281-r12q2mk5ofte7o5320gsrgrn8c8obmf2.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      className="loginBtn loginBtn--google"
      prompt="select_account"
      redirectUri="http://localhost:3000/secret/"
    />
  );
};

export default GoogleLoginButton;
