import CollectionGrid from "@/components/collection-grid";
import { collections } from "@/constants";
import React from "react";
import GalleryToolbar from "./_components/gallery-toolbar";

const GalleryPage: React.FC = () => {
  // const collections = await getCollections();
  return (
    <div className="space-y-6 px-4 lg:px-6 max-w-7xl w-full mx-auto align-middle">
      <div className="flex flex-col gap-4">
        <GalleryToolbar />
        <CollectionGrid collections={collections} type="dashboard" />
      </div>
    </div>
  );
};
export default GalleryPage;
