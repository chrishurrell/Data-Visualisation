import React from "react";
import SignInSection from "./../../components/SignInSection";
import "./styles.scss";

function LoginPage(props) {
  return (
    <SignInSection
      color="white"
      size="medium"
      title="Welcome back"
      subtitle=""
      buttonText="Sign in"
    />
  );
}

export default LoginPage;
