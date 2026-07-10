import Collection from "@/components/portfolio/collection";
import React from "react";
import CtaInquireOne from "../_common/cta-inquire-one";
import HeroTwo from "../_common/hero-two";
import Gallery from "../_common/gallery";

const images = [
  "/assets/images/couple-3.jpg",
  "/assets/images/couple-4.jpg",
  "/assets/images/couple-5.jpg",
  "/assets/images/couple-1.jpg",
  "/assets/images/couple-2.jpg",
  "/assets/images/couple-3.jpg",
  "/assets/images/couple-4.jpg",
  "/assets/images/couple-3.jpg",
  "/assets/images/couple-4.jpg",
  "/assets/images/couple-5.jpg",
  "/assets/images/couple-6.jpg",
  "/assets/images/couple-4.jpg",
  "/assets/images/couple-3.jpg",
  "/assets/images/couple-4.jpg",
  "/assets/images/couple-5.jpg",
  "/assets/images/couple-6.jpg",
];

const PortfolioPage: React.FC = () => {
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Portfolio"
        className="h-screen"
      />
      <Collection />
      <Gallery images={images} />
      <CtaInquireOne />
    </>
  );
};
export default PortfolioPage;
