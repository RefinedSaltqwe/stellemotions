import React from "react";
import HeroTwo from "../_common/hero-two";
import Gallery from "../_common/gallery";
import CtaInquireOne from "../_common/cta-inquire-one";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Portfolio"
        className="h-screen"
      />
      <Gallery />
      <CtaInquireOne />
    </>
  );
};
export default PortfolioPage;
