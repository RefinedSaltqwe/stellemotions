"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type HeroTwoProps = {
  image: string;
  title: string;
  description?: string;
  className?: string;
};

const HeroTwo: React.FC<HeroTwoProps> = ({
  image,
  title,
  description,
  className = "",
}) => {
  return (
    <section className={cn("relative overflow-hidden text-white", className)}>
      {/* Background Image */}
      <Image src={image} alt={title} fill priority className="object-cover" />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Subtle Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-center">
        <div className="mb-16 flex w-full flex-col items-center px-6 text-center md:mb-20">
          {/* Main Title */}
          <h1
            className="
              font-serif
              text-4xl
              font-light
              leading-none
              md:text-6xl
              lg:text-7xl
            "
          >
            {title}
          </h1>

          {/* Decorative Divider */}
          {description && (
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-10 bg-white/50 md:w-16" />

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-white/90
                  md:text-xs
                  md:tracking-[0.5em]
                "
              >
                {description}
              </p>

              <span className="h-px w-10 bg-white/50 md:w-16" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
