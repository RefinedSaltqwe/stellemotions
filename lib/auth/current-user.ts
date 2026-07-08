//? GET CURRENT USER INSIDE SERVER COMPONENTS ONLY
import "server-only";

import { cookies } from "next/headers";

import { db } from "@/server/db";
import { verifyToken } from "./jwt";
import { SESSION_COOKIE } from "./cookies";
import { UnauthorizedError } from "../errors";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    throw new UnauthorizedError();
  }

  try {
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

    return {
      success: true,
      data: user,
      message: "Successful",
    };
  } catch {
    return {
      success: false,
      message: "Failed to fetch current user",
    };
  }
}
