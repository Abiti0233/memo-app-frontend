import { type Memo } from "@/types/memo/memo";
import MemoItem from "./memo-item";
export default function MemoList({ memos }: { memos: Memo }) {
	return (
		<ul>
			<li className="px-6 py-10">
				{memos.map((memo) => (
					<MemoItem
						key={memo.id}
						title={memo.title}
						content={memo.content}
						updatedAt={memo.updatedAt}
					/>
				))}
			</li>
		</ul>
	);
}
