import LoginButton from "@/components/ui/login-button";

export default function Login() {
	return (
		<div className="mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center py-10">
			<h1 className="mb-4 text-headline-xl">ログイン</h1>
			<LoginButton />
		</div>
	);
}
