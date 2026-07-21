"use client";

import { useEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageCompression from "browser-image-compression";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { MAX_SIZE } from "@/constants";
import { cn } from "@/lib/utils";
import {
  deleteImage,
  deleteImages,
  uploadImage,
} from "@/server/actions/handle-images";
import {
  collectionSchema,
  CollectionSchema,
} from "@/server/actions/upsert-collection/schema";
import { Collection } from "@/server/actions/upsert-collection/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, ImagesIcon, XIcon } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { upsertCollection } from "@/server/actions/upsert-collection";

type UpsertGalleryDialogProps = {
  title: string;
  description: string;
  collection?: Collection;
  collectionId?: string;
  children: React.ReactNode;
};

type ImageData = {
  path: string;
  url: string;
  order: number;
};

const UpsertGalleryDialog: React.FC<UpsertGalleryDialogProps> = ({
  collection,
  children,
  title,
  description,
}) => {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [heroError, setHeroError] = useState(false);
  const [image, setImage] = useState<ImageData | null>(
    collection
      ? {
          url: collection.heroImageUrl,
          path: collection.heroImagePath,
          order: 0,
        }
      : null,
  );
  const [images, setImages] = useState<ImageData[]>(
    collection?.gallery.map((image) => ({
      path: image.imagePath,
      url: image.imageUrl,
      order: image.order,
    })) ?? [],
  );

  const fileInputRefHero = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const form = useForm<CollectionSchema>({
    resolver: zodResolver(collectionSchema),
    defaultValues: {
      id: collection?.id,
      title: collection?.title ?? "",
      description: collection?.description ?? "",
      heroImagePath: collection?.heroImagePath ?? "",
      heroImageUrl: collection?.heroImageUrl ?? "",
      gallery:
        collection?.gallery.map((image) => ({
          path: image.imagePath,
          url: image.imageUrl,
          order: image.order,
        })) ?? [],
    },
  });

  const { mutate: mutateUpsertGallery, isPending: upsertingGallery } =
    useMutation({
      mutationFn: upsertCollection,
      onSuccess: async (data) => {
        setSaved(true);
        toast.success("Success", {
          description: data.message,
        });
        await queryClient.invalidateQueries({
          queryKey: ["collections"],
        });
        form.reset();
        setImages([]);
        setImage(null);
        setOpen(false);
      },
      onError: (error: Error) => {
        toast.error("Upload failed", {
          description: error.message,
        });
      },
      onSettled: () => {},
    });

  const { mutateAsync: uploadImageMutation, isPending: isUploading } =
    useMutation({
      mutationFn: uploadImage,
      onError: (error: Error) => {
        toast.error("Upload failed", {
          description: error.message,
        });
      },
    });

  const { mutateAsync: deleteImageMutation } = useMutation({
    mutationFn: deleteImage,
    onError: (error: Error) => {
      toast.error("Deletion failed", {
        description: error.message,
      });
    },
  });

  const { mutateAsync: deleteImagesMutation } = useMutation({
    mutationFn: deleteImages,
    onError: (error: Error) => {
      toast.error("Deletion failed", {
        description: error.message,
      });
    },
  });

  const handleImageUpload = async (
    mutliple: boolean,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const startSort = images.length;

    try {
      // Process each file sequentially to handle large uploads gracefully
      for (const [index, file] of Array.from(files).entries()) {
        if (file.size > MAX_SIZE) {
          toast.error(
            `${file.name} is ${(file.size / 1024 / 1024).toFixed(1)}MB.`,
            {
              description: "Maximum allowed size is 10MB",
            },
          );
          return;
        }

        const compressedImage = await imageCompression(file, {
          maxSizeMB: 2,
          maxWidthOrHeight: 3000,
          useWebWorker: true,
        });

        const formData = new FormData();
        formData.append("image", compressedImage);

        const response = await uploadImageMutation(formData);

        if (mutliple) {
          setImages((prev) => [
            ...prev,
            {
              url: response.url,
              path: response.path,
              order: startSort + index,
            },
          ]);
        } else {
          setImage({ url: response.url, path: response.path, order: 0 });
        }
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveImage = async (path: string, multiple: boolean) => {
    const result = await deleteImageMutation(path);
    if (result.success) {
      if (multiple) {
        setImages(images.filter((prev) => prev.path !== path));
      } else {
        setImage(null);
      }
    }
  };

  const handleDialogClosed = async () => {
    try {
      const promises = [];

      if (images.length > 0) {
        promises.push(deleteImagesMutation(images.map((image) => image.path)));

        setImages([]);
      }

      if (image) {
        promises.push(deleteImageMutation(image.path));
        setImage(null);
      }

      await Promise.all(promises);

      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  function onSubmit(data: CollectionSchema) {
    console.log("Submit");
    if (!image) {
      setHeroError(true);
      return;
    }
    setHeroError(false);

    const collectionData = {
      ...data,
      heroImagePath: image?.path,
      heroImageUrl: image?.url,
      gallery: images,
    };

    mutateUpsertGallery(collectionData);
  }

  useEffect(() => {
    form.reset({
      id: collection?.id,
      title: collection?.title ?? "",
      description: collection?.description ?? "",
      heroImagePath: collection?.heroImagePath ?? "",
      heroImageUrl: collection?.heroImageUrl ?? "",
      gallery:
        collection?.gallery.map((image) => ({
          path: image.imagePath,
          url: image.imageUrl,
          order: image.order,
        })) ?? [],
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImage(
      collection
        ? {
            path: collection.heroImagePath,
            url: collection.heroImageUrl,
            order: 0,
          }
        : null,
    );

    setImages(
      collection?.gallery.map((image) => ({
        path: image.imagePath,
        url: image.imageUrl,
        order: image.order,
      })) ?? [],
    );

    setHeroError(false);
  }, [open, collection, form]);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (!isOpen && !saved && !collection) {
          handleDialogClosed();
        }

        if (isOpen) {
          setSaved(false);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="flex max-h-[90dvh] flex-col sm:max-w-2xl"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>

          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4 overflow-y-auto px-1">
          <form
            id="booking-inquiry-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FieldGroup>
              {/* Title + Description */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* First Name */}
                <Controller
                  name="title"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Title</FieldLabel>

                      <Input
                        {...field}
                        placeholder="Blessy + Kcref"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                {/* Location */}
                <Controller
                  name="description"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Description</FieldLabel>

                      <Input
                        {...field}
                        placeholder="Wedding, Maternity, Lifestyle, Couple"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              {/* Uploaded Single Image */}
              <div className="flex flex-col w-full gap-4">
                <FieldLabel>{`Hero Image (Landscape)`}</FieldLabel>
                <div className="flex items-center gap-4 w-full">
                  {/* Image Upload Section */}
                  <div className="flex items-center gap-4 w-full">
                    {/* Add Image Button */}
                    <div
                      onClick={() =>
                        !isUploading && fileInputRefHero.current?.click()
                      }
                      className={cn(
                        `shrink-0 size-24 border-2 border-dashed border-muted-foreground/25
                        rounded-lg flex flex-col items-center 
                        justify-center cursor-pointer hover:border-muted-foreground/50
                        hover:bg-muted/80 bg-background/80 
                        transition-colors shadow-sm `,

                        isUploading && "opacity-50 cursor-not-allowed",
                      )}
                    >
                      {isUploading ? (
                        <Spinner />
                      ) : (
                        <ImageIcon className="h-5 w-5 text-muted-foreground mb-1" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {isUploading ? "Uploading..." : "Select File"}
                      </span>
                    </div>
                    <input
                      ref={fileInputRefHero}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(false, e)}
                      className="hidden"
                    />

                    {image && (
                      <div className="flex-1 min-w-0 overflow-x-auto flex">
                        <div className="shrink-0 relative size-24 rounded-lg overflow-hidden border">
                          <Image
                            src={image.url}
                            alt={`Hero Image`}
                            fill
                            className="object-cover"
                            sizes="96px"
                            unoptimized
                          />

                          <button
                            onClick={() => handleRemoveImage(image.path, false)}
                            type="button"
                            className="absolute top-1 right-1 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10"
                          >
                            <XIcon className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {heroError && (
                  <span className="text-destructive">
                    Hero image is required
                  </span>
                )}
              </div>

              {/* Upload Multiple Images */}
              <div className="flex flex-col w-full gap-4">
                <FieldLabel>Upload Gallery</FieldLabel>
                <div className="flex items-center gap-4 w-full">
                  {/* Image Upload Section */}
                  <div className="flex items-center gap-4 w-full">
                    {/* Add Image Button */}
                    <div
                      onClick={() =>
                        !isUploading && fileInputRef.current?.click()
                      }
                      className={cn(
                        `shrink-0 size-24 border-2 border-dashed border-muted-foreground/25
                        rounded-lg flex flex-col items-center 
                        justify-center cursor-pointer hover:border-muted-foreground/50
                        hover:bg-muted/80 bg-background/80 
                        transition-colors shadow-sm `,

                        isUploading && "opacity-50 cursor-not-allowed",
                      )}
                    >
                      {isUploading ? (
                        <Spinner />
                      ) : (
                        <ImagesIcon className="h-5 w-5 text-muted-foreground mb-1" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {isUploading ? "Uploading..." : "Select Files"}
                      </span>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleImageUpload(true, e)}
                      className="hidden"
                    />

                    {images.length > 0 && (
                      <div className="flex-1 min-w-0 overflow-x-auto flex">
                        {images.map((image, index) => (
                          <div
                            key={image.path || index}
                            className="shrink-0 relative size-24 rounded-lg overflow-hidden border"
                          >
                            <Image
                              src={image.url}
                              alt={`Upload ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="96px"
                              unoptimized
                            />

                            <button
                              onClick={() =>
                                handleRemoveImage(image.path, true)
                              }
                              type="button"
                              className="absolute top-1 right-1 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10"
                            >
                              <XIcon className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FieldGroup>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                form="booking-inquiry-form"
                disabled={upsertingGallery || isUploading}
              >
                {upsertingGallery ? <Spinner /> : title}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertGalleryDialog;
