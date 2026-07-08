"use client";

import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";

import { Input } from "@/components/ui/input";
import UpsertBookingDialog from "./upsert-booking-dialog";
import { Booking } from "@/prisma/generated/client";
import { Table } from "@tanstack/react-table";

type BookingToolbarProps = {
  table: Table<Booking>;
};

const BookingToolbar: React.FC<BookingToolbarProps> = ({ table }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full max-w-md">
        <MagnifyingGlassIcon
          size={16}
          className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
        />

        <Input
          className="pl-9"
          placeholder="Search bookings..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
        />
      </div>

      <UpsertBookingDialog
        title="Create Booking"
        description="Add a new booking manually."
        buttonVariant={"default"}
        className=""
      >
        <PlusIcon size={16} weight="bold" />
        New Booking
      </UpsertBookingDialog>
    </div>
  );
};

export default BookingToolbar;
