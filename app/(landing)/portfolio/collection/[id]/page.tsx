import { getCollection } from "@/server/queries/collections";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import CollectionClient from "../_components/collection-client";

type CollectionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const CollectionPage: React.FC<CollectionPageProps> = async ({ params }) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["collection-", id],
    queryFn: () => getCollection(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CollectionClient id={id} />
    </HydrationBoundary>
  );
};
export default CollectionPage;
