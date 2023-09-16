import {
	TouchableOpacity,
	Image,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
import React from "react";
import { Box, Center, Row, ScrollView, Switch, Text } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { IBMPlexMono_400Regular } from "@expo-google-fonts/ibm-plex-mono";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Header1 from "../components/Header1";
import BackBtn from "../components/BackBtn";

type Props = {};

const PrivacyPolicy = (props: Props) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#FFF",
				width: "100%",
			}}
		>
			<Header1
				title="Chính sách bảo mật"
				LeftBtn={BackBtn}
			/>
			<ScrollView>
				<Text
					mt={6}
					px={6}
					style={{ fontFamily: "IBMPlexMono_400Regular" }}
				>
					Lorem ipsum dolor sit amet consectetur. Ornare augue ut
					volutpat pharetra vulputate habitasse faucibus nibh morbi.
					Amet auctor dictum nisi sagittis venenatis vitae pulvinar.
					Risus aliquet pellentesque mattis ac porttitor ultrices.
					Viverra ultrices leo fringilla mauris ut in. At urna enim
					dui elit pharetra at condimentum in. Maecenas a est risus
					ornare gravida nibh sed. Fermentum aliquam consequat ut enim
					sed eget pharetra bibendum placerat. Eget magna sed in
					auctor orci in elementum lobortis. Velit malesuada massa
					fermentum ullamcorper sit justo. At quisque congue ut
					porttitor mauris sed pharetra urna vitae. Eget neque non
					luctus placerat libero tellus. Tellus tortor sapien
					pellentesque aliquet mauris. Lacus viverra orci posuere in.
					Condimentum in porttitor et eget mattis lectus at at enim.
					Nisl adipiscing varius non sed euismod morbi sed. Donec
					phasellus enim molestie facilisis. Ornare cursus tellus
					dictum velit phasellus elementum. Quisque volutpat laoreet
					eget pharetra dignissim amet sed. Ullamcorper phasellus sed
					dapibus adipiscing quisque vulpu
				</Text>
			</ScrollView>
		</View>
	);
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
