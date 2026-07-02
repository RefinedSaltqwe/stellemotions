import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroTwoProps = {
  image: string;
  title: string;
  className?: string;
};

const HeroTwo: React.FC<HeroTwoProps> = ({ image, title, className = "" }) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden text-primary-foreground",
        className,
      )}
    >
      {/* Background Image */}
      <Image src={image} alt="Hero" fill priority className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex flex-col w-full text-xl md:text-normal h-full text-center align-middle justify-center gap-8 items-center font-bold tracking-widest uppercase">
          {title}
        </div>
      </div>
    </section>
  );
};
export default HeroTwo;
