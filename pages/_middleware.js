import { NextResponse } from "next/server";

export function middleware(req, ev) {
  NextResponse.next();
}
