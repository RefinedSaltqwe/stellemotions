"use server";

import { InternalServerError } from "@/lib/errors";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";
import z from "zod";
import { deleteCollectionSchema, type CollectionSchema } from "./schema";

export async function deleteCollection(data: CollectionSchema) {
  const parsed = deleteCollectionSchema.safeParse(data);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error);

    return {
      success: false,
      message: "Validation failed.",
      errors: errors.fieldErrors,
    };
  }

  try {
    const collection = await db.collection.delete({
      where: { id: data.id },
    });

    revalidatePath("/dashboard/gallery", "page");
    revalidatePath("/portfolio", "page");

    return {
      success: true,
      data: collection,
      message: "Collection deleted successfully.",
    };
  } catch (error) {
    console.error(error);

    throw new InternalServerError("Failed to delete collection.");
  }
}
