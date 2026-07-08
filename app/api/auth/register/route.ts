import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { registrationSchema } from "@/lib/validation/register-user-schema";
import { db } from "@/server/db";
import { errorResponse, successResponse } from "@/lib/api-response";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = registrationSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error.issues[0]?.message ?? "Invalid request.",
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, password } = result.data;

    const existingUser = await db.admin.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return errorResponse("Email is already registered.", 409);
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await db.admin.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
    return successResponse(user, "User registered successfully.", 201);
  } catch (error) {
    console.log("[Error]", error);

    return errorResponse("Email already exists.", 409);
  }
}
