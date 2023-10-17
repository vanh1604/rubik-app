import { CardItemProps } from "../components/Main/CardItem";

export const quizzes = [
	{
		ans: [
			{ title: "Lorem ipsum 1", answer: "A" },
			{ title: "Lorem ipsum 2", answer: "B" },
			{ title: "Lorem ipsum C", answer: "C" },
			{ title: "Lorem ipsum 4", answer: "D" },
		],
		order: 1,
		rightAns: "A",
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		userAns: "",
	},
	{
		ans: [
			{ title: "Lorem ipsum 1", answer: "A" },
			{ title: "Lorem ipsum 2", answer: "B" },
			{ title: "Lorem ipsum C", answer: "C" },
			{ title: "Lorem ipsum 4", answer: "D" },
		],
		order: 2,
		rightAns: "B",
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		userAns: "",
	},
	{
		ans: [
			{ title: "Lorem ipsum 1", answer: "A" },
			{ title: "Lorem ipsum 2", answer: "B" },
			{ title: "Lorem ipsum C", answer: "C" },
			{ title: "Lorem ipsum 4", answer: "D" },
		],
		order: 3,
		rightAns: "C",
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		userAns: "",
	},
	{
		ans: [
			{ title: "Lorem ipsum 1", answer: "A" },
			{ title: "Lorem ipsum 2", answer: "B" },
			{ title: "Lorem ipsum 3", answer: "C" },
			{ title: "Lorem ipsum 4", answer: "D" },
		],
		order: 4,
		rightAns: "B",
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		userAns: "",
	},
	{
		ans: [
			{ title: "Lorem ipsum 1", answer: "A" },
			{ title: "Lorem ipsum 2", answer: "B" },
			{ title: "Lorem ipsum 3", answer: "C" },
			{ title: "Lorem ipsum 4", answer: "D" },
		],
		order: 5,
		rightAns: "A",
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		userAns: "",
	},
];

export const mockupData: CardItemProps[] = [
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
];
