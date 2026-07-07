import { BookingStatus, Service } from "@/prisma/generated/client";

export interface Booking {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  location: string;
  service: Service;
  date: Date | null;
  message: string | null;
  status: BookingStatus;
  createdAt: Date;
  updatedAt: Date;
}
