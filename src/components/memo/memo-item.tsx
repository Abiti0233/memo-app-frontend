export default function MemoItem({
	title,
	content,
	updatedAt,
}: {
	title: string;
	content: string;
	updatedAt: Date;
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
		<div className="flex flex-col gap-2 border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
			<h4 className="text-body-m-bold">{title}</h4>
			<div className="flex gap-4 text-caption-m">
				<p>{formattedDisplayDate}</p>
				<p>{displayContent}</p>
			</div>
		</div>
	);
}
