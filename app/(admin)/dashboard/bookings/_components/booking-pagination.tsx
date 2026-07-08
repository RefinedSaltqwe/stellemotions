"use client";

import { Table } from "@tanstack/react-table";
import { Booking } from "@/prisma/generated/client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  table: Table<Booking>;
};

export default function BookingPagination({ table }: Props) {
  return (
    <div className="mt-4 flex items-center justify-between flex-col md:flex-row gap-4">
      <div className="flex gap-4 items-center align-middle">
        <p className="text-muted-foreground text-sm">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {[10, 20, 30, 50].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                {size} / page
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          First
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          Last
        </Button>
      </div>
    </div>
  );
}
