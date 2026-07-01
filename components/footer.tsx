import MenuList from "@/app/(landing)/_common/menu-list";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Watermark */}
      <h2 className="pointer-events-none absolute inset-x-0 top-8 text-center font-serif text-6xl sm:text-8xl lg:text-[10rem] leading-none text-primary-foreground/3">
        STELLE
        <br />
        MOTIONS
      </h2>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-20 lg:py-28">
        {/* Description */}
        <div className="mx-auto max-w-xl text-center">
          <p className="font-serif text-2xl md:text-2xl leading-relaxed">
            Timeless, editorial-inspired wedding & portrait photography.
          </p>

          <p className="mt-4 text-sm text-primary-foreground/70 leading-7">
            Capturing authentic love stories with a cinematic and refined
            approach throughout Regina and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-center align-middle items-center flex-col lg:flex-row">
          <MenuList textSize="text-lg md:text-xl" showSocial={false} />
        </div>

        {/* Social */}
        <div className="mt-14 flex justify-center gap-8 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-6 flex flex-col gap-3 text-center text-xs text-primary-foreground/50 md:flex-row md:justify-between">
          <span>© 2026 Stelle Motions. All rights reserved.</span>

          <span>Developed by Stephen Pelagio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
