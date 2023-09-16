import { SafeAreaView, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box, Center, Image, Row, ScrollView, Stack, Text } from "native-base";
import CardItemBox from "../components/Main/CardItemBox";
import { mockupData } from "../constansts/items";
import { Ionicons } from "@expo/vector-icons";
import HomeHeader from "../components/HeaderHome";

type Props = {};

const Main = (props: Props) => {
	const userName = "Hehehe";
	const userAva = "https://cdn.tuoitre.vn/thumb_w/730/2021/7/10/screen-shot-2021-07-10-at-114922-1625892571909294221772.png";
	return (
		<Box>
			<HomeHeader
				title=""
				headerLeft={
					<TouchableOpacity>
						<Text
							ml={2}
							fontSize={16}
							color={"#fff"}
						>
							{userName}
						</Text>
					</TouchableOpacity>
				}
				headerRight={
					<Row>
						<Ionicons
							name="notifications"
							size={24}
							color="#fff"
						/>
						<Image
							source={{ uri: userAva }}
							w={8}
							h={8}
							mr={3}
							ml={2}
							alt="avata"
							borderRadius={999}
						/>
					</Row>
				}
			/>
			<ScrollView>
				<Box m={6}>
					<Center>
						<Image
							source={require("../../assets/image/Logo/main_logo.png")}
							alt="Main logo"
							borderRadius={16}
						/>
					</Center>
					<CardItemBox
						data={mockupData}
						title="Rubik 3x3x3"
					/>
					<CardItemBox
						data={mockupData}
						title="Rubik 3x3x3"
					/>
					<CardItemBox
						data={mockupData}
						title="Rubik 3x3x3"
					/>
				</Box>
			</ScrollView>
		</Box>
	);
};

export default Main;

const styles = StyleSheet.create({});
