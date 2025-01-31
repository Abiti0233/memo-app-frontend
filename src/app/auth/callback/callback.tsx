"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Loading from "@/components/ui/loading";

export default function Callback() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		// Googleからリダイレクトされる際に ?code=... & state=... が付与される想定
		const code = searchParams.get("code");
		const state = searchParams.get("state");

		if (!code) {
			// 認可コードが無いのでエラー扱い→ログインへ
			router.push("/login");
			return;
		}

		// バックエンドのCallbackエンドポイントに code と state を渡して、JWTをもらう
		(async () => {
			try {
				const queryParams = new URLSearchParams();
				queryParams.set("code", code);
				if (state) {
					queryParams.set("state", state);
				}
				const response = await fetch(
					`http://localhost:8081/api/v1/auth/callback?${queryParams}`,
					{
						method: "GET",
					},
				);

				if (!response.ok) {
					router.push("/login");
					return;
				}
				const { token } = await response.json();
				if (token) {
					Cookies.set("token", token);
					router.push("/home");
				} else {
					router.push("/login");
				}
			} catch {
				// console.error("コールバック処理中にエラー:", error);
				router.push("/login");
			}
		})();
	}, [searchParams, router]);

	return <Loading />;
}
