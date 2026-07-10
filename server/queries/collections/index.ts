"use server";
import { Collection } from "@/server/actions/upsert-collection/types";
import { db } from "@/server/db";
import { cache } from "react";

export const getCollections = cache(async (): Promise<Collection[]> => {
  try {
    return await db.collection.findMany({
      orderBy: {
        createdAt: "asc",
      },
      include: {
        gallery: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch bookings.");
  }
});

export const getCollection = cache(async (id: string): Promise<Collection> => {
  try {
    const result = await db.collection.findUnique({
      where: {
        id,
      },
      include: {
        gallery: true,
      },
    });

    if (!result) {
      throw new Error("Collection doesn't exist.");
    }

    return result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch bookings.");
  }
});
