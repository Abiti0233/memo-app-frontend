"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const token = searchParams.get("token");

		if (token) {
			const setToken = JSON.stringify(token);
			Cookies.set("token", setToken);
			router.push("/home");
		} else {
			router.push("/login");
		}
	}, [searchParams, router]);

	return <div>認証中...</div>;
}
