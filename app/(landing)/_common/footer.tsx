import React from "react";
import MenuList from "./menu-list";

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col w-full bg-primary text-primary-foreground/10 items-center">
      <div className="flex items-center justify-center align-middle">
        <div className="py-12 px-8 md:px-16">
          <h1 className="font-serif text-6xl md:text-8xl xl:text-9xl">
            STELLE MOTIONS
          </h1>
        </div>
      </div>
      <div className="flex text-primary-foreground font-serif flex-row max-w-6xl w-full justify-between">
        <div className="p-4 justify-self-start">
          <MenuList textSize="text-3xl" />
        </div>
        <div className="flex w-full justify-end items-center p-4 text-right">
          <span>
            Specializing in timeless, editorial-inspired portraiture & intimate
            celebrations
          </span>
        </div>
      </div>
      <div className="flex w-full max-w-6xl px-6 justify-between md:flex-row flex-col text-center my-4 text-primary-foreground/50 gap-2 font-light">
        <span className="text-sm">
          © 2026 Stelle Motions. All rights reserved.
        </span>
        <span className="text-xs">Developed by: Stephen Pelagio</span>
      </div>
    </section>
  );
};
export default Footer;
