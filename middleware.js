import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }
  if (req.nextUrl.pathname === "/register") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/inbox/:path*", "/profile/:path*", "/"],
};
