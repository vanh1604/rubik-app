import { StyleSheet } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../constansts/style";
import { Box, Image, StatusBar } from "native-base";

const SplashScreen = () => {
	return (
		// <Image
		// 	source={require("../../assets/background/Rectangle 22.png")}
		// 	size={"full"}
		// />
		<Box>
			<StatusBar hidden />
			<Image
				source={require("../../assets/background/Rectangle_22.png")}
				alt="Splash Screen"
				width={windowWidth}
				height={windowHeight}
			/>
		</Box>
	);
};

export default SplashScreen;

const styles = StyleSheet.create({});
