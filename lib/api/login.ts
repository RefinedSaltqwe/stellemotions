import { ApiResponse, LoginUser } from "@/types";
import { LoginUserSchema } from "../validation/login-user-schema";

export async function loginUser(
  data: LoginUserSchema,
): Promise<ApiResponse<LoginUser>> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);

    throw new Error(result?.message ?? "Failed to login.");
  }

  return response.json();
}
