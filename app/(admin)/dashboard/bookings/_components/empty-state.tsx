"use client";
import { Button } from "@/components/ui/button";
import { CalendarPlusIcon } from "@phosphor-icons/react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
      <CalendarPlusIcon
        size={48}
        weight="duotone"
        className="text-muted-foreground"
      />

      <h2 className="mt-5 text-xl font-semibold">No bookings yet</h2>

      <p className="text-muted-foreground mt-2 mb-6 max-w-sm text-center">
        Your bookings will appear here once a client submits an inquiry or you
        create one manually.
      </p>

      <Button>Create Booking</Button>
    </div>
  );
}
