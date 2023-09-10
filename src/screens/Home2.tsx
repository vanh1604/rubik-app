import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../constansts/style";
import { Image, StatusBar } from "native-base";

const Home2 = () => {
	return (
		// <Image
		// 	source={require("../../assets/background/Rectangle 22.png")}
		// 	size={"full"}
		// />
		<View>
			<StatusBar hidden />
			<Image
				source={require("../../assets/background/Rectangle_22.png")}
				alt="Splash Screen"
				width={windowWidth}
				height={windowHeight}
			/>
		</View>
	);
};

export default Home2;

const styles = StyleSheet.create({});
