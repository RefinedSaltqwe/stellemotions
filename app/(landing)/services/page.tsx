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
        image="https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/A7C05044.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL0E3QzA1MDQ0LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMDc1NzQsImV4cCI6MjEwMjQ2NzU3NH0.vwBy8vHmPu0RgNY8IyK2ongWmTZmeK6ZRhe8W3EBJP0"
        title="Investment"
        description="SERVICES & COLLECTIONS"
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
        buttonText="INQUIRE NOW"
        buttonHref="/inquire"
      />
      <FAQSection />
    </>
  );
};
export default ServicesPage;
