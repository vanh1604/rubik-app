import {
	SafeAreaView,
	StyleSheet,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import React, { ReactNode } from "react";
import { Box, Center, HStack, Row, Text } from "native-base";
import { useTheme } from "native-base";
import BackgroundLayout from "./BackgroundLayout";
import { Add, ArrowLeft2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";
interface Props {
	title: string;
	handleButtonAdd?: any;
	handleButtonSave?: any;
	handleBtnCancel?: any;
	headerLeft?: ReactNode;
	headerRight?: ReactNode;
	onAddButtonPress?: any;
	hasSearchBar?: boolean;
}
const Header = (props: Props) => {
	const { colors } = useTheme();
	const {
		title,
		handleBtnCancel = null,
		handleButtonAdd = null,
		handleButtonSave,
		headerLeft,
	} = props;
	const navigation = useNavigation<any>();
	const backButton = headerLeft || (
		<TouchableOpacity
			onPress={navigation.goBack}
			style={{ width: "33%" }}>
			<ArrowLeft2
				size="32"
				color="#fff"
			/>
		</TouchableOpacity>
	);
	return (
		<Box height={24}>
			<BackgroundLayout>
				<Row
					alignItems={"center"}
					height={"100%"}>
					{backButton}
					<Box
						flex={1}
						justifyContent={"flex-end"}
						mb={2}>
						<HStack
							alignItems={"center"}
							justifyContent={"space-between"}
							px={2}>
							<Center>
								<Text
									color={"white"}
									fontWeight={500}
									fontSize={16}>
									{title}
								</Text>
								{props.hasSearchBar && (
									<Box>
										<SearchBar />
									</Box>
								)}
							</Center>
							{props.headerRight || <Box width={"33%"}></Box>}
						</HStack>
					</Box>
				</Row>
			</BackgroundLayout>
		</Box>
	);
};

export default Header;

const styles = StyleSheet.create({
	text: {
		color: "#FFFFFF",
	},
});
