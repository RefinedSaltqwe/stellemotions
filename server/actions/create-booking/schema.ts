import { BookingStatus, Service } from "@/prisma/generated/enums";
import { z } from "zod";

export const inquirySchema = z.object({
  id: z.string().optional(),
  firstName: z.string().trim().min(2, "First name is required."),

  lastName: z.string().trim().min(2, "Last name is required."),

  email: z.email("Invalid email"),

  phone: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Use format (306) 555-1234")
    .optional()
    .or(z.literal("")),

  location: z.string().trim().min(2, "Location is required."),

  service: z.enum(Service),
  status: z.enum(BookingStatus).optional(),
  date: z.date().nullable(),

  message: z
    .string()
    .trim()
    .min(20, "Tell us a little about your event.")
    .max(1000),
});

export type InquirySchema = z.infer<typeof inquirySchema>;
