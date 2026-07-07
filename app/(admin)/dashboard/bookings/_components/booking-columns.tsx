"use client";

import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { BookingStatusBadge } from "./booking-status-badge";
import UpsertBookingDialog from "./upsert-booking-dialog";
import { Button } from "@/components/ui/button";
import { Booking } from "@/server/actions/create-booking/types";

function formatService(service: string) {
  return service
    .toLowerCase()
    .replace("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.firstName} {row.original.lastName}
        </p>

        <p className="text-muted-foreground text-xs">{row.original.email}</p>
      </div>
    ),
  },
  {
    accessorKey: "service",
    header: "Service",
    cell: ({ row }) => <span>{formatService(row.original.service)}</span>,
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "date",
    header: "Event Date",
    cell: ({ row }) =>
      row.original.date
        ? format(new Date(row.original.date), "MMM dd, yyyy")
        : "-",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <BookingStatusBadge status={row.original.status} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex w-full gap-2 m-0 justify-center align-middle">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => console.log(row.original)}
          >
            <EyeIcon size={16} />
          </Button>
          <UpsertBookingDialog
            key={row.original.id}
            title="Update Booking"
            description="Edit booking"
            buttonVariant={"ghost"}
            className=""
            size={"icon"}
            booking={row.original}
          >
            <PencilSimpleIcon size={16} />
          </UpsertBookingDialog>
          <Button variant={"destructive"} size={"icon"}>
            <TrashIcon size={16} />
          </Button>
        </div>
      );
    },
  },
];
