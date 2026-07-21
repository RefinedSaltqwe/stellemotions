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
    queryFn: () => getCollections(),
  });

  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    if (!collections) return ["All"];

    return [
      "All",
      ...Array.from(
        new Map(
          collections
            .filter((collection) => collection.description?.trim())
            .map((collection) => [
              collection.description!.trim().toLowerCase(),
              collection.description!.trim(),
            ]),
        ).values(),
      ),
    ];
  }, [collections]);

  const filteredCollections = useMemo(() => {
    if (!collections) return [];

    if (category.toLowerCase() === "all") return collections;

    return collections.filter(
      (collection) =>
        collection.description?.trim().toLowerCase() ===
        category.trim().toLowerCase(),
    );
  }, [collections, category]);

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

  if (!collections?.length) {
    return (
      <div className="mt-16 text-center text-muted-foreground">
        No collections found.
      </div>
    );
  }

  return (
    <>
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

      <div
        className={cn(
          "grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3",
          type === "dashboard" ? "gap-y-4" : "gap-y-16",
        )}
      >
        {filteredCollections.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No collections found.
          </div>
        )}
        {filteredCollections.map((collection) => {
          const Card = (
            <article className="group">
              <div className="relative aspect-4/5 overflow-hidden bg-muted">
                <Image
                  src={collection.heroImageUrl}
                  alt={collection.title}
                  fill
                  quality={70}
                  sizes="(max-width:640px) 100vw,
                         (max-width:1024px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/20" />
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
          );

          const DashboardCard = (
            <div
              key={collection.id}
              className="group relative aspect-2/1 overflow-hidden"
            >
              <Image
                fill
                alt={collection.title}
                src={collection.heroImageUrl}
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

          return type === "dashboard" ? (
            <UpsertGalleryDialog
              key={collection.id}
              title="Edit Collection"
              description="Edit collection and images"
              collection={collection}
              collectionId={collection.id}
            >
              <div className="cursor-pointer">{DashboardCard}</div>
            </UpsertGalleryDialog>
          ) : (
            <Link
              key={collection.id}
              href={`/portfolio/collection/${collection.id}`}
              className="block"
            >
              {Card}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CollectionGrid;
