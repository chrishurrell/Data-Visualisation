import React from "react";
import ChangePassSection from "./../../components/ChangePassSection";
import "./styles.scss";

function UpdatepassPage(props) {
  return (
    <ChangePassSection
      color="white"
      size="medium"
      title="Choose a new password"
      subtitle=""
      buttonText="Change password"
    />
  );
}

export default UpdatepassPage;
