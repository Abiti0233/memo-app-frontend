import { type Category } from "@prisma/client";
import CategoryItem from "./category-item";

export default function CategoryList({
	category,
	className,
}: {
	category: Category[];
	className?: string;
}) {
	return (
		<div className={className}>
			<ul className="flex flex-col gap-4 align-middle">
				<li>
					<CategoryItem name="メモ一覧" />
				</li>
				<li>
					<CategoryItem name="ブックマーク" />
				</li>
				<li>
					<CategoryItem name="最近削除した項目" />
				</li>
				{category.map((category) => (
					<li key={category.id}>
						<CategoryItem name={category.name} />
					</li>
				))}
			</ul>
		</div>
	);
}
