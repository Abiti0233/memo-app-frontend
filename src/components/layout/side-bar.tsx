import CategoryList from "../category/category-list";
import { getCategories } from "@/data/category";

export default async function SideBar() {
	const category = await getCategories();
	return (
		<section className="w-1/5 bg-grey-50">
			<div className="h-full px-6 py-10">
				<h2 className="pb-12 text-center text-headline-l">メモアプリ</h2>
				<CategoryList category={category} className="mb-4" />
				<button className="w-full rounded-full py-2 text-body-m-bold hover:bg-grey-100">
					カテゴリーを追加する +
				</button>
			</div>
		</section>
	);
}
