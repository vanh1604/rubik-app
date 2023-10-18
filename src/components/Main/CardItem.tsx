import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Card, Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { quizzes } from "../../constansts/items";

export interface CardItemProps extends TouchableOpacityProps {
	id?: string;
	title: string;
	cardImage: any;
	quizzes: typeof quizzes;
}

const CardItem = (props: CardItemProps) => {
	const navigation = useNavigation<any>();
	const cardImageSize = {
		width: 143,
		height: 88,
	};
	const toQuizzHandler = () => {
		navigation.navigate("Quizz", { quizzes: props.quizzes });
	};
	return (
		<TouchableOpacity
			style={{ width: cardImageSize.width, marginRight: 8 }}
			{...props}
			onPress={toQuizzHandler}
		>
			<Image
				source={props.cardImage}
				width={"100%"}
				height={cardImageSize.height}
				alt="card image"
				borderRadius={8}
				mb={1}
			/>
			<Text
				fontSize={12}
				fontWeight={"400"}
				fontStyle={"normal"}
			>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

export default CardItem;

const styles = StyleSheet.create({});
