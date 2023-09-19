import { TouchableOpacity, Image, StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";
import BackgroundLayout from "../../../components/BackgroundLayout";
import { Box } from "native-base";
import { Entypo } from "@expo/vector-icons";
import NotificationBox from "../../../components/NotificationBox";
import { useNavigation } from "@react-navigation/native";
import { colors, windowHeight } from "../../../constansts/style";

type Props = {};

const ForgotPassword3 = (props: Props) => {
	const navigation = useNavigation<any>();
	const [states, setStates] = useState({
		passShow: false,
		password: "",
		passwordReEntered: "",
		showModal: false,
	});
	const onStateChange = (key: string, value: any) => {
		setStates((prevState) => {
			return {
				...prevState,
				[key]: value,
			};
		});
	};
	const toggleNoti = () => {
		onStateChange("showModal", !states.showModal);
	};
	const validatePassword = () => {
		const isValidate = states.password === states.passwordReEntered;
		if (isValidate) toggleNoti();
	};
	return (
		<BackgroundLayout>
			<Box
				height={windowHeight}
				justifyContent={"center"}
				alignItems={"center"}
				alignSelf={"center"}
				mx={12}
			>
				<Box
					width={"100%"}
					flexDirection={"row"}
					borderColor={"#FFF"}
					borderBottomWidth={1}
					pb={1}
				>
					<Entypo
						name="lock"
						size={20}
						color="#fff"
					/>
					<TextInput
						placeholder="Nhập mật khẩu"
						placeholderTextColor="rgba(255, 255, 255, 0.4)"
						secureTextEntry={states.passShow}
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							width: "100%",
							fontSize: 14,
							marginLeft: 6,
						}}
						value={states.password}
						onChangeText={(text: string) => onStateChange("password", text)}
					/>

					<TouchableOpacity onPress={() => onStateChange("passShow", !states.passShow)}>
						<Entypo
							name={states.passShow ? "eye" : "eye-with-line"}
							size={20}
							color={colors.lightGrey}
						/>
					</TouchableOpacity>
				</Box>

				<Box
					width={"100%"}
					alignItems={"center"}
					flexDirection={"row"}
					borderColor={"#FFF"}
					borderBottomWidth={1}
					pb={1}
					mt={4}
				>
					<Entypo
						name="lock"
						size={20}
						color="#fff"
					/>
					<TextInput
						placeholder="Nhập lại mật khẩu"
						placeholderTextColor="rgba(255, 255, 255, 0.4)"
						style={{
							color: "#FFF",
							fontFamily: "IBMPlexMono_400Regular",
							fontSize: 14,
							width: "100%",
							marginLeft: 6,
						}}
						secureTextEntry={states.passShow}
						value={states.passwordReEntered}
						onChangeText={(text: string) => onStateChange("passwordReEntered", text)}
					/>

					<TouchableOpacity onPress={() => onStateChange("passShow", !states.passShow)}>
						<Entypo
							name={states.passShow ? "eye" : "eye-with-line"}
							size={20}
							color={colors.lightGrey}
						/>
					</TouchableOpacity>
				</Box>
				<TouchableOpacity
					style={{
						backgroundColor: "#FFF",
						borderRadius: 100,
						paddingVertical: 10,
						paddingHorizontal: 20,
						marginTop: 109,
					}}
					onPress={validatePassword}
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
			</Box>

			<NotificationBox
				title="Đổi mật khẩu thành công. Đăng nhập lại để tiếp tục"
				onConfirmHandler={() => {
					navigation.navigate("Login");
				}}
				showModal={states.showModal}
			/>
		</BackgroundLayout>
	);
};

export default ForgotPassword3;

const styles = StyleSheet.create({});
