import FAQSection from "@/components/faqs";
import Guidelines from "@/components/guidelines/guidelines";
import StorySlider from "@/components/story-slider/story-slider";
import React from "react";
import HeroTwo from "../_common/hero-two";
import InformationSection from "../_common/information-section";
import Process from "../_common/the-process";
import ServiceClient from "./_components/service-client";

const ServicesPage: React.FC = () => {
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Services & Pricing"
        className="h-[40vh]"
      />
      <InformationSection />
      <ServiceClient />
      <Guidelines />
      <Process />
      <StorySlider />
      <FAQSection />
    </>
  );
};
export default ServicesPage;
