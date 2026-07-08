"use client";
import { getAllBookings, getBookingStats } from "@/server/queries/bookings";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BookingTable } from "./booking-table";
import { BookingToolbar } from "./booking-toolbar";
import BookingStats from "./booking.stats";
import { EmptyState } from "./empty-state";

const BookingClient: React.FC = () => {
  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  });

  const { data: stats } = useQuery({
    queryKey: ["bookings-stats"],
    queryFn: getBookingStats,
  });

  return (
    <div className="space-y-6 px-4 lg:px-6">
      <BookingStats total={stats?.total ?? 0} pending={stats?.pending ?? 0} />

      <BookingToolbar />

      {bookings && bookings.length === 0 ? (
        <EmptyState />
      ) : (
        <BookingTable data={bookings ?? []} />
      )}
    </div>
  );
};
export default BookingClient;
