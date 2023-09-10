import { StyleSheet, Text, TextProps } from "react-native";
import React from "react";

const Title = (props: TextProps) => {
	return <Text style={styles.title}>Title</Text>;
};

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		lineHeight: 24,
		fontWeight: "500",
	},
});
