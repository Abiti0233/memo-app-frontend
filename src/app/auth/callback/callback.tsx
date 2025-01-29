"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/ui/loading";

export default function Callback() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const token = searchParams.get("token");
		if (token) {
			Cookies.set("token", JSON.stringify(token));
			router.push("/home");
		} else {
			router.push("/login");
		}
	}, [searchParams, router]);

	return <Loading />;
}
