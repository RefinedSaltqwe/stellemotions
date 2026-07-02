import React from "react";
import Image from "next/image";

type HeroTwoProps = {
  image: string;
  title: string;
};

const HeroTwo: React.FC<HeroTwoProps> = ({ image, title }) => {
  return (
    <section className="relative h-screen overflow-hidden text-primary-foreground">
      {/* Background Image */}
      <Image src={image} alt="Hero" fill priority className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex flex-col w-full text-xl md:text-normal h-full text-center align-middle justify-center gap-8 items-center font-bold tracking-widest uppercase">
          {title}
          <div>IDK YET====================</div>
        </div>
      </div>
    </section>
  );
};
export default HeroTwo;
