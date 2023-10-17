import React, { useState } from "react";
import { Box, FlatList, Text } from "native-base";
import QuizzItem, { QuizzItemProps } from "./QuizzItem";
import { STYLES } from "../../constansts/style";
import Footer from "./Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setUserChoice } from "../../store/answer.reducer";
import { quizzes } from "../../constansts/items";

export interface QuizzProps {
	ans: QuizzItemProps[];
	title: string;
	order: number;
	isQuizRightAns?: boolean;
	onOrderChange?: any;
	questions?: any;
}

const QuizzDisplay = (props: QuizzProps) => {
	const questions: any = useSelector<any>((state) => state.answer);
	const currentQuestion: (typeof questions)[0] = questions[props.order - 1];
	const dispatch = useDispatch();
	const handleOptionClick = (option: QuizzItemProps) => {
		if (!props.isQuizRightAns) {
			// setSelectedOption(option);
			dispatch(setUserChoice(option));
		}
	};
	return (
		<Box>
			<Text style={[STYLES.title, { marginBottom: 4 }]}>Câu {props.order}:</Text>
			<Text mb={8}>{props.title}</Text>
			{props.ans.map((item, index) => {
				const isBold = (!props.isQuizRightAns && currentQuestion.userAns === item.answer) || (props.isQuizRightAns && item.answer == currentQuestion.rightAns);
				return (
					<QuizzItem
						{...item}
						key={index}
						isUserChoice={isBold}
						onPress={() => handleOptionClick({ ...item, order: props.order - 1 })}
						order={props.order}
					/>
				);
			})}
			{!props.isQuizRightAns && (
				<Footer
					isFirst={props.order == 1}
					isLast={props.order == props.questions.length}
					footerLeftOptions={{
						onPress: () => {
							props.onOrderChange(props.order - 1);
						},
					}}
					footerRightOptions={{
						onPress: () => {
							props.onOrderChange(props.order + 1);
						},
						endProgressTitle: "Nộp bài",
					}}
				/>
			)}
		</Box>
	);
};

export default QuizzDisplay;
