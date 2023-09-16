import { TouchableOpacity, Image, StyleSheet, Text, TextInput } from "react-native";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box } from "native-base";

type Props = {};

const ForgotPassword3 = (props: Props) => {
	return (
		<BackgroundLayout>
			<Box
				justifyContent={"center"}
				alignItems={"center"}
				paddingTop={219}
				px={6}
			>
				<Box
					width={"100%"}
					height={37}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"row"}
					paddingTop={8}
					paddingBottom={8}
					borderColor={"#FFF"}
					borderBottomWidth={1}
				>
					<Image
						source={require("../components/assets/lock-closed.png")}
						style={{ width: 20, height: 20 }}
					/>
					<TextInput
						placeholder="Nhập mật khẩu"
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

					<Image
						source={require("../components/assets/eye-off.png")}
						style={{ width: 20, height: 20 }}
					/>
				</Box>

				<Box
					width={"100%"}
					height={37}
					justifyContent={"center"}
					alignItems={"center"}
					flexDirection={"row"}
					paddingTop={16}
					paddingBottom={8}
					borderColor={"#FFF"}
					borderBottomWidth={1}
				>
					<Image
						source={require("../components/assets/lock-closed.png")}
						style={{ width: 20, height: 20 }}
					/>
					<TextInput
						placeholder="Nhập lại mật khẩu"
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
						secureTextEntry
					/>

					<Image
						source={require("../components/assets/eye-off.png")}
						style={{ width: 20, height: 20 }}
					/>
				</Box>
			</Box>

			<TouchableOpacity
				style={{
					width: 141,
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
					marginTop: 109,
				}}
			>
				<Text
					style={{
						color: "#652FAE",
						textAlign: "center",
						fontFamily: "IBMPlexMono_500Medium",
					}}
				>
					ĐỔI MẬT KHẨU
				</Text>
			</TouchableOpacity>
		</BackgroundLayout>
	);
};

export default ForgotPassword3;

const styles = StyleSheet.create({});
