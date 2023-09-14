import { StyleSheet, TouchableOpacityProps } from "react-native";
import { InfoCardProps } from "../components/Information/Card";
import { Ionicons } from "@expo/vector-icons";
import { Switch } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export interface InformationNav {
	parentOptions: TouchableOpacityProps;
	childrenOptions: InfoCardProps;
}

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

export const informationNav: InformationNav[] = [
	{
		parentOptions: {
			style: styles.card,
		},
		childrenOptions: {
			title: "Mật khẩu",
			Left: (
				<Ionicons
					name="lock-closed"
					size={20}
					color="black"
					style={{
						marginRight: 8,
					}}
				/>
			),
			Right: (
				<Ionicons
					name="chevron-forward"
					size={24}
					color="black"
				/>
			),
		},
	},
	{
		parentOptions: {
			style: styles.card,
		},
		childrenOptions: {
			title: "Thông tin",
			Left: (
				<Ionicons
					name="lock-closed"
					size={20}
					color="black"
					style={{
						marginRight: 8,
					}}
				/>
			),
			Right: (
				<Ionicons
					name="chevron-forward"
					size={24}
					color="black"
				/>
			),
		},
	},
	{
		parentOptions: {
			style: styles.card,
		},
		childrenOptions: {
			title: "Chính sách bảo mật",
			Left: (
				<AntDesign
					name="questioncircle"
					size={20}
					color="black"
					style={{ marginRight: 8 }}
				/>
			),
			Right: (
				<Ionicons
					name="chevron-forward"
					size={24}
					color="black"
				/>
			),
		},
	},
	{
		parentOptions: {
			style: {
				borderBottomWidth: 1,
				borderColor: "#E5E7EB",
				height: 56,
				backgroundColor: "#F3F4F6",
				borderRadius: 16,
				paddingHorizontal: 16,
			},
		},
		childrenOptions: {
			title: "Thông báo",
			Left: (
				<Ionicons
					name="notifications"
					size={20}
					color="black"
					style={{
						marginRight: 8,
					}}
				/>
			),
			Right: (
				<Switch
					onTrackColor="#EC3900"
					onThumbColor="#FFFFFF"
					offThumbColor="#FFFFFF"
					size="lg"
				/>
			),
		},
	},
];
