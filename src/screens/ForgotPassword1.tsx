import { TouchableOpacity, Image, StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box } from "native-base";

type Props = {};

const ForgotPassword1 = (props: Props) => {
	return (
		<BackgroundLayout>
			<Box
				paddingTop={107}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Text
					style={{
						fontSize: 12,
						fontFamily: "IBMPlexMono_400Regular",
						textAlign: "center",
						color: "#FFF",
					}}
				>
					Nhập số điện thoại để khôi phục tài khoản
				</Text>
			</Box>

			<Box
				justifyContent={"center"}
				alignItems={"center"}
				paddingTop={74}
				paddingBottom={128}
				px={6}
			>
				<Box
					width={"100%"}
					height={37}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"row"}
					paddingTop={128}
					paddingBottom={8}
					borderColor={"#FFF"}
					borderBottomWidth={1}
				>
					<Image
						source={require("../components/assets/call.png")}
						style={{ width: 20, height: 20 }}
					/>
					<TextInput
						placeholder="Số điện thoại"
						placeholderTextColor="rgba(255, 255, 255, 0.4)"
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							width: 306,
							height: 25,
							fontSize: 14,
							paddingLeft: 8,
							marginTop: 5,
						}}
					/>
				</Box>
			</Box>

			<TouchableOpacity
				style={{
					width: 175,
					height: 41,
					backgroundColor: "#FFF",
					borderRadius: 100,
					justifyContent: "center",
					alignItems: "center",
					alignSelf: "center",
					paddingTop: 10,
					paddingBottom: 10,
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<Text
					style={{
						color: "#652FAE",
						textAlign: "center",
						fontFamily: "IBMPlexMono_500Medium",
					}}
				>
					ĐẶT LẠI MẬT KHẨU
				</Text>
			</TouchableOpacity>
		</BackgroundLayout>
	);
};

export default ForgotPassword1;

const styles = StyleSheet.create({});
