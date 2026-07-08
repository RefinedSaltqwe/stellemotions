import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth/jwt";
import { SESSION_COOKIE } from "./lib/auth/cookies";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  const pathname = request.nextUrl.pathname;

  const isLoginPage = pathname === "/scapbelle/login";
  const isSignupPage = pathname === "/scapbelle/signup";
  const isAuthPage = isLoginPage || isSignupPage;

  // No token
  if (!token) {
    // Allow login/signup
    if (isAuthPage) {
      return NextResponse.next();
    }

    // Protect dashboard -> redirect to home
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  try {
    await verifyToken(token);

    // Already logged in, don't allow login/signup
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  } catch {
    // Invalid token
    if (isAuthPage) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/scapbelle/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/scapbelle/login", "/scapbelle/signup"],
};
