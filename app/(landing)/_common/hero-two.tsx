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
    <section
      className={cn(
        "relative overflow-hidden text-primary-foreground",
        className,
      )}
    >
      {/* Background Image */}
      <Image src={image} alt={title} fill priority className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-xl font-bold tracking-widest uppercase md:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-2xl text-sm font-normal normal-case tracking-normal text-primary-foreground/90 md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroTwo;
