import MenuList from "@/app/(landing)/_common/menu-list";
import Socials from "@/components/socials";
import { site } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Watermark */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap">
        <span className="font-serif text-9xl uppercase tracking-wider text-primary-foreground/3">
          {new Array(3).fill(site.name).join(" ")}
        </span>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-20 lg:py-28">
        {/* Description */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-serif text-3xl leading-tight md:text-5xl"
            style={{ color: "#d8d2c3" }}
          >
            We capture <em>real</em> moments and <em>honest</em> emotions.
          </h2>

          <p className="mt-6 text-lg italic" style={{ color: "#d8d2c3" }}>
            The quiet, the joyful, and everything in between.
          </p>

          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {`We're a husband-and-wife photography team based in Regina,
            preserving your story with soft, natural imagery that feels like
            you.`}
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
          <MenuList textSize="text-lg md:text-xl" showSocial={false} />
        </div>

        {/* Social */}
        <div className="mt-14 flex justify-center gap-8 text-xs uppercase tracking-[0.3em] text-primary-foreground">
          <Socials />
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50 md:flex-row md:justify-between">
          <span>© 2026 {site.name}. All rights reserved.</span>

          <span>Developed by Stephen Pelagio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
