// ログインしているユーザーのカテゴリー情報を取得する
// 一旦ダミーデータを返す
export const getCategories = async () => {
	return [
		{
			id: "aa420d97-fb4a-41cd-8e29-98c4a22a799f",
			userId: "user123",
			name: "読書",
			createdAt: new Date("2024-12-21T08:30:26.278713"),
			updatedAt: new Date("2024-12-21T08:30:26.278727"),
		},
		{
			id: "9cea718c-258a-4538-aa43-7a165d1ea934",
			userId: "user123",
			name: "運動",
			createdAt: new Date("2024-12-21T08:30:26.280146"),
			updatedAt: new Date("2024-12-21T08:30:26.280155"),
		},
		{
			id: "7e22c4ed-52d0-4af8-8776-c62191fc1a4c",
			userId: "user123",
			name: "仕事",
			createdAt: new Date("2024-12-21T08:30:26.280348"),
			updatedAt: new Date("2024-12-21T08:30:26.280353"),
		},
		{
			id: "60cc2268-a546-4261-9dd2-b3189888f32c",
			userId: "user123",
			name: "趣味",
			createdAt: new Date("2024-12-21T08:30:26.280507"),
			updatedAt: new Date("2024-12-21T08:30:26.280510"),
		},
		{
			id: "3638af9d-46cd-4cc2-875b-fd451f7105bb",
			userId: "user123",
			name: "料理",
			createdAt: new Date("2024-12-21T08:30:26.280785"),
			updatedAt: new Date("2024-12-21T08:30:26.280795"),
		},
	];
};
