import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { removeLoading, setLoading } from "../store/loading.reducer";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Home from "../screens/Home";
<<<<<<< HEAD
import SplashScreen from "../screens/Home2";
import Quizz from "../screens/Quizz/Quizz";
=======
import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterOTP from "../screens/RegisterOTP";
>>>>>>> 88fefce1c717878255da181c5f6a89c492093a11

const Stack = createNativeStackNavigator();

const Root = () => {
<<<<<<< HEAD
	return (
		<>
			<LoadingOverlay />
			<ErrorOverlay />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}>
					<Stack.Screen
						name="Home"
						component={Home}
					/>
					<Stack.Screen
						name="Quizz"
						component={Quizz}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
=======
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
>>>>>>> 88fefce1c717878255da181c5f6a89c492093a11
};

export default Root;

const styles = StyleSheet.create({});
