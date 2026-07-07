"use server";

import { db } from "@/server/db";
import { inquirySchema, type InquirySchema } from "./schema";
import z from "zod";

export async function createBooking(data: InquirySchema) {
  const parsed = inquirySchema.safeParse(data);

  if (!parsed.success) {
    const errors = z.flattenError(parsed.error);

    return {
      success: false,
      errors: errors.fieldErrors,
    };
  }

  try {
    const booking = await db.booking.create({
      data: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        location: parsed.data.location,
        service: parsed.data.service,
        date: parsed.data.date,
        message: parsed.data.message,
      },
    });

    return {
      success: true,
      booking,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
