"use server";
import { fetch } from "@/api-client/fetch";
import { env } from "@/env";
import { cookies } from "next/headers";

export async function createMemo({
	title,
	content,
}: { title: string; content: string }) {
	const cookieStore = await cookies();
	const token = cookieStore.get("token")?.value;
	const url = new URL(`${env.API_URL}/api/v1/memos`);
	const method = "POST";
	const response = await fetch({
		url,
		queryParams: new URLSearchParams({
			title: title,
			content: content,
		}),
		options: {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				title: title,
				content: content,
			}),
		},
	});
	const data = await response.json();
	return JSON.parse(JSON.stringify(data));
}
