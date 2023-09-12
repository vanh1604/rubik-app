import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import React from "react";

export interface SearchBarProps extends TextInputProps {}

const SearchBar = (props: SearchBarProps) => {
	return (
		<View>
			<TextInput {...props} />
			<Text>SearchBar</Text>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({});
