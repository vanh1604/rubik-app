import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Card, Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
export interface CardItemProps extends TouchableOpacityProps {
	id?: string;
	title: string;
	cardImage: any;
}

const CardItem = (props: CardItemProps) => {
	const navigation = useNavigation<any>();
	const cardImageSize = {
		width: 143,
		height: 88,
	};
	const toQuizzHandler = () => {
		navigation.navigate("Quizz", { order: 1 });
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
