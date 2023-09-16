import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Column } from "native-base";
import { useTheme } from "native-base";
import TrainingItem from "../components/Training/TrainingItem";
import Header1 from "../components/Header1";
import { Add } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const Trainning = () => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();

	return (
		<Column flex={1}>
			<Header1
				title="Lịch tập luyện"
				RightBtn={({ color, size }) => (
					<TouchableOpacity onPress={() => navigation.navigate("TimePicker", {})}>
						<Add
							color={color}
							size={size}
						/>
					</TouchableOpacity>
				)}
			/>
			<Box flex={1}>
				<TrainingItem time="12:00" />
				<TrainingItem time="17:00" />
				<TrainingItem time="21:00" />
			</Box>
		</Column>
	);
};

export default Trainning;

const styles = StyleSheet.create({});
