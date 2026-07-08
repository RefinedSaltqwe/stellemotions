"use server";
import { cache } from "react";
import { db } from "../../db";

export const getAllBookings = cache(async () => {
  try {
    return await db.booking.findMany({
      orderBy: {
        date: "asc",
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch bookings.");
  }
});

export const getBookingStats = cache(async () => {
  try {
    const total = await db.booking.count();

    const pending = await db.booking.count({
      where: {
        status: "PENDING",
      },
    });

    return {
      total,
      pending,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch booking stats.");
  }
});
