"use client";

import Image from "next/image";
export default function MemoItem({
	title,
	content,
	updatedAt,
	isSelected,
	onSelect,
}: {
	title: string;
	content: string;
	updatedAt: string | Date;
	isSelected?: boolean;
	onSelect?: () => void;
	defaultTitle?: string;
	temporaryMemo?: boolean;
}) {
	if (typeof updatedAt === "string") {
		updatedAt = new Date(updatedAt);
	}
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
		<div
			className={`relative flex w-full flex-col gap-2 border-b border-solid border-grey-200 p-4 ${
				isSelected
					? "bg-blue-500 text-white"
					: "hover:bg-grey-100 active:bg-blue-500 active:text-white"
			}`}
			onClick={onSelect}
		>
			<div className="flex items-center justify-between">
				<div>
					<h4 className="text-body-m-bold">{title}</h4>
					<div className="flex gap-4 text-caption-m">
						<p>{formattedDisplayDate}</p>
						<p>{displayContent}</p>
					</div>
				</div>
				<button className="group relative size-[20px]">
					{isSelected ? (
						<>
							<Image
								src="/assets/icon/bookmark--white.svg"
								alt="ブックマークのアイコン（選択中）"
								fill
								priority
								className="opacity-100 transition-opacity duration-200 ease-out"
							/>
							<Image
								src="/assets/icon/bookmark--yellow.svg"
								alt="ブックマークのアイコン（選択中でホバー時）"
								fill
								priority
								className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
							/>
						</>
					) : (
						<>
							<Image
								src="/assets/icon/bookmark.svg"
								alt="ブックマークのアイコン（未選択）"
								fill
								priority
								className="opacity-100 transition-opacity duration-200 ease-out group-hover:opacity-0"
							/>
							<Image
								src="/assets/icon/bookmark--yellow.svg"
								alt="ブックマークのアイコン（ホバー時）"
								fill
								priority
								className="opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
							/>
						</>
					)}
				</button>
			</div>
		</div>
	);
}
