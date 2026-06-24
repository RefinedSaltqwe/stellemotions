"use client";
import { useNavbar } from "@/hooks/store/navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ExploreMenu from "./explore-menu";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const hasTriggeredRef = useRef(false);
  const setShowNav = useNavbar((state) => state.setShowNav);
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();

      if (rect.bottom <= 0 && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        setShowNav(true);
        console.log("Show Navbar");
      }
      if (rect.bottom >= 0 && hasTriggeredRef.current) {
        hasTriggeredRef.current = false;
        setShowNav(false);
        console.log("Hide Navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="relative h-screen overflow-hidden" ref={heroRef}>
      {/* Background Image */}
      <Image
        src="/assets/images/stellemotions-hero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Navigation */}
        {/* Top Left */}
        <div className="absolute top-6 left-6">
          <ExploreMenu />
        </div>

        {/* Right Side Vertical Text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <div
            className="text-xs tracking-[0.25em] text-primary-foreground uppercase"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            ESTD MMXXVI — REGINA, SK
          </div>
        </div>

        {/* Push content to bottom */}
        <div className="flex-1" />

        {/* Bottom Typography */}
        <div className="pb-12 px-8 md:px-16">
          <div className="flex  h-full items-start flex-col xl:flex-row justify-center gap-8 md:gap-16 text-primary-foreground">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl">
              STELLE
            </h1>

            <div className="flex h-full flex-col items-start xl:items-center justify-center text-center text-xs md:text-sm tracking-wide">
              <span>documenting love,</span>
              <span>life & celebration</span>
              <span>one frame at a time</span>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl">
              MOTIONS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
