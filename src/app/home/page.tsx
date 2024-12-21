import Header from "@/components/layout/header";
import SideBar from "@/components/layout/side-bar";
import MemoList from "@/components/memo/memo-list";
import { getMemos } from "@/data/memo";

export default async function Page() {
	const memos = await getMemos();
	return (
		<main>
			<div className="flex">
				<SideBar />
				<section className="w-full">
					<div className="flex flex-col">
						<Header />
						<div className="flex">
							<div className="h-screen w-[35%] overflow-y-scroll bg-white">
								<MemoList memos={memos} />
							</div>
							{/* メモ記入するところコンポーネント化する */}
							<div className="flex w-full flex-col px-10 pt-10">
								<input
									type="text"
									className="mb-8 text-headline-xl outline-none"
									placeholder="タイトル"
								/>
								<input
									type="text"
									className="text-body-m outline-none"
									placeholder="メモを入力する"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
