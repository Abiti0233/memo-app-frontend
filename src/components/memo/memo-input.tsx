import { type Memo } from "@prisma/client";

export default function MemoInput({
	memos,
	selectedMemoId,
}: {
	memos: Memo[];
	selectedMemoId: string;
}) {
	// 現在選択されているメモがあれば、そのメモのタイトルと内容を表示する
	// なければ、空のフォームを表示する
	const memo = memos.find((memo) => memo.id === selectedMemoId);
	return (
		<div className="flex w-full flex-col px-10 pt-10">
			<input
				type="text"
				className="mb-8 text-headline-xl outline-none"
				placeholder="タイトル"
				defaultValue={memo?.title}
			/>
			<input
				type="text"
				className="text-body-m outline-none"
				placeholder="メモを入力する"
				defaultValue={memo?.content}
			/>
		</div>
	);
}
