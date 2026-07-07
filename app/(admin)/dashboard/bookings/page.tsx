import { getAllBookings, getBookingStats } from "@/server/requests/bookings";
import { BookingTable } from "./_components/booking-table";
import { BookingToolbar } from "./_components/booking-toolbar";
import { EmptyState } from "./_components/empty-state";
import BookingStats from "./_components/booking.stats";

const BookingsPage: React.FC = async () => {
  const [bookings, stats] = await Promise.all([
    getAllBookings(),
    getBookingStats(),
  ]);
  return (
    <div className="space-y-6 px-4 lg:px-6">
      <BookingStats total={stats.total} pending={stats.pending} />

      <BookingToolbar />

      {bookings.data.length === 0 ? (
        <EmptyState />
      ) : (
        <BookingTable data={bookings.data} />
      )}
    </div>
  );
};

export default BookingsPage;
