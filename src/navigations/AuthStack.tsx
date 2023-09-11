import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParams } from "./config";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Login">
			<Stack.Screen
				name="Login"
				component={Home}
			/>
			<Stack.Screen
				name="SignUp"
				component={Home}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
