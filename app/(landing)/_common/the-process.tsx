import { processGuide } from "@/constants";
import React from "react";

type ProcessProps = {
  s?: string;
};

const Process: React.FC<ProcessProps> = () => {
  return (
    <div className="flex w-full bg-foreground text-primary-foreground">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-20 md:py-32 gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-sm sm:text-md text-center uppercase font-bold">
            Where adventure begins
          </h2>
          <h1 className="text-5xl sm:text-7xl text-center font-serif uppercase tracking-tight">
            The Stellar Experience
          </h1>
        </div>
        <div className="flex flex-col w-full items-start gap-12 md:gap-4 md:flex-row px-14 md:px-0">
          {processGuide.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center align-top w-full gap-8 p-4 "
            >
              <div className="flex items-center justify-center text-md md:text-xs font-serif">
                0{index + 1}
              </div>
              <h3 className="text-3xl md:text-xl text-center font-serif italic">
                {step.title}
              </h3>
              <p className="text-center text-md md:text-sm font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Process;
