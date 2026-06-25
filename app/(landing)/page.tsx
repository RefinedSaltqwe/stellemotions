import React from "react";
import Hero from "./_common/hero";
import MarketingSection from "./_common/marketing-section";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <MarketingSection />
    </div>
  );
};
export default Home;
