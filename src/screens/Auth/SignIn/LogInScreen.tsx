import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import React, { useState } from "react";
import BackgroundLayout from "../../../components/BackgroundLayout";
import { Box, Center, Row } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type Props = {};
const fakeUser = {
	username: "Dreamabtme@gmail.com",
	password: "vanh1604",
};
const LogInScreen = (props: Props) => {
	const [messageShow, setMessageShow] = useState(false);
	const navigation = useNavigation<any>();
	const signInHandler = () => {
		if (email.toLowerCase() === fakeUser.username.toLowerCase() && pass.toLowerCase() === fakeUser.password.toLowerCase()) {
			// Simulate a successful login; you can navigate to the next screen here
			Alert.alert("Login Successful", "Welcome!");
			navigation.replace("HomeTab");
		} else {
			// Simulate a failed login attempt
			setMessageShow(true);
		}
	};
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	return (
		<BackgroundLayout>
			<Box
				paddingTop={121}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Image
					source={require("../../../components/assets/Capa_1.png")}
					style={{ width: 62.4, height: 64 }}
				/>
			</Box>

			<Box
				justifyContent={"center"}
				alignItems={"center"}
				flexDirection={"row"}
			>
				<Text style={{ fontSize: 32, fontWeight: "700", color: "#FFF" }}>RUBIK</Text>
				<Text
					style={{
						fontSize: 32,
						fontWeight: "200",
						color: "#FFF",
						marginLeft: 5,
					}}
				>
					TRAINER
				</Text>
			</Box>

			<Box
				justifyContent={"center"}
				alignItems={"center"}
				paddingTop={74}
				px={6}
			>
				<Box
					width={"100%"}
					alignItems={"center"}
					flexDirection={"row"}
					paddingBottom={2}
					borderColor={"#FFF"}
					borderBottomWidth={1}
					mb={4}
				>
					<MaterialIcons
						name="email"
						size={20}
						color="#fff"
					/>
					<TextInput
						placeholder="Email"
						placeholderTextColor="rgba(255, 255, 255, 0.4)"
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							fontSize: 14,
							marginLeft: 4,
						}}
						onChangeText={setEmail}
						value={email}
					/>
				</Box>

				<Box
					width={"100%"}
					alignItems={"center"}
					flexDirection={"row"}
					paddingBottom={2}
					borderColor={"#FFF"}
					borderBottomWidth={1}
				>
					<Entypo
						name="lock"
						size={20}
						color="#fff"
					/>
					<TextInput
						placeholder="Mật khẩu"
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
						onChangeText={setPass}
						value={pass}
						secureTextEntry
					/>
				</Box>

				<TouchableOpacity style={{ alignSelf: "flex-end" }}>
					<Text
						style={{
							fontFamily: "IBMPlexMono_400Regular",
							color: "rgba(255,255,255,0.4)",
							fontSize: 12,
							textDecorationLine: "underline",
							paddingTop: 8,
						}}
					>
						Quên mật khẩu?
					</Text>
				</TouchableOpacity>
			</Box>
			{messageShow && (
				<Box
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Text
						style={{
							fontSize: 12,
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							paddingTop: 18,
							paddingBottom: 30,
						}}
					>
						Tài khoản hoặc mật khẩu chưa chính xác
					</Text>
				</Box>
			)}

			<TouchableOpacity
				style={{
					backgroundColor: "#FFF",
					borderRadius: 100,
					alignSelf: "center",
					paddingVertical: 10,
					paddingHorizontal: 20,
				}}
				onPress={signInHandler}
			>
				<Text
					style={{
						color: "#652FAE",
						textAlign: "center",
						fontFamily: "IBMPlexMono_500Medium",
					}}
				>
					ĐĂNG NHẬP
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					alignItems: "center",
					alignSelf: "center",
					marginTop: 156,
				}}
			>
				<Box style={{ flexDirection: "row", alignItems: "center" }}>
					<Text
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							marginRight: 4,
						}}
					>
						Bạn chưa có tài khoản?
					</Text>

					<Text
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_500Medium",
							textDecorationLine: "underline",
						}}
					>
						ĐĂNG KÝ
					</Text>
				</Box>
			</TouchableOpacity>
		</BackgroundLayout>
	);
};

export default LogInScreen;

const styles = StyleSheet.create({});
