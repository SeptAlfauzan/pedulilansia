import { NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req, ev) {
  const { pathname, origin } = req.nextUrl;
  const { cookies } = req;
  if (pathname == "/admin") {
    return NextResponse.redirect(`${origin}/admin/dashboard`);
  }
  if (!cookies.token) {
    return NextResponse.redirect(`${origin}/login`);
  }
  try {
    var { payload } = await jose.jwtVerify(
      cookies.token,
      new TextEncoder().encode(`secret`)
    );
    // console.log(payload)
    return NextResponse.next();
  } catch (err) {
    console.log("token invalid");
    return NextResponse.redirect(`${origin}/login`);
  }
}
