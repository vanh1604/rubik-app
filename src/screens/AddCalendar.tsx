import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { Box, Center, Checkbox } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "native-base";
import { STYLES, colors } from "../constansts/style";
import Header1 from "../components/Header1";
import { timeConvert } from "../constansts/functions";

const AddCalendar = () => {
	const navigation = useNavigation<any>();
	const route = useRoute<any>();
	const [date, setDate] = useState<any>(route.params.initialTime ? timeConvert(route.params.initialTime) : new Date());
	// console.log("date initial: ", new Date(`${route.params.initialTime}Z`));
	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate || date;
		// setShow(Platform.OS === "ios");
		setDate(currentDate);
	};
	const onCancelHandler = () => {
		console.log("Cancel");
		navigation.goBack();
	};
	const onSaveHandler = () => {
		console.log("save");
		navigation.goBack();
	};
	return (
		<Box
			bgColor={"#fff"}
			flex={1}
		>
			<Header1
				title="Thêm lịch"
				LeftBtn={() => (
					<TouchableOpacity onPress={onCancelHandler}>
						<Text color={"#fff"}>Hủy</Text>
					</TouchableOpacity>
				)}
				RightBtn={() => (
					<TouchableOpacity onPress={onSaveHandler}>
						<Text color={"#fff"}>Lưu</Text>
					</TouchableOpacity>
				)}
			/>
			<DateTimePicker
				mode={"time"}
				display="spinner"
				locale="en_GB"
				value={date}
				onChange={onChange}
			/>
			<Box
				borderBottomWidth={1}
				borderBottomColor={colors.lightGrey}
			>
				<Text
					bold
					fontSize={16}
					px={6}
					pb={2}
				>
					Lặp lại
				</Text>
			</Box>
			<MultipleChoiceBox options={["Mọi Thứ Hai", "Mọi Thứ Ba", "Mọi Thứ Tư", "Mọi Thứ Năm", "Mọi Thứ Sáu", "Mọi Thứ Bảy", "Mọi Chủ Nhật"]} />
			{!(route.params.initialTime || route.params) && (
				<Center
					mx={6}
					position={"absolute"}
					bottom={15}
					left={3}
					right={3}
				>
					<TouchableOpacity
						style={[
							STYLES.primaryButton,
							{
								width: "100%",
								paddingVertical: 10,
								paddingHorizontal: 24,
								borderRadius: 100,
							},
						]}
					>
						<Center>
							<Text color={"#fff"}>Xóa lịch</Text>
						</Center>
					</TouchableOpacity>
				</Center>
			)}
		</Box>
	);
};

export default AddCalendar;

interface MultipleChoiceBoxProps {
	options: string[];
}

const MultipleChoiceBox: React.FC<MultipleChoiceBoxProps> = ({ options }) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const toggleOption = (option: string) => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(selectedOptions.filter((item) => item !== option));
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};

	return (
		<Box>
			{options.map((option) => (
				<TouchableOpacity
					key={option}
					style={styles.optionContainer}
					onPress={() => toggleOption(option)}
				>
					<Text style={styles.optionText}>{option}</Text>
					<Checkbox
						value={option}
						borderWidth={0}
						rounded={"full"}
						isChecked={selectedOptions.includes(option)}
						size={6}
					/>
				</TouchableOpacity>
			))}
		</Box>
	);
};

const styles = StyleSheet.create({
	optionContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomColor: colors.lightGrey,
		borderBottomWidth: 1,
		paddingHorizontal: 24,
		paddingVertical: 4,
	},
	optionText: {
		marginLeft: 10,
	},
});
