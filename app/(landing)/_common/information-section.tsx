import React from "react";

type InformationSectionProps = {
  s?: string;
};

const InformationSection: React.FC<InformationSectionProps> = () => {
  return (
    <div className="text-foreground bg-background">
      <div className="flex w-full flex-col text-center items-center justify-center gap-8 max-w-3xl mx-auto px-8 py-38">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
          Information
        </p>

        <span className="text-5xl font-serif tracking-tighter text-center">
          {`It's more than an investment, it is your memory and legacy. Authentic
        Romantics.`}
        </span>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
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
