import { StyleSheet } from "react-native";
import React from "react";
import { Box, Switch, Text } from "native-base";
import Header from "../components/Header";
import { useTheme } from "native-base";
import TrainingItem from "../components/Training/TrainingItem";
const Trainning = () => {
	const { colors } = useTheme();

	return (
		<Box flex={1}>
			<TrainingItem time="12:00" />
			<TrainingItem time="17:00" />
			<TrainingItem time="21:00" />
		</Box>
	);
};

export default Trainning;

const styles = StyleSheet.create({});
