import {
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Box, Row, Text, useTheme } from "native-base";
import { Switch } from "native-base";
import { useNavigation } from "@react-navigation/native";

export interface TrainingItemProps extends TouchableOpacityProps {
	time: string;
}

const TrainingItem = (props: TrainingItemProps) => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();

	return (
		<TouchableOpacity
			{...props}
			onPress={() =>
				navigation.navigate("TimePicker", {
					initialTime: props.time,
				})
			}>
			<Row
				justifyContent={"space-between"}
				padding={"4"}
				alignItems={"center"}
				borderBottomWidth={"1"}
				borderBottomColor={colors.muted[300]}>
				<Box>
					<Text fontSize={"30px"}>{props.time}</Text>
					<Text fontSize={"16"}>Hàng ngày</Text>
				</Box>
				<Box>
					<Switch
						size="lg"
						onTrackColor={colors.green[500]}
					/>
				</Box>
			</Row>
		</TouchableOpacity>
	);
};

export default TrainingItem;

const styles = StyleSheet.create({});
