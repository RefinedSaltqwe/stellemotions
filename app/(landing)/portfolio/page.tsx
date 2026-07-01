import React from "react";
import HeroTwo from "../_common/hero-two";
import Gallery from "../_common/gallery";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Portfolio"
      />
      <Gallery />
    </>
  );
};
export default PortfolioPage;
