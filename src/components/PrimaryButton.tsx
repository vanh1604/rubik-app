import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Center } from "native-base";
import { Text } from "native-base";
import { colors } from "../constansts/style";

export interface PrimaryButtonProps extends TouchableOpacityProps {
	title: String;
	bottom?: number;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
	return (
		<TouchableOpacity
			{...props}
			style={{
				backgroundColor: colors.primary,
				width: "100%",
				borderRadius: 999,
				paddingHorizontal: 24,
				paddingVertical: 10,
			}}
		>
			<Center>
				<Text color="#fff">{props.title}</Text>
			</Center>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({});
