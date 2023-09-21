import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import { Box, Row, Text, useTheme } from "native-base";
import { Switch } from "native-base";
import { useNavigation } from "@react-navigation/native";

export interface TrainingItemProps extends TouchableOpacityProps {
	time: string;
	index: number;
}

const TrainingItem = (props: TrainingItemProps) => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();
	const [isOpen, setIsOpen] = useState(false);
	const textColor = isOpen ? "#000" : colors.coolGray[300];

	return (
		<TouchableOpacity
			{...props}
			onPress={() =>
				navigation.navigate("TimePicker", {
					initialTime: props.time,
					index: props.index,
				})
			}
		>
			<Row
				justifyContent={"space-between"}
				padding={"4"}
				alignItems={"center"}
				borderBottomWidth={"1"}
				borderBottomColor={colors.muted[300]}
			>
				<Box>
					<Text
						fontSize={"30px"}
						color={textColor}
					>
						{props.time}
					</Text>
					<Text
						fontSize={"16"}
						color={textColor}
					>
						Hàng ngày
					</Text>
				</Box>
				<Box>
					<Switch
						size="lg"
						onTrackColor={colors.green[500]}
						onChange={() => setIsOpen((prevState) => !prevState)}
					/>
				</Box>
			</Row>
		</TouchableOpacity>
	);
};

export default TrainingItem;

const styles = StyleSheet.create({});
