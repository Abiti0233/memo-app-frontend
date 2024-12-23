"use client";

export default function MemoItem({
	title,
	content,
	updatedAt,
	isSelected,
	onSelect,
}: {
	title: string;
	content: string;
	updatedAt: Date;
	isSelected: boolean;
	onSelect: () => void;
}) {
	const formattedDisplayDate = `${updatedAt.getFullYear()}年${
		updatedAt.getMonth() + 1
	}月${updatedAt.getDate()}日`;
	// 表示する文字数
	const displayContentLength = 6;
	const displayContent =
		content.length > displayContentLength
			? `${content.slice(0, displayContentLength)}...`
			: content;

	return (
		<button
			className={`flex w-full flex-col gap-2 border-b border-solid border-grey-200 p-4 ${
				isSelected
					? "bg-blue-500 text-white"
					: "hover:bg-grey-100 active:bg-blue-500 active:text-white"
			}`}
			onClick={onSelect}
		>
			<h4 className="text-body-m-bold">{title}</h4>
			<div className="flex gap-4 text-caption-m">
				<p>{formattedDisplayDate}</p>
				<p>{displayContent}</p>
			</div>
		</button>
	);
}
