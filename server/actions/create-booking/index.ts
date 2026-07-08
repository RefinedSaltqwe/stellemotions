"use server";

import { db } from "@/server/db";
import { inquirySchema, type InquirySchema } from "./schema";
import z from "zod";
import { revalidatePath } from "next/cache";
import { InternalServerError } from "@/lib/errors";
import { Booking } from "@/prisma/generated/client";
import { ActionResult } from "@/types";

export async function upsertBooking(
  data: InquirySchema,
): Promise<ActionResult<Booking>> {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error);

    return {
      success: false,
      message: "Validation failed.",
      errors: errors.fieldErrors,
    };
  }

  try {
    const booking = await db.booking.upsert({
      where: data.id ? { id: data.id } : { id: "00000-XXX-X-0" },
      update: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        location: parsed.data.location,
        service: parsed.data.service,
        status: parsed.data.status,
        date: parsed.data.date,
        message: parsed.data.message,
        updatedAt: new Date(),
      },
      create: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        location: parsed.data.location,
        service: parsed.data.service,
        status: parsed.data.status,
        date: parsed.data.date,
        message: parsed.data.message,
      },
    });
    revalidatePath("/dashboard/bookings", "page");

    return {
      success: true,
      data: booking,
      message: data.id
        ? "Booking updated successfully "
        : "Booking created successfully",
    };
  } catch (error) {
    console.error(error);

    throw new InternalServerError("Failed to save booking.");
  }
}
