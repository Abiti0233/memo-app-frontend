import "server-only";

export const fetch = async ({
	url,
	queryParams,
	options = {},
}: {
	url: URL;
	queryParams?: URLSearchParams;
	options?: RequestInit;
}): Promise<Response> => {
	// クエリパラメータがある場合は追加, path 中にクエリパラメータがある場合も考慮して append を使う
	for (const [key, value] of Array.from(queryParams?.entries() ?? [])) {
		url.searchParams.append(key, value);
	}

	return globalThis.fetch(url, { redirect: "manual", ...options });
};
