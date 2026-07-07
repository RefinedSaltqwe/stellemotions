"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDotsIcon,
  ClockCountdownIcon,
  CurrencyDollarIcon,
  ImagesSquareIcon,
} from "@phosphor-icons/react";

type BookingStatsProps = {
  total: number;
  pending: number;
};
const BookingStats: React.FC<BookingStatsProps> = ({ total, pending }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Bookings"
        value={total.toString()}
        subtitle="All sessions"
        icon={<ImagesSquareIcon size={18} weight="duotone" />}
      />

      <StatCard
        title="Pending"
        value={pending.toString()}
        subtitle="Waiting confirmation"
        icon={<ClockCountdownIcon size={18} weight="duotone" />}
      />

      <StatCard
        title="Upcoming"
        value="9"
        subtitle="Next 30 days"
        icon={<CalendarDotsIcon size={18} weight="duotone" />}
      />

      <StatCard
        title="Revenue"
        value="$12,400"
        subtitle="Paid bookings"
        icon={<CurrencyDollarIcon size={18} weight="duotone" />}
      />
    </div>
  );
};
export default BookingStats;

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>

        <div className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg">
          {icon}
        </div>
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold">{value}</div>

        <p className="text-muted-foreground mt-1 text-xs">{subtitle}</p>
      </CardContent>
    </Card>
  );
}
