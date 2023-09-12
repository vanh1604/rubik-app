import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box, Center, Image } from "native-base";
import CardItemBox from "../components/Main/CardItemBox";
import { mockupData } from "../constansts/items";

type Props = {};

const Main = (props: Props) => {
	return (
		<SafeAreaView style={{ marginHorizontal: 24 }}>
			<Center>
				<Image
					source={require("../../assets/image/Logo/main_logo.png")}
					alt="Main logo"
				/>
			</Center>
			<CardItemBox
				data={mockupData}
				title="Rubik 3x3x3"
			/>
		</SafeAreaView>
	);
};

export default Main;

const styles = StyleSheet.create({});
