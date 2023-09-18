import React, { useState } from "react";
import { Box, FlatList, Text } from "native-base";
import QuizzItem, { QuizzItemProps } from "./QuizzItem";
import { STYLES } from "../../constansts/style";

export interface QuizzProps {
	ans: QuizzItemProps[];
	title: string;
	order: number;
	isAnswering?: boolean;
}

const QuizzDisplay = (props: QuizzProps) => {
	const [selectedOption, setSelectedOption] = useState<QuizzItemProps | null>(null);

	const handleOptionClick = (option: QuizzItemProps) => {
		setSelectedOption(option);
	};
	return (
		<Box>
			<Text style={[STYLES.title, { marginBottom: 4 }]}>Câu {props.order}:</Text>
			<Text mb={8}>{props.title}</Text>
			{props.ans.map((item, index) => (
				<QuizzItem
					{...item}
					key={index}
					isUserChoice={selectedOption?.title === item.title || (props.isAnswering && item.isRightAnswer)}
					onPress={() => handleOptionClick(item)}
				/>
			))}
		</Box>
	);
};

export default QuizzDisplay;
