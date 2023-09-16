import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import BackBtn from "../components/BackBtn";
import Header1 from "../components/Header1";

type Props = {};

const ChangePassword = (props: Props) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#FFF",
				width: "100%",
			}}
		>
			<Header1
				title="Mật khẩu"
				LeftBtn={BackBtn}
			/>
			<Box
				width={"100%"}
				m={6}
			>
				<Text
					style={{
						fontFamily: "IBMPlexMono_500Medium",
						color: "#737373",
						paddingBottom: 4,
					}}
				>
					Mật khẩu cũ
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						secureTextEntry
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
					Mật khẩu mới
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						secureTextEntry
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
					Nhập lại mật khẩu
				</Text>

				<Box
					borderColor={"#D4D4D4"}
					borderWidth={1}
					borderRadius={16}
				>
					<TextInput
						secureTextEntry
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
						paddingTop: 8,
						fontSize: 12,
						fontFamily: "IBMPlexMono_400Regular",
						color: "#EF4444",
					}}
				>
					Mật khẩu chưa khớp
				</Text>
			</Box>
		</View>
	);
};

export default ChangePassword;

const styles = StyleSheet.create({});
