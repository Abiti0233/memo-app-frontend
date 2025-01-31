import "server-only";
import { fetch } from "@/api-client/fetch";
import { type MemoCreateRequest } from "../../types/api-client/memo/memo";
import { env } from "@/env";

export async function memoCreate({
	memoData,
}: { memoData: MemoCreateRequest }) {
	const url = new URL(`${env.API_URL}/api/v1/memos`);
	const method = "POST";
	const response = await fetch({
		url,
		queryParams: new URLSearchParams({
			userId: memoData.userId,
			title: memoData.title,
			content: memoData.content,
		}),
		options: {
			method,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		},
	});
	return { ok: true, data: { response } };
}
