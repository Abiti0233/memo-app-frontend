import Image from "next/image";

export default function MemoCreateButton() {
	return (
		<button className="p-1 hover:rounded-full hover:bg-grey-100">
			<Image
				src="/assets/icon/new.svg"
				alt="メモ新規作成のアイコン"
				width={28}
				height={28}
			/>
		</button>
	);
}
