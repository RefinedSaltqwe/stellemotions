"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Booking } from "@/prisma/generated/client";
import { useState } from "react";
import { columns } from "./booking-columns";
import BookingToolbar from "./booking-toolbar";
import {
  CaretDownIcon,
  CaretUpDownIcon,
  CaretUpIcon,
} from "@phosphor-icons/react";
import BookingPagination from "./booking-pagination";
import { cn } from "@/lib/utils";

interface Props {
  data: Booking[];
}

export function BookingTable({ data }: Props) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable({
    data,
    columns,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      sorting,
      globalFilter,
      pagination,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    globalFilterFn: (row, _, value) => {
      const search = value.toLowerCase();

      return Object.values(row.original).some((field) =>
        String(field ?? "")
          .toLowerCase()
          .includes(search),
      );
    },
  });

  return (
    <>
      <BookingToolbar table={table} />
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className={cn(
                        header.column.getCanSort() &&
                          "cursor-pointer select-none",
                        header.column.id === "actions" &&
                          "sticky right-0 z-30 bg-background md:static",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                        {header.column.getCanSort() && (
                          <>
                            {{
                              asc: <CaretUpIcon size={14} />,
                              desc: <CaretDownIcon size={14} />,
                            }[header.column.getIsSorted() as string] ?? (
                              <CaretUpDownIcon size={14} />
                            )}
                          </>
                        )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="cursor-pointer">
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      cell.column.id === "actions" &&
                        "sticky right-0 z-20 bg-background md:static",
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <BookingPagination table={table} />
    </>
  );
}
