import { fetch } from "@/api-client/fetch";
import { cookies } from "next/headers";
import { env } from "@/env";

export async function getMemos() {
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;
	const url = new URL(`${env.API_URL}/api/v1/memos`);
	const method = "GET";

	const response = await fetch({
		url,
		options: {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		},
	});
	if (response.ok) {
		const data = await response.json();
		return JSON.parse(JSON.stringify(data));
	} else {
		throw new Error("Failed to fetch memos");
	}
}
