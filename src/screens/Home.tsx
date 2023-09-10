import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Image } from "native-base";
import CardItem from "../components/Home/CardItem";
import CardItemBox from "../components/Home/CardItemBox";
import { mockupData } from "../constansts/items";

type Props = {};

const Home = (props: Props) => {
	return (
		<SafeAreaView
			style={{
				marginHorizontal: 24,
			}}>
			<Center mt={6}>
				<Image
					source={require("../../assets/image/Logo/main_logo.png")}
					alt="Home icon"
				/>
			</Center>
			<CardItemBox
				title="Rubik 3x3x3"
				data={mockupData}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
