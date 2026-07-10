"use server";

import { MAX_SIZE } from "@/constants";
import { getCurrentUser } from "@/lib/auth/current-user";
import { supabaseAdmin } from "@/server/storage";
import { randomUUID } from "crypto";

const BUCKET_NAME = "stelle_motions";

export async function uploadImage(formData: FormData) {
  const file = formData.get("image") as File;
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  if (!file) {
    throw new Error("No image uploaded.");
  }

  // Optional validation
  if (!file.type.startsWith("image/")) {
    throw new Error("Only images are allowed.");
  }

  if (file.size > MAX_SIZE) {
    throw new Error("Maximum file size is 10MB.");
  }

  const extension = file.name.split(".").pop();
  const filename = `${randomUUID()}.${extension}`;

  const bytes = await file.arrayBuffer();

  const { error } = await supabaseAdmin.storage
    .from(BUCKET_NAME)
    .upload(filename, bytes, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabaseAdmin.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filename);

  return {
    path: filename,
    url: data.publicUrl,
  };
}

export async function deleteImage(path: string) {
  const { error } = await supabaseAdmin.storage
    .from(BUCKET_NAME)
    .remove([path]);

  if (error) {
    throw error;
  }

  return {
    success: true,
  };
}
export async function deleteImages(path: string[]) {
  const { error } = await supabaseAdmin.storage.from(BUCKET_NAME).remove(path);

  if (error) {
    throw error;
  }

  return {
    success: true,
  };
}
