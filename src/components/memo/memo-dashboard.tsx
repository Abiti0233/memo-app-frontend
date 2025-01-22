"use client";
import { type Memo } from "@prisma/client";
import Header from "../layout/header";
import MemoInput from "./memo-input";
import MemoList from "./memo-list";
import { useState } from "react";

export default function MemoDashboard({ memos }: { memos: Memo[] }) {
	const [selectedMemoId, setSelectedMemoId] = useState<string>("");
	return (
		<section className="w-full">
			<div className="flex flex-col">
				<Header />
				<div className="flex">
					<div className="h-screen w-[35%] overflow-y-scroll bg-white pb-[100px]">
						<MemoList
							memos={memos}
							selectedMemoId={selectedMemoId}
							setSelectedMemoId={setSelectedMemoId}
						/>
					</div>
					<MemoInput memos={memos} selectedMemoId={selectedMemoId} />
				</div>
			</div>
		</section>
	);
}
