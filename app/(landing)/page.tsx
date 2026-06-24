import React from "react";
import Hero from "./_common/hero";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <div className="h-[2000px]" />
    </div>
  );
};
export default Home;
