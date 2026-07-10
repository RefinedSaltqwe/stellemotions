"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { getCollections } from "@/server/queries/collections";
import { useQuery } from "@tanstack/react-query";
import UpsertGalleryDialog from "@/app/(admin)/dashboard/gallery/_components/upsert-gallery-dialog";

type CollectionGridProps = {
  type: "dashboard" | "landing";
};

const CollectionGrid: React.FC<CollectionGridProps> = ({ type }) => {
  const { data: collections, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections(),
  });

  return (
    <>
      {isLoading ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative aspect-2/1 overflow-hidden rounded-lg"
            >
              <Skeleton className="absolute inset-0 h-full w-full rounded-lg" />

              <div className="absolute inset-0 flex items-end p-6">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-36" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : collections ? (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative aspect-2/1 overflow-hidden rounded-lg"
            >
              <Image
                fill
                alt={collection.title}
                src={collection.heroImageUrl}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

              {type === "dashboard" ? (
                <UpsertGalleryDialog
                  title="Edit Collection"
                  description="Edit collection and images"
                  collection={collection}
                  collectionId={collection.id}
                >
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
                </UpsertGalleryDialog>
              ) : (
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white font-serif ">
                      <Link href={`/portfolio/collection/${collection.id}`}>
                        <span className="absolute inset-0 " />
                        {collection.title}
                      </Link>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                      {collection.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>No collection</div>
      )}
    </>
  );
};
export default CollectionGrid;
