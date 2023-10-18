import { CardItemProps } from "../components/Main/CardItem";
import { ItemBoxProps } from "../components/Main/CardItemBox";

export const quizzes = [
	{
		ans: [
			{ title: "Albert Einstein ", answer: "A" },
			{ title: "Isaac Newton ", answer: "B" },
			{ title: "Ernő Rubik ", answer: "C" },
			{ title: "Nikola Tesla ", answer: "D" },
		],
		order: 1,
		rightAns: "C",
		title: "Ai là người phát minh ra khối Rubik?",
		userAns: "",
	},
	{
		ans: [
			{ title: "20", answer: "A" },
			{ title: "26", answer: "B" },
			{ title: "27", answer: "C" },
			{ title: "30", answer: "D" },
		],
		order: 2,
		rightAns: "B",
		title: "Khối Rubik 3x3x3 có bao nhiêu mảnh?",
		userAns: "",
	},
	{
		ans: [
			{ title: "Dưới 5 giây", answer: "A" },
			{ title: "Từ 5 đến 10 giây", answer: "B" },
			{ title: "Từ 10 đến 15 giây", answer: "C" },
			{ title: "Trên 15 giây", answer: "D" },
		],
		order: 3,
		rightAns: "A",
		title: "Kỷ lục thế giới về thời gian giải Rubik 3x3x3 nhanh nhất (đến thời điểm hiện tại) là bao lâu?",
		userAns: "",
	},
	{
		ans: [
			{ title: "Xoay góc của khối", answer: "A" },
			{ title: "Đổi chỗ các mảnh cạnh", answer: "B" },
			{ title: "Đảo ngược vị trí các mảnh góc", answer: "C" },
			{ title: "Xếp các mảnh cạnh đúng vị trí", answer: "D" },
		],
		order: 4,
		rightAns: "B",
		title: "Trong quá trình giải Rubik, thuật toán “F R U Ri Ui Fi” được sử dụng để làm gì?",
		userAns: "",
	},
	{
		ans: [
			{ title: "Tất cả các mặt đều có cùng một màu.", answer: "A" },
			{ title: "Tất cả các mảnh đều đúng vị trí.", answer: "B" },
			{ title: "Tất cả các mảnh đều đúng hướng.", answer: "C" },
			{ title: "Tất cả các phương án trên.", answer: "D" },
		],
		order: 5,
		rightAns: "D",
		title: "Một khối Rubik được xem là đã giải xong khi…",
		userAns: "",
	},
];

const mockupDataCard: CardItemProps[] = [
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo2.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo3.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
	{ cardImage: require("../../assets/image/Logo/item_logo3.png"), quizzes: quizzes, title: "Lorem ipsum Dolor sit amet" },
];

export const mockupData: ItemBoxProps[] = [
	{
		title: "Rubik 3x3x3",
		data: mockupDataCard,
	},
	{
		title: "Rubik 3x3x3",
		data: mockupDataCard,
	},
	{
		title: "Rubik 3x3x3",
		data: mockupDataCard,
	},
];
