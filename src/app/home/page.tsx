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
						{/* //TODO: コンポーネント化してください。 */}
						<div className="h-12 w-full bg-grey-300 py-2 pr-4">
							<div className="ml-auto size-full w-[256px] pl-2">
								<input
									type="text"
									className="size-full rounded-lg pl-4 text-caption-m"
									placeholder="検索できるよ"
								/>
							</div>
						</div>
						<div className="flex">
							<div className="h-screen w-[35%] overflow-y-scroll bg-white">
								<MemoList memos={memos} />
							</div>
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
					{/* 右のメモ一覧＋メモ記入するところ */}
				</section>
			</div>
		</main>
	);
}
