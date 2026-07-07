import { BookingStatus } from "@/prisma/generated/client";

import { Badge } from "@/components/ui/badge";

interface BookingStatusBadgeProps {
  status: BookingStatus;
}

const statusMap: Record<
  BookingStatus,
  {
    label: string;
    className: string;
  }
> = {
  PENDING: {
    label: "Pending",
    className:
      "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-500/15 dark:text-yellow-400",
  },

  CONFIRMED: {
    label: "Confirmed",
    className:
      "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-500/15 dark:text-green-400",
  },

  COMPLETED: {
    label: "Completed",
    className:
      "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-500/15 dark:text-blue-400",
  },

  CANCELLED: {
    label: "Cancelled",
    className:
      "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-500/15 dark:text-red-400",
  },
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  const item = statusMap[status];

  return (
    <Badge variant="secondary" className={item.className}>
      {item.label}
    </Badge>
  );
}
