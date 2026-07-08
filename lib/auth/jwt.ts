import { Role } from "@/prisma/generated/enums";
import { jwtVerify, SignJWT } from "jose";
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signToken(payload: {
  id: string;
  email: string;
  role: Role;
}) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret);

  return payload as {
    id: string;
    email: string;
    role: Role;
    iat: number;
    exp: number;
  };
}
