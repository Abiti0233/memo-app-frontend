import { z } from "zod";

export const MemoCreateRequestSchema = z.object({
	title: z.string(),
	content: z.string(),
});

export type CreateMemoData = z.infer<typeof MemoCreateRequestSchema>;
