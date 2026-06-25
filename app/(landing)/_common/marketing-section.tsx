import React from "react";
import Image from "next/image";

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-[#d8d2c3] py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Top Left Image */}
          <div className="col-span-5 md:col-span-3">
            <div className="relative aspect-3/4 w-full">
              <Image
                src="/assets/images/couple-1.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Top Right Text */}
          <div className="col-span-7 md:col-span-5 md:col-start-6">
            <p className="max-w-md text-sm leading-relaxed text-neutral-700">
              <span className="font-semibold uppercase">
                We Are Stelle Motions,
              </span>{" "}
              a husband-and-wife photography team based in Regina, Saskatchewan.
              We specialize in capturing authentic portraits, heartfelt
              weddings, and meaningful moments with a timeless and cinematic
              approach.
            </p>
          </div>

          {/* TRULY */}
          <div className="col-span-5 mt-20">
            <h2 className="font-serif text-4xl sm:text-[5rem] lg:text-[8rem] leading-none text-white">
              TRULY
            </h2>
          </div>

          {/* Small Horizontal Image */}
          <div className="col-span-7 sm:col-span-5 md:col-span-4 md:col-start-8 mt-10">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/assets/images/couple-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Main Large Image */}
          <div className="col-span-7 md:col-span-6 mt-10">
            <div className="relative">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src="/assets/images/couple-3.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Small Image */}
              <div className="absolute -left-10 md:-left-20 -bottom-20 md:bottom-10 h-50 w-34 md:h-64 md:w-48 shadow-lg">
                <Image
                  src="/assets/images/couple-4.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* DEEPLY Text Block */}
          <div className="col-span-5 col-start-8 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-[3rem] lg:text-[7rem] leading-none text-primary-foreground">
              DEEPLY
            </h2>

            <p className="mt-8 max-w-xs text-sm leading-relaxed text-neutral-700">
              You are a couple who laughs together, explores the known and
              unknown together, seeks to create experiences that you will
              remember well into your old age.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-5 md:col-span-4 mt-24">
            <div className="space-y-5 text-sm uppercase tracking-[0.2em] text-neutral-700">
              <div className="border-b border-neutral-500 pb-3">
                View The Portfolio
              </div>

              <div className="border-b border-neutral-500 pb-3">
                Browse Our Services
              </div>

              <div className="border-b border-neutral-500 pb-3">
                Read The Journal
              </div>

              <div className="border-b border-neutral-500 pb-3">
                {`Let's Connect`}
              </div>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="col-span-7 md:col-span-4 md:col-start-8 mt-24">
            <div className="flex gap-6">
              <div className="relative h-72 w-40">
                <Image
                  src="/assets/images/couple-5.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72 w-40">
                <Image
                  src="/assets/images/couple-6.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Heading */}
          <div className="col-span-12 relative">
            <h2 className="font-serif text-center text-6xl lg:text-9xl leading-none text-white absolute top-0 lg:-top-20">
              MADLY IN LOVE
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketingSection;
