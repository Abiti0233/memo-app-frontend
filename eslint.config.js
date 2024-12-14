import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import unicorn from "eslint-plugin-unicorn";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import nextJs from "@next/eslint-plugin-next";
import tailwindcss from "eslint-plugin-tailwindcss";
import { includeIgnoreFile } from "@eslint/compat";
import * as path from "node:path";
import hooksPlugin from "eslint-plugin-react-hooks";

/**
 * Rule to restrict access to `process.env` in favor of `import { env } from '~/env'`.
 */
const restrictEnvAccess = tseslint.config(
	{ ignores: ["**/env.ts"] },
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx"],
		rules: {
			"no-restricted-properties": [
				"error",
				{
					object: "process",
					property: "env",
					message: "Use `import { env } from '@/env'` instead to ensure validated types.",
				},
			],
			"no-restricted-imports": [
				"error",
				{
					name: "process",
					importNames: ["env"],
					message: "Use `import { env } from '@/env'` instead to ensure validated types.",
				},
			],
		},
	},
);

/**
 * React specific rules.
 * @type {Awaited<import('typescript-eslint').Config>}
 */
const reactConfig = [
	{
		files: ["src/**/*.{ts,tsx}"],
		...reactRecommended,
	},
	{
		settings: { react: { version: "detect" } },
		files: ["src/**/*.{ts,tsx}"],
		plugins: {
			"react-hooks": hooksPlugin,
		},
		rules: {
			...reactJsxRuntime.rules,
			...hooksPlugin.configs.recommended.rules,
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md
			"react/hook-use-state": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md
			"react/jsx-boolean-value": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
			"react/jsx-curly-brace-presence": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
			"react/destructuring-assignment": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
			"react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
			"react/function-component-definition": ["error", { unnamedComponents: "function-expression" }],
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md
			"react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md
			"react/no-danger": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md
			"react/no-unstable-nested-components": ["error", { allowAsProps: true }],
			// https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md
			"react/no-array-index-key": "error",
			// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
			"react/prop-types": "off",
		},
	},
];

/**
 * Next.js specific rules.
 * @type {Awaited<import('typescript-eslint').Config>}
 */
const nextConfig = [
	{
		files: ["src/**/*.{ts,tsx}"],
		plugins: { "@next/next": nextJs },
		rules: {
			...nextJs.configs.recommended.rules,
			...nextJs.configs["core-web-vitals"].rules,
			// Disabling these rules until the related issues are resolved
			// https://nextjs.org/docs/messages/no-html-link-for-pages
			"@next/next/no-html-link-for-pages": "off", // https://github.com/vercel/next.js/pull/51783
			// https://nextjs.org/docs/messages/no-duplicate-head
			"@next/next/no-duplicate-head": "off", // https://github.com/import-js/eslint-plugin-import/issues/2948
		},
	},
];

/**
 * Tailwind CSS specific rules.
 * @type {Awaited<import('typescript-eslint').Config>}
 */
const tailwindcssConfig = [
	{
		files: ["src/**/*.tsx"],
		plugins: { tailwindcss },
		rules: {
			...tailwindcss.configs.recommended.rules,
			// https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-negative-arbitrary-values.md
			"tailwindcss/enforces-negative-arbitrary-values": "error",
			// https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/enforces-shorthand.md
			"tailwindcss/enforces-shorthand": "error",
			// https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules/no-unnecessary-arbitrary-value.md
			"tailwindcss/no-unnecessary-arbitrary-value": "error",
		},
		settings: {
			tailwindcss: {
				callees: ["clsx", "cn", "tv"],
			},
		},
	},
];

const projectRoot = process.cwd();
const gitignorePath = path.join(projectRoot, ".gitignore");
export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	...restrictEnvAccess,
	...reactConfig,
	...nextConfig,
	...tailwindcssConfig,
	// Ignore files not tracked by VCS and any config files
	includeIgnoreFile(gitignorePath),
	{ ignores: ["**/*.config.*"] },
	{
		files: ["**/*.js", "**/*.ts", "**/*.tsx"],
		plugins: { unicorn },
		rules: {
			// https://typescript-eslint.io/rules/naming-convention/
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "function",
					format: ["camelCase", "PascalCase"],
				},
				{
					selector: "variable",
					modifiers: ["const"],
					format: ["camelCase", "UPPER_CASE", "PascalCase"],
					leadingUnderscore: "allow",
				},
				{
					selector: "interface",
					format: ["PascalCase"],
				},
			],
			// https://typescript-eslint.io/rules/no-unused-vars
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
			// https://typescript-eslint.io/rules/consistent-type-imports
			"@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
			"unicorn/filename-case": ["error", { case: "kebabCase" }],
			// https://eslint.org/docs/latest/rules/no-console
			"no-console": "error",
			// https://eslint.org/docs/latest/rules/eqeqeq
			eqeqeq: "error",
			// https://eslint.org/docs/latest/rules/no-magic-numbers
			"no-magic-numbers": ["error", { ignore: [0, 1, 2] }],
			// https://eslint.org/docs/latest/rules/no-negated-condition
			"no-negated-condition": "error",
			// https://eslint.org/docs/latest/rules/no-useless-rename
			"no-useless-rename": "error",
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
			"unicorn/better-regex": "error",
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
			"unicorn/no-nested-ternary": "error",
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
			"unicorn/prevent-abbreviations": [
				"warn",
				{
					allowList: {
						Args: true,
						args: true,
						Arg: true,
						arg: true,
						Props: true,
						props: true,
						Prop: true,
						prop: true,
						Refs: true,
						refs: true,
						Ref: true,
						ref: true,
						env: true,
						Param: true,
						param: true,
						Params: true,
						params: true,
					},
				},
			],
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
			"unicorn/no-array-for-each": "error",
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
			"unicorn/no-array-push-push": "error",
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
			"unicorn/no-array-reduce": "error",
			// https://eslint.org/docs/latest/rules/no-eval
			"no-eval": "error",
		},
	},
	{
		languageOptions: {
			parserOptions: {
				globals: { ...globals.browser, ...globals.node },
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);