import SideBar from "@/components/layout/side-bar";
import MemoDashboard from "@/components/memo/memo-dashboard";
import { getMemos } from "@/data/memo";

export default async function Page() {
	const memos = await getMemos();
	return (
		<main>
			<div className="flex">
				<SideBar />
				<MemoDashboard memos={memos} />
			</div>
		</main>
	);
}
