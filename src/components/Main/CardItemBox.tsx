import { StyleSheet } from "react-native";
import React from "react";
import CardItem, { CardItemProps } from "./CardItem";
import { Box, FlatList, Text } from "native-base";

export interface ItemBoxProps {
	title: string;
	data: CardItemProps[];
}

const CardItemBox = (props: ItemBoxProps) => {
	return (
		<Box mt={4}>
			<Text
				bold
				fontSize={16}
				mb={1}
			>
				{props.title}
			</Text>
			<FlatList
				data={props.data}
				renderItem={({ item }) => <CardItem {...item} />}
				horizontal
				pb={6}
			/>
		</Box>
	);
};

export default CardItemBox;

const styles = StyleSheet.create({});
