import React from "react";
import FeaturesSection2 from "./../../components/FeaturesSection2";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function ProductsPage(props) {
  const router = useRouter();

  return (
    <FeaturesSection2
      color="white"
      size="medium"
      title="Craft beer delivered right to your door"
      subtitle="What if instead of normal mail, you got normal mail and also beer sometimes. We can make that happen."
      buttonText="Count me in"
      image="https://uploads.divjoy.com/undraw-chatting_2yvo.svg"
      buttonOnClick={() => {
        router.push("/pricing");
      }}
    />
  );
}

export default ProductsPage;
