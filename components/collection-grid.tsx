"use client";

import UpsertGalleryDialog from "@/app/(admin)/dashboard/gallery/_components/upsert-gallery-dialog";
import { getCollections } from "@/server/queries/collections";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

type CollectionGridProps = {
  type: "dashboard" | "landing";
};

const CollectionGrid: React.FC<CollectionGridProps> = ({ type }) => {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections(),
  });

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
    <div
      className={cn(
        "mt-12 grid gap-x-4 sm:grid-cols-2 lg:grid-cols-3",
        type === "dashboard" ? "gap-y-4" : "gap-y-16",
      )}
    >
      {collections.map((collection) => {
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
                Collection
              </p>

              <h3 className="mt-2 font-serif text-3xl leading-none">
                {collection.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {collection.description}
              </p>
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

            <div className="absolute inset-0 flex items-end p-6 cursor-pointer">
              <div>
                <h3 className="font-semibold text-white font-serif ">
                  <span className="absolute inset-0 " />
                  {collection.title}
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
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
  );
};

export default CollectionGrid;
