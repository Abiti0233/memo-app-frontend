"use client";
import { type Memo } from "@prisma/client";
import Header from "../layout/header";
import MemoInput from "./memo-input";
import MemoList from "./memo-list";
import { useState } from "react";
import { createMemo, updateMemo } from "@/api-client/memo/memo";

export default function MemoDashboard({ memos }: { memos: Memo[] }) {
	const [selectedMemoId, setSelectedMemoId] = useState<string>("");
	const [updatedMemoTitle, setUpdatedMemoTitle] = useState<string>("");
	const [updatedMemoContent, setUpdatedMemoContent] = useState<string>("");
	const [updatedNewMemoTitle, setUpdatedNewMemoTitle] = useState<string>("");
	const [updatedNewMemoContent, setUpdatedNewMemoContent] =
		useState<string>("");
	const [updatedMemoId, setUpdatedMemoId] = useState<string>("");
	const [temporaryMemo, setTemporaryMemo] = useState(false);
	const [temporaryMemoTitle, setTemporaryMemoTitle] = useState("");
	const [temporaryMemoContent, setTemporaryMemoContent] = useState("");
	const [newMemoTemporaryTitle, setNewMemoTemporaryTitle] = useState("");
	const [newMemoTemporaryContent, setNewMemoTemporaryContent] = useState("");

	async function onClick() {
		try {
			// サーバーアクションを直接呼び出し
			// 新規メモを作成しようとしている場合は、createMemoを呼び出す
			if (temporaryMemo) {
				const newMemo = await createMemo({
					title: temporaryMemoTitle,
					content: temporaryMemoContent,
				});
				setNewMemoTemporaryTitle(newMemo.title);
				setNewMemoTemporaryContent(newMemo.content);
			} else {
				const memo = memos.find((memo) => memo.id === selectedMemoId);
				const title = memo?.title ?? "";
				const content = memo?.content ?? "";
				const updateMemoTitle = updatedMemoTitle ? updatedMemoTitle : title;
				const updateMemoContent = updatedMemoContent
					? updatedMemoContent
					: content;
				// 既存のメモを選択し、更新しようとしている場合は、updateMemoを呼び出す
				const updatedMemo = await updateMemo({
					memoId: selectedMemoId,
					title: updateMemoTitle,
					content: updateMemoContent,
				});
				setUpdatedNewMemoTitle(updatedMemo.title);
				setUpdatedNewMemoContent(updatedMemo.content);
				setUpdatedMemoId(updatedMemo.id);
			}
		} catch {
			// 意図的に何もしない
		}
	}

	return (
		<section className="w-full">
			<div className="flex flex-col">
				<Header setTemporaryMemo={setTemporaryMemo} />
				<div className="flex">
					<div className="h-screen w-[35%] overflow-y-scroll bg-white pb-[100px]">
						<MemoList
							memos={memos}
							selectedMemoId={selectedMemoId}
							setSelectedMemoId={setSelectedMemoId}
							updatedMemoTitle={updatedNewMemoTitle}
							updatedMemoContent={updatedNewMemoContent}
							updatedMemoId={updatedMemoId}
							temporaryMemo={temporaryMemo}
							newMemoTemporaryTitle={newMemoTemporaryTitle}
							newMemoTemporaryContent={newMemoTemporaryContent}
						/>
					</div>
					<div className="w-[65%] overflow-y-scroll">
						<MemoInput
							memos={memos}
							selectedMemoId={selectedMemoId}
							temporaryMemo={temporaryMemo}
							setTemporaryMemoTitle={setTemporaryMemoTitle}
							setTemporaryMemoContent={setTemporaryMemoContent}
							setUpdatedMemoTitle={setUpdatedMemoTitle}
							setUpdateMemoContent={setUpdatedMemoContent}
						/>
						<div className="mt-[100px] w-full px-10">
							<button
								onClick={onClick}
								className="ml-auto mt-auto block max-w-[145px] text-body-m-bold"
							>
								保存する
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
