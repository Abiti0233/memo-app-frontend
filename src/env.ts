import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	shared: {
		NODE_ENV: z
			.enum(["development", "production", "stg"])
			.default("development"),
	},
	server: {
		DATABASE_URL: z.string().url(),
		DATABASE_URL_UNPOOLED: z.string().url(),
		PGDATABASE: z.string(),
		PGHOST: z.string(),
		PGHOST_UNPOOLED: z.string(),
		PGPASSWORD: z.string(),
		PGUSER: z.string(),
		POSTGRES_DATABASE: z.string(),
		POSTGRES_HOST: z.string(),
		POSTGRES_PASSWORD: z.string(),
		POSTGRES_PRISMA_URL: z.string().url(),
		POSTGRES_URL: z.string().url(),
		POSTGRES_URL_NON_POOLING: z.string().url(),
		POSTGRES_URL_NO_SSL: z.string().url(),
		POSTGRES_USER: z.string(),
		API_URL: z.string(),
	},
	client: {},
	experimental__runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
	},
});
