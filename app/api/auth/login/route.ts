import bcrypt from "bcrypt";
import { errorResponse, successResponse } from "@/lib/api-response";
import { loginUserSchema } from "@/lib/validation/login-user-schema";
import { db } from "@/server/db";
import { signToken } from "@/lib/auth/jwt";
import { setSessionCookie } from "@/lib/auth/cookies";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = loginUserSchema.safeParse(body);

    if (!result.success) {
      return errorResponse(
        result.error.issues[0]?.message ?? "Invalid request.",
        400,
      );
    }

    const { email, password } = result.data;

    const user = await db.admin.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return errorResponse("Invalid email or password.", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return errorResponse("Invalid email or password.", 401);
    }

    const token = await signToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    await setSessionCookie(token);

    return successResponse(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      "Login successful.",
    );
  } catch (error) {
    console.error("[LOGIN]", error);

    return errorResponse("Something went wrong. Please try again.", 500);
  }
}
