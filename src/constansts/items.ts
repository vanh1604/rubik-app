import { CardItemProps } from "../components/Main/CardItem";

export const mockupData: CardItemProps[] = new Array(5).fill({
	title: "Lorem ipsum Dolor sit amet",
	cardImage: require("../../assets/image/Logo/item_logo.png"),
});

const emptyArray = new Array(5).fill({ title: "", ans: [], order: 0 });

export const quizzes = emptyArray.map((item: any, index: any) => {
	return {
		title: "Lorem ipsum dolor sit amet consectetur. Penatibus nunc quam nulla dignissim libero massa feugiat.",
		ans: [
			{
				answer: "A",
				title: "Lorem ipsum 1",
				isRightAnswer: true,
			},
			{
				answer: "B",
				title: "Lorem ipsum 2",
				isRightAnswer: false,
			},
			{
				answer: "C",
				title: "Lorem ipsum 3",
				isRightAnswer: false,
			},
			{
				answer: "D",
				title: "Lorem ipsum 4",
				isRightAnswer: false,
			},
		],
		order: index + 1,
	};
});
