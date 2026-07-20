"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navigation from "./navigation";
import Slide from "./slider";
import { slides } from "@/constants/services";

export default function StorySlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const previous = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  /**
   * Keyboard Support
   */

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);

  /**
   * Preload next image
   */

  useEffect(() => {
    const nextSlide = slides[(current + 1) % slides.length];

    const img = new Image();

    img.src = nextSlide.image;
  }, [current]);

  /**
   * Mobile Swipe
   */

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > minSwipeDistance;

    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) next();

    if (isRightSwipe) previous();
  };

  return (
    <section
      className="relative h-[80vh] w-full overflow-hidden bg-primary"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="sync">
        <Slide key={slides[current].id} slide={slides[current]} />
      </AnimatePresence>

      <Navigation
        current={current}
        total={slides.length}
        onNext={next}
        onPrevious={previous}
      />
    </section>
  );
}
