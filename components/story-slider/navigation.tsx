"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

type Props = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Navigation({
  current,
  total,
  onPrevious,
  onNext,
}: Props) {
  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="absolute bottom-16 left-1/2 z-30 flex -translate-x-1/2 items-center gap-10 text-white">
      {/* Previous */}
      <button
        onClick={onPrevious}
        aria-label="Previous Slide"
        className="group rounded-full border border-white/30 p-4 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
      >
        <ArrowLeftIcon
          size={22}
          weight="light"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      </button>

      {/* Counter */}
      <div className="flex items-center gap-4 text-sm tracking-[0.35em] uppercase">
        <span>{format(current + 1)}</span>

        <div className="h-px w-16 bg-white/40" />

        <span>{format(total)}</span>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="group rounded-full border border-white/30 p-4 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
      >
        <ArrowRightIcon
          size={22}
          weight="light"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
