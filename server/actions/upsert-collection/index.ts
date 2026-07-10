"use server";

import { InternalServerError } from "@/lib/errors";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";
import z from "zod";
import { collectionSchema, type CollectionSchema } from "./schema";

export async function upsertCollection(data: CollectionSchema) {
  const parsed = collectionSchema.safeParse(data);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error);

    return {
      success: false,
      message: "Validation failed.",
      errors: errors.fieldErrors,
    };
  }

  try {
    const collection = await db.$transaction(async (tx) => {
      const collection = await tx.collection.upsert({
        where: data.id ? { id: data.id } : { id: "00000-XXX-X-0" },
        update: {
          title: parsed.data.title,
          description: parsed.data.description,
          heroImagePath: parsed.data.heroImagePath,
          heroImageUrl: parsed.data.heroImageUrl,
        },
        create: {
          title: parsed.data.title,
          description: parsed.data.description,
          heroImagePath: parsed.data.heroImagePath ?? "",
          heroImageUrl: parsed.data.heroImageUrl ?? "",
        },
      });

      await tx.gallery.deleteMany({
        where: {
          collectionId: collection.id,
        },
      });

      if (parsed.data.gallery?.length) {
        await tx.gallery.createMany({
          data: parsed.data.gallery.map((image) => ({
            imagePath: image.path,
            imageUrl: image.url,
            alt: `image for ${parsed.data.title} collection`,
            caption: `image for ${parsed.data.title} collection`,
            order: image.sort,
            collectionId: collection.id,
          })),
        });
      }

      return collection;
    });

    revalidatePath("/dashboard/collections", "page");
    revalidatePath("/portfolio", "page");

    return {
      success: true,
      data: collection,
      message: data.id
        ? "Collection updated successfully."
        : "Collection created successfully.",
    };
  } catch (error) {
    console.error(error);

    throw new InternalServerError("Failed to save collection.");
  }
}
