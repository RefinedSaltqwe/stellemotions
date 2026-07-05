import React from "react";
import HeroTwo from "../_common/hero-two";
import InformationSection from "../_common/information-section";
import Pricing from "../_common/pricing";
import Process from "../_common/the-process";
import StorySlider from "@/components/story-slider/story-slider";
import FAQSection from "@/components/faqs";
import Guidelines from "@/components/guidelines/guidelines";

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
        title="Wedding (Full day coverage)"
        list={`Up to 12 Hours of Wedding Day Coverage, 400–500 Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Downloads, Personalized Wedding Timeline Planning, Final Gallery Delivered Within 6–8 Weeks, Travel & Accommodation Fees Apply for Destination Weddings`}
        description={`From the quiet moments before "I do" to the celebration on the dance floor, this collection is designed to preserve your entire wedding story with care and intention.`}
        position="flex-col-reverse md:flex-row"
        spacing="md:pt-10"
        image="/assets/images/couple-2.jpg"
        price="Starting at $2,500"
      />
      <Pricing
        title="Wedding (Half day coverage)"
        list={`Up to 8 Hours of Wedding Day Coverage, 200–300 Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Downloads, Personalized Wedding Timeline Planning, Final Gallery Delivered Within 6–8 Weeks, Travel & Accommodation Fees Apply for Destination Weddings`}
        description={`Perfect for intimate celebrations and shorter wedding days, this collection focuses on the moments that matter most, from your ceremony to portraits and the beginning of your celebration.`}
        position="flex-col-reverse md:flex-row-reverse"
        spacing="pt-36 md:pt-14"
        imagePosition="-translate-y-36 md:-translate-y-0"
        image="/assets/images/couple-4.jpg"
        price="Starting at $1,500"
      />
      <Pricing
        title="Couples & Lifestyle"
        list={`Up to 2 Hours of Session Coverage, 50–100 Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Unlimited Downloads, Outfit & Location Consultation, Final Gallery Delivered Within 2–3 Weeks, Travel Fees May Apply for Locations Outside the Local Area`}
        description="Whether you're celebrating a milestone or simply preserving this season of life, these sessions are designed to capture genuine connection and authentic moments through soft, cinematic imagery. Perfect for couples, families, graduates, creatives, and personal brands."
        position="flex-col-reverse md:flex-row"
        spacing="pt-36 md:pb-10 md:pt-50"
        image="/assets/images/couple-2.jpg"
        price="Starting at $250"
      />
      <Guidelines />
      <Process />
      <StorySlider />
      <FAQSection />
    </>
  );
};
export default ServicesPage;
