"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

type GalleryModalProps = {
  images: string[];
  selectedIndex: number | null;
  onSelect: (index: number | null) => void;
};

const SWIPE_DISTANCE = 50;

export default function GalleryModal({
  images,
  selectedIndex,
  onSelect,
}: GalleryModalProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const open = selectedIndex !== null;

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  const previous = () => {
    if (selectedIndex === null) return;

    onSelect(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const next = () => {
    if (selectedIndex === null) return;

    onSelect(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          previous();
          break;

        case "ArrowRight":
          next();
          break;

        case "Escape":
          onSelect(null);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const diff = touchStart - touchEnd;

    if (diff > SWIPE_DISTANCE) next();
    if (diff < -SWIPE_DISTANCE) previous();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <AnimatePresence>
      {open && currentImage && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close */}

          <button
            onClick={() => onSelect(null)}
            className="absolute right-6 top-6 z-50 rounded-full bg-black/30 p-3 text-white transition hover:bg-black/60"
          >
            <XIcon size={20} />
          </button>

          {/* Previous */}

          <button
            onClick={previous}
            className="absolute left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/30 p-4 text-white transition hover:bg-black/60"
          >
            <CaretLeftIcon size={28} />
          </button>

          {/* Next */}

          <button
            onClick={next}
            className="absolute right-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/30 p-4 text-white transition hover:bg-black/60"
          >
            <CaretRightIcon size={28} />
          </button>

          {/* Counter */}

          <div className="absolute bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/40 px-5 py-2 text-sm text-white">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Image */}

          <div
            className="flex h-full w-full items-center justify-center p-6 md:p-12"
            onClick={() => onSelect(null)}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchMove={(e) => setTouchEnd(e.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.97 }}
              transition={{
                duration: 0.25,
              }}
              className="relative h-full w-full"
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                e.stopPropagation()
              }
            >
              <Image
                src={currentImage}
                alt=""
                fill
                priority
                className="object-contain select-none"
                sizes="100vw"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
