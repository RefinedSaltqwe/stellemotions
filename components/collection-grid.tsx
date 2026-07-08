import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CollectionGridProps = {
  collections: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
};

const CollectionGrid: React.FC<CollectionGridProps> = ({ collections }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 lg:gap-4">
      {collections.map((collection, index) => (
        <div
          key={collection.title + index}
          className={cn(
            "group relative aspect-2/1 overflow-hidden rounded-lg",
            index % 5 === 0
              ? "sm:row-span-2 sm:aspect-square"
              : "sm:aspect-auto",
          )}
        >
          <Image
            fill
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            src={collection.image}
            className="absolute size-full object-cover group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
          />
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <h3 className="font-semibold text-white font-serif ">
                <Link href={collection.link}>
                  <span className="absolute inset-0 " />
                  {collection.title}
                </Link>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                {collection.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CollectionGrid;
