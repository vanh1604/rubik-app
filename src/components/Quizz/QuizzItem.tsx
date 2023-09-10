import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Box, Row } from "native-base";
import { Text } from "native-base";
import { colors } from "../../constansts/style";

export interface QuizzItemProps {
	title: string;
	answer: string;
	rightAnswer?: boolean;
}

const QuizzItem = (props: QuizzItemProps) => {
	return (
		<TouchableOpacity
			style={[
				styles.answerBox,
				{
					marginBottom: 16,
				},
			]}>
			<Row>
				<Text
					bold
					mr={2}>
					{props.answer}.{" "}
				</Text>
				<Text>{props.title}</Text>
			</Row>
		</TouchableOpacity>
	);
};

export default QuizzItem;

const styles = StyleSheet.create({
	answerBox: {
		borderWidth: 1,
		borderColor: colors.lightGrey,
		borderRadius: 100,
		paddingHorizontal: 24,
		paddingVertical: 10,
	},
});
