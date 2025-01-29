// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const publicPaths = ["/login"];
	const isPublicPath = publicPaths.some((path) => pathname.startsWith(path));

	if (isPublicPath) {
		return NextResponse.next();
	}
	const token = request.cookies.get("token")?.value;

	if (!token) {
		const url = request.nextUrl.clone();
		url.pathname = "/login";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

// ミドルウェアを適用するパスを指定
export const config = {
	matcher: ["/home/:path*"],
};
