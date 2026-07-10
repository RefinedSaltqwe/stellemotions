import CollectionGrid from "@/components/collection-grid";
import { getCollections } from "@/server/queries/collections";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import GalleryToolbar from "./_components/gallery-toolbar";

const GalleryPage: React.FC = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["collections"],
    queryFn: () => getCollections(),
  });
  return (
    <div className="space-y-6 px-4 lg:px-6 max-w-7xl w-full mx-auto align-middle">
      <div className="flex flex-col gap-4">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GalleryToolbar />
          <CollectionGrid type="dashboard" />
        </HydrationBoundary>
      </div>
    </div>
  );
};
export default GalleryPage;
