import z from "zod";

export const loginUserSchema = z.object({
  password: z.string(),
  email: z.email("Please enter a valid email address"),
});

export type LoginUserSchema = z.infer<typeof loginUserSchema>;
