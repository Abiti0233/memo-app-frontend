"use client";
import { type Memo } from "@prisma/client";
import Header from "../layout/header";
import MemoInput from "./memo-input";
import MemoList from "./memo-list";
import { useState } from "react";
import { createMemo } from "@/api-client/memo/memo";

export default function MemoDashboard({ memos }: { memos: Memo[] }) {
	const [selectedMemoId, setSelectedMemoId] = useState<string>("");
	const [temporaryMemo, setTemporaryMemo] = useState(false);
	const [temporaryMemoTitle, setTemporaryMemoTitle] = useState("");
	const [temporaryMemoContent, setTemporaryMemoContent] = useState("");
	const [newMemoTemporaryTitle, setNewMemoTemporaryTitle] = useState("");
	const [newMemoTemporaryContent, setNewMemoTemporaryContent] = useState("");

	async function onClick() {
		try {
			// サーバーアクションを直接呼び出し
			const newMemo = await createMemo({
				title: temporaryMemoTitle,
				content: temporaryMemoContent,
			});
			setNewMemoTemporaryTitle(newMemo.title);
			setNewMemoTemporaryContent(newMemo.content);
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
