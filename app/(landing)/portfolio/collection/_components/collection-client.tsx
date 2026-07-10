"use client";
import Gallery from "@/app/(landing)/_common/gallery";
import HeroTwo from "@/app/(landing)/_common/hero-two";
import { getCollection } from "@/server/queries/collections";
import { useQuery } from "@tanstack/react-query";
import React from "react";

type CollectionClientProps = {
  id: string;
};

const CollectionClient: React.FC<CollectionClientProps> = ({ id }) => {
  const { data: collection } = useQuery({
    queryKey: ["collection-", id],
    queryFn: () => getCollection(id),
  });

  const images = collection!.gallery.map((image) => image.imageUrl);

  return (
    <>
      <HeroTwo
        image={collection!.heroImageUrl}
        title={collection!.title}
        description={collection!.description!}
        className="h-screen"
      />
      <Gallery images={images} />
    </>
  );
};
export default CollectionClient;
