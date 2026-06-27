import React from "react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    title: "Portfolio",
    description: "View our gallery",
    href: "#",
  },
  {
    title: "Services",
    description: "Wedding & portrait experience",
    href: "#",
  },
  {
    title: "Inquire",
    description: "Let's create something beautiful",
    href: "#",
  },
];

const MarketingSection: React.FC = () => {
  return (
    <section className="bg-[#d8d2c3] pt-16 md:pt-32 pb-23 sm:pb-30 md:pb-23">
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
            <p className="max-w-md leading-relaxed text-foreground">
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
          <div className="col-span-2 md:col-span-5 md:col-start-1 col-start-2 mt-5 md:mt-25">
            <h2 className="font-serif text-6xl sm:text-[5rem] lg:text-[8rem] leading-none  [writing-mode:vertical-rl] [text-orientation:mixed] md:[writing-mode:horizontal-tb] text-primary">
              TRULY
            </h2>
          </div>

          {/* Small Horizontal Image */}
          <div className="col-span-8 col-start-5 sm:col-span-7 sm:col-start-5 md:col-span-6 md:col-start-6 mt-10">
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
          <div className="col-span-6 mt-10">
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
          <div className="col-span-6 md:col-span-5 col-start-7 md:col-start-8 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-[3rem] lg:text-[7rem] leading-none text-primary">
              MADLY
            </h2>

            <p className="mt-8 max-w-xs leading-relaxed text-foreground">
              You are a couple who laughs together, explores the known and
              unknown together, seeks to create experiences that you will
              remember well into your old age.
            </p>
          </div>

          {/* Editorial Quick Links */}
          <div className="col-span-12 md:col-span-6 mt-24 md:pb-20">
            <div className="col-span-12 relative">
              <h2 className="font-serif left-30 sm:left-40 text-center text-6xl md:text-9xl leading-none text-primary absolute -top-23 lg:-top-20">
                DEEPLY
              </h2>
            </div>
            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={`${index}-${link.title}`}
                  href={link.href}
                  className="group flex items-center justify-between border border-primary/15 bg-primary-foreground/20 px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <div>
                    <p className="text-[10px] font-serif uppercase tracking-[0.35em] text-foreground/60 group-hover:text-white/60">
                      {`0${index + 1}`}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl">{link.title}</h3>

                    <p className="mt-1 text-xs tracking-wide opacity-70">
                      {link.description}
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Images */}
          <div className="col-span-12 md:col-span-4 md:col-start-8 md:self-end mt-10 md:mt-24">
            <div className="flex gap-6 items-end">
              <div className="relative h-72 w-[50%]">
                <Image
                  src="/assets/images/couple-5.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-72 w-[50%]">
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
            <h2 className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 font-serif text-6xl sm:text-8xl md:text-9xl leading-none text-primary whitespace-nowrap top-0 md:-top-20">
              IN LOVE
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketingSection;
