import z from "zod";

export const registrationSchema = z
  .object({
    name: z.string().trim().min(2, "First name is required."),
    password: z.string().min(8, "Password must be at least 8 characters"),
    email: z.email("Please enter a valid email address"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Attach error to confirmPassword field
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
