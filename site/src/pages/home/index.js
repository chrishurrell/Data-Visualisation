import React from "react";
import FeaturesSection from "./../../components/FeaturesSection";
import NewsletterSection from "./../../components/NewsletterSection";
import "./styles.scss";

function HomePage(props) {
  return (
    <>
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      <NewsletterSection
        color="white"
        size="medium"
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default HomePage;
