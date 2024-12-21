export type Memo = {
	id: string;
	userId: string;
	title: string;
	content: string;
	is_archived: boolean;
	createdAt: Date;
	updatedAt: Date;
}[];
