import Image from "next/image";
import LogoutButton from "../ui/logout-button";
import { type Dispatch } from "react";

export default function Header({
	setTemporaryMemo,
}: { setTemporaryMemo: Dispatch<boolean> }) {
	return (
		<div className="h-14 w-full bg-grey-200 px-4 py-2">
			<div className="flex h-full">
				<div className="flex items-center gap-3">
					<button className="p-1 hover:rounded-full hover:bg-grey-100">
						<Image
							src="/assets/icon/trash.svg"
							alt="ゴミ箱のアイコン"
							width={28}
							height={28}
						/>
					</button>
					<button
						className="p-1 hover:rounded-full hover:bg-grey-100"
						onClick={() => setTemporaryMemo(true)}
					>
						<Image
							src="/assets/icon/new.svg"
							alt="追加"
							width={28}
							height={28}
						/>
					</button>
				</div>
				<LogoutButton className="ml-10" />
				<div className="ml-auto w-[256px] pl-2">
					<input
						type="text"
						className="size-full rounded-lg pl-4 text-caption-m"
						placeholder="検索できるよ"
					/>
				</div>
			</div>
		</div>
	);
}
