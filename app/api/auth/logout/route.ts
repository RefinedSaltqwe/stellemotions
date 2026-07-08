import { clearSessionCookie } from "@/lib/auth/cookies";
import { successResponse } from "@/lib/api-response";

export async function POST() {
  await clearSessionCookie();

  return successResponse(null, "Logged out successfully.");
}
