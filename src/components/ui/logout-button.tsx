import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton({ className }: { className?: string }) {
	const router = useRouter();
	const logout = async () => {
		Cookies.remove("token");
		router.push("/login");
	};
	return (
		<button
			onClick={logout}
			className={`rounded px-4 py-2 font-bold hover:text-grey-700 ${className}`}
		>
			ログアウト
		</button>
	);
}
