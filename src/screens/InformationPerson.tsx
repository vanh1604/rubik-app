import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import { Box, Center, Column, Image, Row, Switch, Text } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import UserCard, { InfoCardProps } from "../components/Information/Card";
import { informationNav } from "../constansts/UserInformation";

type Props = {};

const InformationPerson = (props: Props) => {
	return (
		<View
			style={{
				backgroundColor: "#FFF",
				width: "100%",
				flex: 1,
			}}>
			<Header1 title="Thông tin" />
			<Column
				mx={6}
				mt={6}>
				<TouchableOpacity
					style={{
						height: 72,
						backgroundColor: "#F3F4F6",
						borderRadius: 16,
						paddingHorizontal: 12,
					}}>
					<UserCard
						title="Đổi hình đại diện"
						Left={
							<Image
								source={require("../components/assets/Ellipse.png")}
								w={12}
								h={12}
								mr={4}
							/>
						}
						Right={
							<Ionicons
								name="chevron-forward"
								size={24}
								color="black"
							/>
						}
					/>
				</TouchableOpacity>

				<View
					style={{
						backgroundColor: "#F3F4F6",
						marginTop: 16,
						width: "100%",
						borderRadius: 16,
					}}>
					{informationNav.map((info) => (
						<TouchableOpacity {...info.parentOptions}>
							<UserCard {...info.childrenOptions} />
						</TouchableOpacity>
					))}
				</View>
			</Column>
		</View>
	);
};

export default InformationPerson;

const styles = StyleSheet.create({
	card: {
		borderBottomWidth: 1,
		borderColor: "#E5E7EB",
		height: 56,
		backgroundColor: "#F3F4F6",
		borderRadius: 16,
		paddingHorizontal: 16,
	},
});
