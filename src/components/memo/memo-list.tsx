"use client";

import { type Memo } from "@prisma/client";
import MemoItem from "./memo-item";
export default function MemoList({
	memos,
	selectedMemoId,
	setSelectedMemoId,
}: {
	memos: Memo[] | null;
	selectedMemoId: string;
	setSelectedMemoId: (id: string) => void;
}) {
	const safeMemos = memos ?? [];
	return (
		<ul>
			<li className="px-6 py-10">
				{safeMemos.map((memo) => (
					<MemoItem
						key={memo.id}
						title={memo.title}
						content={memo.content}
						updatedAt={memo.updatedAt}
						isSelected={memo.id === selectedMemoId}
						onSelect={() => setSelectedMemoId(memo.id)}
					/>
				))}
			</li>
		</ul>
	);
}
