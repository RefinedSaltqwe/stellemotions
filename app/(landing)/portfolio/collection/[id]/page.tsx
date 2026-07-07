import Gallery from "@/app/(landing)/_common/gallery";
import HeroTwo from "@/app/(landing)/_common/hero-two";
import React from "react";

type CollectionPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const CollectionPage: React.FC<CollectionPageProps> = async ({ params }) => {
  const { id } = await params;

  console.log(id);
  return (
    <>
      <HeroTwo
        image="/assets/images/stellemotions-hero.jpg"
        title="Portfolio"
        className="h-screen"
      />
      <Gallery />
    </>
  );
};
export default CollectionPage;
