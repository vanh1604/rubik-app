import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParams } from "./config";
import Home from "../screens/Home";
import LogInScreen from "../screens/Auth/SignIn/LogInScreen";
import RegisterScreen from "../screens/Auth/SignUp/RegisterScreen";

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName="Login"
		>
			<Stack.Screen
				name="Login"
				component={LogInScreen}
			/>
			<Stack.Screen
				name="SignUp"
				component={RegisterScreen}
			/>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
		</Stack.Navigator>
	);
};

export default AuthStack;

const styles = StyleSheet.create({});
