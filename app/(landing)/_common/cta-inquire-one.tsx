import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type CtaInquireOneProps = {
  title?: string;
};

const CtaInquireOne: React.FC<CtaInquireOneProps> = ({
  title = "Let's create some memories truly meaningful and wonderfully you",
}) => {
  return (
    <section className="bg-accent flex justify-center text-accent-foreground py-20 md:py-0 px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl">
        <div className="w-full flex flex-col md:pr-10 gap-8">
          <h6 className="uppercase tracking-wider font-light text-sm">
            Book a session
          </h6>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light font-serif tracking-tight uppercase">
            {title}
          </h1>
          <p className="text-md tracking-wider font-light leading-6">
            Hope grows golden find eye except darling loved hour else cool
            change. Breeze yours dim work wood, whisper breast air terribly
            spirit. Wave strength better wandering walls walking toward season
            woo times.
          </p>
          <div className="gap-4">
            <Button variant="secondary">Inquire Now</Button>
          </div>
        </div>
        <div className="w-full align-middle justify-center flex">
          <Image
            src={"/assets/images/couple-2.jpg"}
            alt=""
            width={400}
            height={800}
            loading="lazy"
            className="object-cover -translate-y-36 md:-translate-y-20"
          />
        </div>
      </div>
    </section>
  );
};
export default CtaInquireOne;
