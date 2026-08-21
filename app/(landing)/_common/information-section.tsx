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
          title="Photography for the moments that matter."
          description="Your story is one of a kind. We're here to capture it honestly, beautifully, and intentionally, creating photographs you'll return to for years to come."
        />
      </div>
    </div>
  );
};
export default InformationSection;
