import { NextResponse } from "next/server";

export function middleware(req, ev) {
    const { cookies } = req;
    console.log(cookies);

    NextResponse.next();
}