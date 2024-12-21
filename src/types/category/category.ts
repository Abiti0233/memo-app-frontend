// 実際のデータはcreatedAt,updatedAtが日付型であるが、一旦文字列型で扱う
// TODO: 実際のデータを扱うときはcreatedAtとupdatedAtを日付型に変換する
export type Category = {
	id: string;
	userId: string;
	name: string;
	createdAt: Date;
	updatedAt: Date;
}[];
