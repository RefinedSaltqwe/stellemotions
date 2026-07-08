import { Role } from "@/prisma/generated/enums";

type Response = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

//? GET CURRENT USER INSIDE CLIENT COMPONENTS ONLY
export async function fetchCurrentUser(): Promise<{
  success: boolean;
  data: Response;
  message: string;
}> {
  const response = await fetch("/api/auth/me");

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message);
  }

  return result;
}
