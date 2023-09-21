import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Column } from "native-base";
import { useTheme } from "native-base";
import TrainingItem from "../components/Training/TrainingItem";
import Header1 from "../components/Header1";
import { Add } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { timeFormat } from "../constansts/functions";
import { RootState } from "../store";

const Trainning = () => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();

	const calendarsDisplay = useSelector<RootState>((state) =>
		state.calendars.map((item, index) => (
			<TrainingItem
				time={item}
				key={item}
				index={index}
			/>
		))
	);
	const calendars = useSelector<RootState>((state) => state.calendars);
	console.log(calendars);
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
			<Box flex={1}>{calendarsDisplay}</Box>
		</Column>
	);
};

export default Trainning;

const styles = StyleSheet.create({});
