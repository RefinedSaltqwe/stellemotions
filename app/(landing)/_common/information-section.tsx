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
          eyebrow="OUR APPROACH"
          title="Every story deserves to be remembered."
          description="No two celebrations or seasons of life are the same. We take the time to understand what matters to you, creating photographs that feel natural, personal, and true to your story."
        />
      </div>
    </div>
  );
};
export default InformationSection;
