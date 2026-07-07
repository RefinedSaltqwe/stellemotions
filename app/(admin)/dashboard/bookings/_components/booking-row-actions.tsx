"use client";

import {
  DotsThreeIcon,
  EyeIcon,
  PencilSimpleIcon,
  TrashIcon,
} from "@phosphor-icons/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import UpsertBookingDialog from "./upsert-booking-dialog";
import { Booking } from "@/types";

interface Props {
  booking: Booking;
}

export function BookingRowActions({ booking }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <DotsThreeIcon size={18} weight="bold" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <EyeIcon size={16} />
          View
        </DropdownMenuItem>

        <DropdownMenuItem>
          <UpsertBookingDialog
            buttonVariant={"ghost"}
            className=""
            booking={booking}
          >
            <PencilSimpleIcon size={16} />
            Edit
          </UpsertBookingDialog>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-red-500">
          <TrashIcon size={16} />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
