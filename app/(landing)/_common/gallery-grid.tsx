"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "./gallery-modal";

type Props = {
  images: string[];
};

export default function GalleryGrid({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="relative mb-4 block w-full cursor-pointer overflow-hidden break-inside-avoid"
          >
            <Image
              src={image}
              alt=""
              width={800}
              height={1200}
              loading="lazy"
              className="h-auto w-full object-cover transition duration-700 hover:scale-105"
            />
          </button>
        ))}
      </div>

      <GalleryModal
        images={images}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
    </>
  );
}
