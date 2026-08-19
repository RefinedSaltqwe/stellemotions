"use client";

import UpsertGalleryDialog from "@/app/(admin)/dashboard/gallery/_components/upsert-gallery-dialog";
import { cn } from "@/lib/utils";
import { getCollections } from "@/server/queries/collections";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "./ui/skeleton";

type CollectionGridProps = {
  type: "dashboard" | "landing";
};

const CollectionGrid: React.FC<CollectionGridProps> = ({ type }) => {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
  });

  const [category, setCategory] = useState("All");

  /*
   * Find Uncategorized separately.
   */
  const uncategorizedCollection = useMemo(() => {
    return collections?.find(
      (collection) => collection.title.trim().toLowerCase() === "uncategorized",
    );
  }, [collections]);

  /*
   * Remove Uncategorized from the normal collection list.
   *
   * This list is used for both dashboard and landing.
   */
  const normalCollections = useMemo(() => {
    if (!collections) return [];

    return collections.filter(
      (collection) => collection.title.trim().toLowerCase() !== "uncategorized",
    );
  }, [collections]);

  /*
   * Get categories from normal collections only.
   */
  const categories = useMemo(() => {
    const categoryMap = new Map<string, string>();

    for (const collection of normalCollections) {
      const description = collection.description?.trim();

      if (!description) continue;

      const key = description.toLowerCase();

      if (!categoryMap.has(key)) {
        categoryMap.set(key, description);
      }
    }

    return ["All", ...categoryMap.values()];
  }, [normalCollections]);

  /*
   * Filter normal collections.
   * Uncategorized can never appear here.
   */
  const filteredCollections = useMemo(() => {
    const normalizedCategory = category.trim().toLowerCase();

    if (normalizedCategory === "all") {
      return normalCollections;
    }

    return normalCollections.filter(
      (collection) =>
        collection.description?.trim().toLowerCase() === normalizedCategory,
    );
  }, [normalCollections, category]);

  /*
   * Loading
   */
  if (isLoading) {
    return (
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <Skeleton className="aspect-4/5 w-full" />

            <div className="mt-5 space-y-2">
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  /*
   * No collections at all.
   */
  if (!collections?.length) {
    return (
      <div className="mt-16 text-center text-muted-foreground">
        No collections found.
      </div>
    );
  }

  /*
   * Dashboard card.
   */
  const dashboardCard = (collection: (typeof collections)[number]) => (
    <div className="group relative aspect-2/1 overflow-hidden">
      <Image
        fill
        alt={collection.title}
        src={collection.heroImageUrl}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

      <div className="absolute inset-0 flex cursor-pointer items-end p-6">
        <div>
          <h3 className="font-serif font-semibold text-white">
            <span className="absolute inset-0" />
            {collection.title}
          </h3>

          <p aria-hidden="true" className="mt-1 text-sm text-white/90">
            {collection.description}
          </p>
        </div>
      </div>
    </div>
  );

  /*
   * Dashboard collection card + dialog.
   */
  const dashboardCollection = (collection: (typeof collections)[number]) => (
    <UpsertGalleryDialog
      key={collection.id}
      title="Edit Collection"
      description="Edit collection and images"
      collection={collection}
      collectionId={collection.id}
    >
      <div className="cursor-pointer">{dashboardCard(collection)}</div>
    </UpsertGalleryDialog>
  );

  return (
    <>
      {/* LANDING CATEGORY FILTER */}
      {type === "landing" && (
        <div className="mb-10 flex justify-end">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-56 rounded-none border-x-0 border-t-0 border-b px-0 font-serif text-base shadow-none focus:ring-0">
              <SelectValue placeholder="Category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* NORMAL COLLECTIONS */}
      <section>
        {type === "dashboard" && (
          <div className="mb-6">
            <h2 className="font-serif text-3xl">Collections</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your photography collections.
            </p>
          </div>
        )}

        {filteredCollections.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">
            No collections found.
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3",
              type === "dashboard" ? "gap-y-4" : "gap-y-16",
            )}
          >
            {filteredCollections.map((collection) => {
              /*
               * Dashboard
               */
              if (type === "dashboard") {
                return dashboardCollection(collection);
              }

              /*
               * Landing
               */
              return (
                <Link
                  key={collection.id}
                  href={`/portfolio/collection/${collection.id}`}
                  className="block"
                >
                  <article className="group">
                    <div className="relative aspect-4/5 overflow-hidden bg-muted">
                      <Image
                        src={collection.heroImageUrl}
                        alt={collection.title}
                        fill
                        quality={70}
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/20" />
                    </div>

                    <div className="mt-6">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                        {collection.description}
                      </p>

                      <h3 className="mt-2 font-serif text-3xl leading-none">
                        {collection.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* UNCATEGORIZED - DASHBOARD ONLY */}
      {type === "dashboard" && uncategorizedCollection && (
        <section className="mt-16">
          <div className="mb-6">
            <h2 className="font-serif text-3xl">Uncategorized</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Images that are not assigned to a collection.
            </p>
          </div>

          <div className="grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardCollection(uncategorizedCollection)}
          </div>
        </section>
      )}
    </>
  );
};

export default CollectionGrid;
