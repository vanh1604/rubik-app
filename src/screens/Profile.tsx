import {
	TouchableOpacity,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { Box, Center, Row, Switch } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import BackBtn from "../components/BackBtn";

type Props = {};

const UserProfile = (props: Props) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#FFF",
				width: "100%",
			}}
		>
			<Header1
				title="Cuộc thi"
				LeftBtn={BackBtn}
			/>
			<Box
				width={"100%"}
				mt={6}
				px={6}
			>
				<Text
					style={{
						fontFamily: "IBMPlexMono_500Medium",
						color: "#737373",
						paddingBottom: 4,
					}}
				>
					Họ tên
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						style={{
							color: "#262626",
							fontFamily: "IBMPlexMono_500Medium",
							height: 40,
							fontSize: 16,
							paddingTop: 8,
							paddingBottom: 8,
							paddingHorizontal: 12,
						}}
					/>
				</Box>

				<Text
					style={{
						fontFamily: "IBMPlexMono_500Medium",
						color: "#737373",
						paddingBottom: 4,
						paddingTop: 16,
					}}
				>
					Điện thoại
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						style={{
							color: "#262626",
							fontFamily: "IBMPlexMono_400Regular",
							height: 40,
							fontSize: 16,
							paddingTop: 8,
							paddingBottom: 8,
							paddingHorizontal: 12,
						}}
					/>
				</Box>

				<Text
					style={{
						fontFamily: "IBMPlexMono_500Medium",
						color: "#737373",
						paddingBottom: 4,
						paddingTop: 16,
					}}
				>
					Ngày tham gia
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						style={{
							color: "#262626",
							fontFamily: "IBMPlexMono_400Regular",
							height: 40,
							fontSize: 16,
							paddingTop: 8,
							paddingBottom: 8,
							paddingHorizontal: 12,
						}}
					/>
				</Box>
			</Box>
		</View>
	);
};

export default UserProfile;

const styles = StyleSheet.create({});
