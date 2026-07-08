import { getAllBookings, getBookingStats } from "@/server/queries/bookings";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BookingClient from "./_components/booking-client";

const BookingsPage: React.FC = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["bookings"],
    queryFn: () => getAllBookings(),
  });
  await queryClient.prefetchQuery({
    queryKey: ["bookings-stats"],
    queryFn: () => getBookingStats(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookingClient />
    </HydrationBoundary>
  );
};

export default BookingsPage;
