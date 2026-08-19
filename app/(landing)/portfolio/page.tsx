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
        image="https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/DSC09263-2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL0RTQzA5MjYzLTIuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzEwNzg1MSwiZXhwIjoyMTAyNDY3ODUxfQ.2gN8qPGkmceriWoWJrgD0ob6O2fgA4_T2oFeI6Y4PT0"
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
