import { PostType } from "../types/post";

export const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/userthiago.png",
			name: "Thiago Santos",
			role: "Frontend Developer",
		},
		content: [
			{
				type: "paragragh",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragragh",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "jane.design/doctorcare",
			},
		],
		publishedAt: new Date("2023-04-11 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl:
				"https://scontent.fssz1-1.fna.fbcdn.net/v/t1.6435-9/97345659_3445307328814824_6634681203288965120_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=84a396&_nc_ohc=IvpWOA1Mu24AX9r3YcK&_nc_ht=scontent.fssz1-1.fna&oh=00_AfA20X8mXfNMD_unmO4jb4xyOBW0QbyUTDPVECpOswbMMg&oe=645D874E",
			name: "Naila Rocco",
			role: "TEA Instructor",
		},
		content: [
			{
				type: "paragragh",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragragh",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "jane.design/doctorcare",
			},
		],
		publishedAt: new Date("2023-04-08 17:00:00"),
	},
];
