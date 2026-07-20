import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CtaInquireOneProps = {
  title?: string;
};

const CtaInquireOne: React.FC<CtaInquireOneProps> = ({
  title = "Let's tell your story",
}) => {
  return (
    <section className="bg-accent flex justify-center text-accent-foreground pb-0 pt-20 md:py-0 px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl">
        <div className="w-full flex flex-col md:pr-10 -translate-y-20 md:translate-0 md:py-16">
          <h6 className="text-xs font-medium uppercase tracking-[0.35em]">
            Book a session
          </h6>
          <h1 className="mt-5 font-serif text-5xl tracking-tight text-foreground lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 ">
            {`Every story is different, and we'd love to hear yours. Together, we'll create timeless images that feel true to who you are.`}
          </p>
          <div className="mt-10">
            <Button asChild>
              <Link href="/services">See Pricing</Link>
            </Button>
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
