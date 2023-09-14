import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	ProfileCircle,
	Cup,
	Calendar,
	Home as HomeIcon,
	Chart,
	Add,
	Chart1,
} from "iconsax-react-native";
import Home from "../screens/Home";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { BottomTabsParams } from "./config";
import Progress from "../screens/Progress";
import Trainning from "../screens/Trainning";
import LeagueSearch from "../screens/LeagueSearch";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import InformationPerson from "../screens/InformationPerson";

// import { BottomTabsParams } from "./types";

const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarInactiveTintColor: colors.muted[300],
				tabBarActiveTintColor: colors.gradient.color1,
				tabBarShowLabel: false,
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Chart"
				component={Progress}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Chart1
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Calendar"
				component={Trainning}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Calendar
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Cup"
				component={LeagueSearch}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Cup
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={InformationPerson}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name="user-alt"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNav;

const styles = StyleSheet.create({});
