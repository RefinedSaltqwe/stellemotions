"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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

const INITIAL_LOAD_COUNT = 6;
const LOAD_BATCH_SIZE = 6;

const getTargetHeight = (width: number) => {
  if (width < MOBILE_BREAKPOINT) return 220;
  if (width < TABLET_BREAKPOINT) return 300;
  return 350;
};

/**
 * Load the natural dimensions of ONE image.
 *
 * This is only used to determine the aspect ratio.
 * It is intentionally not Promise.all()'d for the entire gallery.
 */
const loadImageRatio = (src: string, index: number): Promise<GalleryImage> => {
  return new Promise((resolve) => {
    const img = new window.Image();

    img.onload = () => {
      const ratio =
        img.naturalHeight > 0 ? img.naturalWidth / img.naturalHeight : 1;

      resolve({
        src,
        index,
        ratio,
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
  });
};

export default function GalleryGrid({ images }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  /**
   * Stores only the image ratios that we have discovered.
   *
   * Example:
   *
   * {
   *   0: 0.67,
   *   1: 1.5,
   *   2: 0.8,
   * }
   */
  const [ratios, setRatios] = useState<Record<number, number>>({});

  /**
   * Number of images whose dimensions we have requested.
   */
  const [loadedCount, setLoadedCount] = useState(0);

  /**
   * Reset when the gallery changes.
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRatios({});
    setLoadedCount(0);
  }, [images]);

  /**
   * Progressively load image dimensions.
   *
   * Instead of:
   *
   *     Promise.all(ALL images)
   *
   * we load a small batch at a time.
   *
   * This means the browser does not immediately try to
   * inspect every single gallery image.
   */
  useEffect(() => {
    if (!images.length) return;

    let cancelled = false;

    const startIndex = loadedCount;

    if (startIndex >= images.length) {
      return;
    }

    /**
     * First batch:
     * 6 images
     *
     * Subsequent batches:
     * another 6 images
     */
    const batchSize = startIndex === 0 ? INITIAL_LOAD_COUNT : LOAD_BATCH_SIZE;

    const endIndex = Math.min(startIndex + batchSize, images.length);

    const loadBatch = async () => {
      const batch = images.slice(startIndex, endIndex);

      const results = await Promise.all(
        batch.map((src, batchIndex) =>
          loadImageRatio(src, startIndex + batchIndex),
        ),
      );

      if (cancelled) return;

      setRatios((previous) => {
        const next = { ...previous };

        for (const image of results) {
          next[image.index] = image.ratio;
        }

        return next;
      });

      setLoadedCount(endIndex);
    };

    loadBatch();

    return () => {
      cancelled = true;
    };
  }, [images, loadedCount]);

  /**
   * Observe gallery width.
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

  /**
   * Only use images whose aspect ratios are known.
   *
   * This lets us progressively build the gallery.
   */
  const galleryImages = useMemo<GalleryImage[]>(() => {
    return images
      .map((src, index) => {
        const ratio = ratios[index];

        if (!ratio) {
          return null;
        }

        return {
          src,
          index,
          ratio,
        };
      })
      .filter((image): image is GalleryImage => image !== null);
  }, [images, ratios]);

  /**
   * Build justified rows.
   *
   * The order is always:
   *
   * 1  2  3
   * 4  5
   * 6  7
   * 8  9  10
   *
   * Never masonry-style column ordering.
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
      /**
       * Mobile:
       * maximum 2 images per row.
       */
      if (isMobile && currentRow.length === 2) {
        rows.push(currentRow);
        currentRow = [];
      }

      /**
       * Tablet:
       * maximum 3 images per row.
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

      /**
       * If adding this image makes the row too short,
       * finalize the current row.
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

  /**
   * Important:
   *
   * The images in your gallery don't occupy 100vw.
   *
   * Using 100vw can make Next.js request larger images
   * than necessary.
   */
  const imageSizes =
    "(max-width: 639px) 50vw, " + "(max-width: 1023px) 33vw, " + "25vw";

  const hasImages = images.length > 0;

  const hasLoadedImages = galleryImages.length > 0;

  const allRatiosLoaded = loadedCount >= images.length;

  return (
    <>
      <div ref={containerRef} className="w-full">
        {!hasImages ? null : !hasLoadedImages ? (
          /**
           * Initial loading state.
           *
           * We only show this briefly while the first batch
           * of image dimensions is being discovered.
           */
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

                    /**
                     * Only the first few images are expected
                     * to be above the fold.
                     *
                     * Everything else can lazy-load.
                     */
                    const isPriority = image.index < 4;

                    return (
                      <button
                        key={`${image.src}-${image.index}`}
                        type="button"
                        onClick={() => setSelectedIndex(image.index)}
                        className="group relative shrink-0 cursor-pointer overflow-hidden"
                        style={{
                          width,
                          height: rowHeight,
                        }}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes={imageSizes}
                          priority={isPriority}
                          loading={isPriority ? "eager" : "lazy"}
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </button>
                    );
                  })}
                </div>
              );
            })}
            {!allRatiosLoaded && <div className="h-4" aria-hidden="true" />}
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
