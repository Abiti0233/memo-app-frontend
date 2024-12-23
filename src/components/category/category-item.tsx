// import { Category } from "@prisma/client";

// TODO:本来はデータを受け取るため後でpropsの受け取り方を変更する（一旦文字をそのまま受け取る形で作成してしまう）
export default function CategoryItem({ name }: { name: string }) {
	return (
		<div className="w-full rounded-full py-2 text-center hover:bg-grey-100">
			<h4 className="text-body-m-bold">{name}</h4>
		</div>
	);
}
