import React from "react";
import Heading from "./heading";

type InformationSectionProps = {
  s?: string;
};

const InformationSection: React.FC<InformationSectionProps> = () => {
  return (
    <div className="text-foreground bg-background">
      <div className="flex w-full flex-col text-center items-center justify-center gap-8 max-w-3xl mx-auto px-8 py-38">
        <Heading
          textColor="blackMuted"
          eyebrow="Information"
          title="These are the moments you'll hold onto forever."
          description="Your story is one of a kind. We are here to capture it honestly, so you can relive it for years to come."
        />
      </div>
    </div>
  );
};
export default InformationSection;
