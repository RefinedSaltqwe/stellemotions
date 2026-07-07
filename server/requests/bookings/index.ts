"use server";
import { cache } from "react";
import { db } from "../../db";

export const getAllBookings = cache(async () => {
  //async () :Promise<{ success: boolean; data: Booking[] , message: string} | undefined>
  try {
    const response = await db.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      message: "Something went wrong. Please try again.",
      data: response,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: [],
      message: "Something went wrong. Please try again.",
    };
  }
});

export const getBookingStats = cache(async () => {
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
});
