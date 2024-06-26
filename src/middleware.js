import { NextResponse } from "next/server";

const user = true;
const cookieValue = "AllsamirNextjs";
export const middleware = (request) => {
  let cookie = request.cookies.get("nextapp");
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (cookie.value !== cookieValue || !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/update-profile",
    "/dashboard/posts",
    "/dashboard/posts/:id",
  ],
};
