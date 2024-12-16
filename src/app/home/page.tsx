export default function Page() {
	return (
		<main>
			<div className="flex">
				<section className="w-1/5 bg-grey-50">
					{/* 左の固定部分(コンポーネント化してね) 固定で */}
					<div className="h-screen px-6 pt-10">
						<h2 className="pb-16 text-center text-headline-l">メモアプリ</h2>
						<div>
							ここはメモ一覧、ブックマーク、最近削除した項目はデフォルトで表示
						</div>
						<br />
						<div>各ユーザーが作成したカテゴリーもここに表示</div>
						<button className="w-full rounded-full py-2 text-body-m-bold hover:bg-grey-100">
							カテゴリーを追加する +
						</button>
					</div>
				</section>
				<section className="w-full">
					<div className="flex flex-col">
						{/* //TODO: コンポーネント化してください。 */}
						<div className="h-12 w-full bg-grey-300 py-2 pr-4">
							<div className="ml-auto size-full w-[256px] pl-2">
								<input
									type="text"
									className="size-full rounded-lg pl-4 text-caption-m"
									placeholder="検索できるよ"
								/>
							</div>
						</div>
						<div className="flex">
							<div className="h-screen w-[35%] overflow-y-scroll bg-white">
								<div className="px-6 py-10">
									{/* コンポーネント化してね */}
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
									<div className="flex flex-col gap-2 rounded-lg border-b border-solid border-grey-200 p-4 hover:bg-grey-100">
										<h4 className="text-body-m-bold">タイトル</h4>
										<div className="flex gap-4 text-caption-m">
											<p>2024年3月11日</p>
											<p>内容少し表示...</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex w-full flex-col px-10 pt-10">
								<input
									type="text"
									className="mb-8 text-headline-xl outline-none"
									placeholder="タイトル"
								/>
								<input
									type="text"
									className="text-body-m outline-none"
									placeholder="メモを入力する"
								/>
							</div>
						</div>
					</div>
					{/* 右のメモ一覧＋メモ記入するところ */}
				</section>
			</div>
		</main>
	);
}
