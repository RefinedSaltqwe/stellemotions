"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DotsThreeOutlineVerticalIcon,
  DotsThreeVerticalIcon,
  EyeIcon,
  ImagesIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { format } from "date-fns";
import { BookingStatusBadge } from "./booking-status-badge";
import UpsertBookingDialog from "./upsert-booking-dialog";
import { Button } from "@/components/ui/button";
import { Booking } from "@/server/actions/create-booking/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function formatService(service: string) {
  return service
    .toLowerCase()
    .replace("_", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export const columns: ColumnDef<Booking>[] = [
  {
    id: "client",
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
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
          <div className="hidden md:flex items-center gap-1">
            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => console.log(row.original)}
            >
              <ImagesIcon size={16} />
            </Button>
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
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-15 w-15 p-0 items-center align-middle"
                >
                  <DotsThreeOutlineVerticalIcon size={32} weight="fill" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => console.log(row.original)}
                  className="gap-2 cursor-pointer"
                >
                  <ImagesIcon size={16} />
                  Gallery
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => console.log(row.original)}
                  className="gap-2 cursor-pointer"
                >
                  <EyeIcon size={16} />
                  View
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <UpsertBookingDialog
                    key={row.original.id}
                    title="Update Booking"
                    description="Edit booking"
                    booking={row.original}
                    buttonVariant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2 px-2"
                  >
                    <>
                      <PencilSimpleIcon size={16} />
                      Edit
                    </>
                  </UpsertBookingDialog>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  variant="destructive"
                  className="cursor-pointer"
                  onClick={() => {
                    // delete
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      );
    },
  },
];
