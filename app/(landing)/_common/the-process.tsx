import { processGuide } from "@/constants";
import React from "react";

type ProcessProps = {
  s?: string;
};

const Process: React.FC<ProcessProps> = () => {
  return (
    <div className="flex w-full bg-foreground text-primary-foreground">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-20 md:py-32 gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Where adventure begins
          </p>

          <h2 className="mt-5 font-serif text-5xl tracking-tight text-muted lg:text-7xl">
            The Stellar Experience
          </h2>
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
              <p className="text-center text-md md:text-sm font-light text-secondary">
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
