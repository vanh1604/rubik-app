import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Image } from "native-base";
import CardItem from "../components/Home/CardItem";
import CardItemBox from "../components/Home/CardItemBox";
import { mockupData } from "../constansts/items";

<<<<<<< HEAD
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
=======
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
>>>>>>> 88fefce1c717878255da181c5f6a89c492093a11

export default Home;

const styles = StyleSheet.create({});
