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
import SplashScreen from "../screens/SplashScreen";
import Quizz from "../screens/Quizz/Quizz";

import LogInScreen from "../screens/Auth/SignIn/LogInScreen";
import RegisterScreen from "../screens/Auth/SignUp/RegisterScreen";
import RegisterOTP from "../screens/Auth/SignUp/RegisterOTP";
import ForgotPassword1 from "../screens/Auth/ForgotPassword/ForgotPassword1";
import ForgotPassword2 from "../screens/Auth/ForgotPassword/ForgotPassword2";
import ForgotPassword3 from "../screens/Auth/ForgotPassword/ForgotPassword3";
import { Information, Profile } from "iconsax-react-native";
import ThongTin from "../screens/PersonalProfile/InformationPerson";
import InformationPerson from "../screens/PersonalProfile/InformationPerson";
import ChangePassword from "../screens/PersonalProfile/ChangePassword";
import UserProfile from "../screens/Profile";
import PrivacyPolicy from "../screens/PersonalProfile/PrivacyPolicy";
import TabNav from "./TabNav";
import AddCalendar from "../screens/AddCalendar";
import LeagueContent from "../components/league/LeagueContent";
import Answer from "../screens/Quizz/Answer";

const Stack = createNativeStackNavigator();

const Root = () => {
	return (
		<>
			<LoadingOverlay />
			<ErrorOverlay />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName="HomeTab"
				>
					<Stack.Screen
						name="ForgotPassword"
						component={ForgotPassword3}
					/>
					<Stack.Screen
						name="Login"
						component={LogInScreen}
					/>
					<Stack.Screen
						name="HomeTab"
						component={TabNav}
					/>
					<Stack.Screen
						name="Quizz"
						component={Quizz}
					/>
					<Stack.Screen
						name="TimePicker"
						component={AddCalendar}
					/>
					<Stack.Screen
						name="Thông tin"
						component={LeagueContent}
					/>
					<Stack.Screen
						name="AvatarChanger"
						component={ChangePassword}
					/>
					<Stack.Screen
						name="PasswordChanger"
						component={ChangePassword}
					/>
					<Stack.Screen
						name="Policy"
						component={PrivacyPolicy}
					/>
					<Stack.Screen
						name="InformationChanger"
						component={UserProfile}
					/>
					<Stack.Screen
						name="Answer"
						component={Answer}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default Root;

const styles = StyleSheet.create({});
