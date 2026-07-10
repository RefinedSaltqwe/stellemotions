import React from "react";

type CollectionPageProps = {
  params: Promise<{
    collectionId: string;
  }>;
};

const CollectionPage: React.FC<CollectionPageProps> = async ({ params }) => {
  const { collectionId } = await params;

  console.log(collectionId);
  return (
    <div className="gap-4 flex ">
      Have a good coding <span>{collectionId}</span>
    </div>
  );
};
export default CollectionPage;
