"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import GalleryModal from "./gallery-modal";

type Props = {
  images: string[];
};

type GalleryImage = {
  src: string;
  index: number;
  ratio: number;
};

const GAP = 16;
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1024;

const getTargetHeight = (width: number) => {
  if (width < MOBILE_BREAKPOINT) return 220;
  if (width < TABLET_BREAKPOINT) return 300;
  return 350;
};

export default function GalleryGrid({ images }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  /*
   * Load image dimensions.
   *
   * We use the natural dimensions only to determine
   * the correct aspect ratio for the justified layout.
   */
  const loadImage = useCallback(
    (src: string, index: number): Promise<GalleryImage> =>
      new Promise((resolve) => {
        const img = new window.Image();

        img.onload = () => {
          resolve({
            src,
            index,
            ratio: img.naturalWidth / img.naturalHeight,
          });
        };

        img.onerror = () => {
          resolve({
            src,
            index,
            ratio: 1,
          });
        };

        img.src = src;
      }),
    [],
  );

  /*
   * Load all image ratios whenever the image list changes.
   */
  useEffect(() => {
    let cancelled = false;

    const loadImages = async () => {
      const result = await Promise.all(
        images.map((src, index) => loadImage(src, index)),
      );

      if (!cancelled) {
        setGalleryImages(result);
      }
    };

    loadImages();

    return () => {
      cancelled = true;
    };
  }, [images, loadImage]);

  /*
   * Observe the gallery width.
   */
  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth;

      setContainerWidth((previousWidth) =>
        previousWidth === width ? previousWidth : width,
      );
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * Build the justified rows.
   *
   * Images are always processed in their original order:
   *
   * 1  2  3
   * 4  5  6
   * 7  8  9
   */
  const rows = useMemo(() => {
    if (!containerWidth || !galleryImages.length) {
      return [];
    }

    const isMobile = containerWidth < MOBILE_BREAKPOINT;
    const isTablet =
      containerWidth >= MOBILE_BREAKPOINT && containerWidth < TABLET_BREAKPOINT;

    const rows: GalleryImage[][] = [];

    let currentRow: GalleryImage[] = [];

    for (const image of galleryImages) {
      /*
       * Mobile: exactly 2 images per row.
       */
      if (isMobile && currentRow.length === 2) {
        rows.push(currentRow);
        currentRow = [];
      }

      /*
       * Tablet: maximum 3 images per row.
       */
      if (isTablet && currentRow.length === 3) {
        rows.push(currentRow);
        currentRow = [];
      }

      const testRow = [...currentRow, image];

      const totalRatio = testRow.reduce((sum, item) => sum + item.ratio, 0);

      const totalGap = (testRow.length - 1) * GAP;

      const calculatedHeight = (containerWidth - totalGap) / totalRatio;

      const targetHeight = getTargetHeight(containerWidth);

      /*
       * If the new image makes the row too short,
       * start a new row.
       */
      if (currentRow.length > 0 && calculatedHeight < targetHeight) {
        rows.push(currentRow);
        currentRow = [image];
      } else {
        currentRow = testRow;
      }
    }

    if (currentRow.length) {
      rows.push(currentRow);
    }

    return rows;
  }, [containerWidth, galleryImages]);

  return (
    <>
      <div ref={containerRef} className="w-full">
        {!galleryImages.length ? (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="aspect-3/4 animate-pulse bg-muted"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {rows.map((row, rowIndex) => {
              const totalRatio = row.reduce(
                (sum, image) => sum + image.ratio,
                0,
              );

              const totalGap = (row.length - 1) * GAP;

              const rowHeight = (containerWidth - totalGap) / totalRatio;

              return (
                <div key={rowIndex} className="flex w-full gap-4">
                  {row.map((image) => {
                    const width = image.ratio * rowHeight;

                    return (
                      <button
                        key={`${image.src}-${image.index}`}
                        type="button"
                        onClick={() => setSelectedIndex(image.index)}
                        className="group relative shrink-0 overflow-hidden cursor-pointer"
                        style={{
                          width,
                          height: rowHeight,
                        }}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes="100vw"
                          loading="lazy"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <GalleryModal
        images={images}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
    </>
  );
}
