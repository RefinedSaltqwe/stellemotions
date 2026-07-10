"use client";
import { PlusIcon } from "@phosphor-icons/react";
import React from "react";
import UpsertGalleryDialog from "./upsert-gallery-dialog";

type GalleryToolbarProps = {
  s?: string;
};

const GalleryToolbar: React.FC<GalleryToolbarProps> = () => {
  //useMutation Here to create collection

  return (
    <>
      <div className="justify-end flex w-full">
        <UpsertGalleryDialog
          title="Create Collection"
          description="Add a new collection and images"
          buttonVariant={"default"}
          className=""
        >
          <PlusIcon size={16} weight="bold" />
          New Collection
        </UpsertGalleryDialog>
      </div>
    </>
  );
};
export default GalleryToolbar;
