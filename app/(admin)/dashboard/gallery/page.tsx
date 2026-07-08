import CollectionGrid from "@/components/collection-grid";
import { collections } from "@/constants";
import React from "react";

type GalleryPageProps = {
  s?: string;
};

const GalleryPage: React.FC<GalleryPageProps> = () => {
  return (
    <div className="space-y-6 px-4 lg:px-6 max-w-7xl w-full mx-auto align-middle">
      <CollectionGrid collections={collections} />
    </div>
  );
};
export default GalleryPage;
