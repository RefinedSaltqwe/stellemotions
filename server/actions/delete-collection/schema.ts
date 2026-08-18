import { z } from "zod";

export const deleteCollectionSchema = z.object({
  id: z.string(),
});

export type CollectionSchema = z.infer<typeof deleteCollectionSchema>;
