import React from "react";

type InformationSectionProps = {
  s?: string;
};

const InformationSection: React.FC<InformationSectionProps> = () => {
  return (
    <div className="text-foreground bg-background">
      <div className="flex w-full flex-col text-center items-center justify-center gap-8 max-w-4xl mx-auto px-8 py-38">
        <h2 className="text-sm tracking-widest font-bold uppercase">
          Information
        </h2>
        <span className="text-5xl font-serif tracking-tighter text-center">
          {`It's more than an investment, it is your memory and legacy. Authentic
        Romantics.`}
        </span>
        <p>
          You are a couple who laughs together, explores the known and unknown
          together, seeks to create experiences that you will remember well into
          your old age. You are looking for images that capture your true selves
          together and we are looking to deliver images as unique to you as you
          find each other.
        </p>
      </div>
    </div>
  );
};
export default InformationSection;
