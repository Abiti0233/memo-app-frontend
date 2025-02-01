"use client";

import { type Memo } from "@prisma/client";
import MemoItem from "./memo-item";
import { useState } from "react";
export default function MemoList({
	memos,
	selectedMemoId,
	setSelectedMemoId,
	temporaryMemo,
	newMemoTemporaryTitle,
	newMemoTemporaryContent,
}: {
	memos: Memo[] | null;
	selectedMemoId: string;
	setSelectedMemoId: (id: string) => void;
	temporaryMemo: boolean;
	newMemoTemporaryTitle: string;
	newMemoTemporaryContent: string;
}) {
	const safeMemos = memos ?? [];
	const [temporaryMemoSelected, setTemporaryMemoSelected] = useState(false);
	return (
		<ul>
			<li className="px-6 py-10">
				{temporaryMemo && (
					<MemoItem
						title={newMemoTemporaryTitle ? newMemoTemporaryTitle : "新規メモ"}
						content={newMemoTemporaryContent ? newMemoTemporaryContent : ""}
						updatedAt={new Date()}
						isSelected={temporaryMemoSelected}
						onSelect={() => setTemporaryMemoSelected(true)}
						temporaryMemo={temporaryMemo}
					/>
				)}
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
