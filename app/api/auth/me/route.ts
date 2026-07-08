import { cookies } from "next/headers";

import { db } from "@/server/db";
import { errorResponse, successResponse } from "@/lib/api-response";
import { verifyToken } from "@/lib/auth/jwt";
import { SESSION_COOKIE } from "@/lib/auth/cookies";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get(SESSION_COOKIE)?.value;

    if (!token) {
      return errorResponse("Unauthorized.", 401);
    }

    const payload = await verifyToken(token);

    const user = await db.admin.findUnique({
      where: {
        id: payload.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      return errorResponse("Unauthorized.", 401);
    }

    return successResponse(user);
  } catch (error) {
    console.error("[AUTH_ME]", error);

    return errorResponse("Unauthorized.", 401);
  }
}
