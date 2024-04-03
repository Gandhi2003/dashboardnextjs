import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/dashboard/Login" || path === "/dashboard/register";

  const token = request.cookies.get("Token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/dashboard/Login", request.nextUrl));
  }
}
export const config = {
  matcher: ["/profile", "/dashboard/Login", "/dashboard/register"],
};
