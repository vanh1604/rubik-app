import React from "react";
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
	return (
		<Box>
			<Text style={[STYLES.title, { marginBottom: 4 }]}>
				Câu {props.order}:
			</Text>
			<Text mb={8}>{props.title}</Text>
			{props.ans.map((item, index) => (
				<QuizzItem
					{...item}
					key={index}
				/>
			))}
		</Box>
	);
};

export default QuizzDisplay;
