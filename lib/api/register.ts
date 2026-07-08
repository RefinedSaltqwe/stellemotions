import { Admin } from "@/prisma/generated/client";

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(
  data: RegisterUserInput,
): Promise<{ success: boolean; data: Admin; message: string } | undefined> {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, confirmPassword: data.password }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);

    throw new Error(result?.message ?? "Failed to login.");
  }

  return response.json();
}
