import { type Memo } from "@prisma/client";

export default function MemoInput({
	memos,
	selectedMemoId,
	temporaryMemo,
	setTemporaryMemoContent,
	setTemporaryMemoTitle,
	setUpdatedMemoTitle,
	setUpdateMemoContent,
}: {
	memos: Memo[] | null;
	selectedMemoId: string;
	temporaryMemo: boolean;
	setTemporaryMemoTitle: (title: string) => void;
	setTemporaryMemoContent: (content: string) => void;
	setUpdatedMemoTitle: (title: string) => void;
	setUpdateMemoContent: (content: string) => void;
}) {
	const safeMemos = memos ?? [];
	const memo = safeMemos.find((memo) => memo.id === selectedMemoId);
	return (
		<div className="flex w-full flex-col px-10 pt-10">
			{temporaryMemo ? (
				<>
					<input
						type="text"
						name="title"
						className="mb-8 text-headline-xl outline-none"
						placeholder="タイトル"
						onChange={(event) => setTemporaryMemoTitle(event.target.value)}
					/>
					<textarea
						name="content"
						className="h-[400px] w-full text-body-m outline-none"
						placeholder="メモを入力する"
						onChange={(event) => setTemporaryMemoContent(event.target.value)}
					/>
				</>
			) : (
				<>
					<input
						type="text"
						name="text"
						className="mb-8 text-headline-xl outline-none"
						defaultValue={memo?.title}
						onChange={(event) => setUpdatedMemoTitle(event.target.value)}
					/>
					<textarea
						name="content"
						className="h-[400px] w-full text-body-m outline-none"
						defaultValue={memo?.content}
						onChange={(event) => setUpdateMemoContent(event.target.value)}
					/>
				</>
			)}
		</div>
	);
}
