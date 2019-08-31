import React from "react";
import HeroSection from "./../../components/HeroSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function ServicesPage(props) {
  const router = useRouter();

  return (
    <HeroSection
      color="white"
      size="medium"
      title="Your landing page title here"
      subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
      buttonText="Get Started"
      image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
      buttonOnClick={() => {
        router.push("/pricing");
      }}
    />
  );
}

export default ServicesPage;
