export type PostType = {
	id: number;
	author: {
		avatarUrl: string;
		name: string;
		role: string;
	};
	publishedAt: Date;
	content: {
		type: "paragragh" | "link";
		content: string;
	}[];
};
