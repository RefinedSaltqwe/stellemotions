import { z } from "zod";

export const collectionSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  heroImagePath: z.string().optional(),
  heroImageUrl: z.string().optional(),
  gallery: z
    .array(
      z.object({
        path: z.string(),
        url: z.string(),
        order: z.number().int().nonnegative(),
      }),
    )
    .optional(),
});

export type CollectionSchema = z.infer<typeof collectionSchema>;
