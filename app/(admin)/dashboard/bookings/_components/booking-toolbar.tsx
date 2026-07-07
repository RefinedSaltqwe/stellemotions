"use client";

import { MagnifyingGlassIcon, PlusIcon } from "@phosphor-icons/react";

import { Input } from "@/components/ui/input";
import UpsertBookingDialog from "./upsert-booking-dialog";

export function BookingToolbar() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full max-w-md">
        <MagnifyingGlassIcon
          size={16}
          className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
        />

        <Input className="pl-9" placeholder="Search bookings..." />
      </div>

      <UpsertBookingDialog buttonVariant={"default"} className="">
        <PlusIcon size={16} weight="bold" />
        New Booking
      </UpsertBookingDialog>
    </div>
  );
}
