"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { StorySlide } from "@/types";

type Props = {
  slide: StorySlide;
};

export default function Slide({ slide }: Props) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Background Image */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Decorative Lines */}
      <div className="absolute top-10 left-0 right-0 border-t border-white/40" />
      <div className="absolute bottom-10 left-0 right-0 border-t border-white/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] md:text-sm">
            {slide.eyebrow}
          </p>

          {/* Heading */}
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            {slide.title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-white/85 md:text-xl">
            {slide.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
