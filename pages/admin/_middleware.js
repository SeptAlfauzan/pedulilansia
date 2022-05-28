import { NextResponse } from "next/server";

export function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/admin') return NextResponse.redirect('/admin/dashboard')
    return NextResponse.next()
}