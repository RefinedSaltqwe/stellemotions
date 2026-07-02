import React from "react";
import HeroTwo from "../_common/hero-two";
import InformationSection from "../_common/information-section";
import Pricing from "../_common/pricing";

const ServicesPage: React.FC = () => {
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Services & Pricing"
        className="h-[40vh]"
      />
      <InformationSection />
      <Pricing
        title="Elopements + Intimate Weddings"
        list="Engagement Session, Elopement Guide, 6 hours of wedding coverage, Antonio + Etta, Online Gallery, Organic Photo Album"
        description="Hope grows golden find eye except darling loved hour else cool change. Breeze yours dim work wood, whisper breast air terribly spirit. Wave strength better wandering walls walking toward season woo times."
        position="flex-col-reverse md:flex-row"
        image="/assets/images/couple-2.jpg"
      />
      <Pricing
        title="Elopements + Intimate Weddings"
        list="Engagement Session, Elopement Guide, 6 hours of wedding coverage, Antonio + Etta, Online Gallery, Organic Photo Album"
        description="Hope grows golden find eye except darling loved hour else cool change. Breeze yours dim work wood, whisper breast air terribly spirit. Wave strength better wandering walls walking toward season woo times."
        position="flex-col-reverse md:flex-row-reverse"
        spacing="pt-36"
        image="/assets/images/couple-4.jpg"
      />
      <Pricing
        title="Elopements + Intimate Weddings"
        list="Engagement Session, Elopement Guide, 6 hours of wedding coverage, Antonio + Etta, Online Gallery, Organic Photo Album"
        description="Hope grows golden find eye except darling loved hour else cool change. Breeze yours dim work wood, whisper breast air terribly spirit. Wave strength better wandering walls walking toward season woo times."
        position="flex-col-reverse md:flex-row"
        spacing="pt-36"
        image="/assets/images/couple-2.jpg"
      />
    </>
  );
};
export default ServicesPage;
