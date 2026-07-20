import FAQSection from "@/components/faqs";
import Guidelines from "@/components/guidelines/guidelines";
import StorySlider from "@/components/story-slider/story-slider";
import React from "react";
import HeroTwo from "../_common/hero-two";
import InformationSection from "../_common/information-section";
import Process from "../_common/the-process";
import ServiceClient from "./_components/service-client";
import CTASimpleSection from "../_common/cta-simple";

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
      <CTASimpleSection
        eyebrow="Your story starts here."
        title="LET'S TELL YOUR STORY"
        buttonText="INQUIRE"
        buttonHref="/inquire"
      />
      <FAQSection />
    </>
  );
};
export default ServicesPage;
