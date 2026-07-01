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
        <div className="flex w-full text-xl mt-10 md:text-normal h-full text-center align-middle justify-center  items-center font-bold tracking-widest uppercase">
          {title}
        </div>
      </div>
    </section>
  );
};
export default HeroTwo;
