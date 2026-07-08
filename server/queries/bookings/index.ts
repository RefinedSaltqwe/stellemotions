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
    const today = new Date();

    const next30Days = new Date(today);
    next30Days.setDate(today.getDate() + 30);

    const [total, pending, upcoming] = await Promise.all([
      db.booking.count(),

      db.booking.count({
        where: {
          status: "PENDING",
        },
      }),

      db.booking.count({
        where: {
          date: {
            gte: today,
            lte: next30Days,
          },
          status: {
            in: ["PENDING", "CONFIRMED"],
          },
        },
      }),
    ]);

    return {
      total,
      pending,
      upcoming,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch booking stats.");
  }
});
