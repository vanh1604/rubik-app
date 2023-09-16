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

import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterOTP from "../screens/RegisterOTP";
import ForgotPassword1 from "../screens/ForgotPassword1";
import ForgotPassword2 from "../screens/ForgotPassword2";
import ForgotPassword3 from "../screens/ForgotPassword3";
import { Information, Profile } from "iconsax-react-native";
import ThongTin from "../screens/InformationPerson";
import InformationPerson from "../screens/InformationPerson";
import ChangePassword from "../screens/ChangePassword";
import UserProfile from "../screens/Profile";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import TabNav from "./TabNav";
import AddCalendar from "../screens/AddCalendar";
import LeagueContent from "../components/league/LeagueContent";

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
          <Stack.Screen name="Policy" component={PrivacyPolicy} />
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="HomeTab" component={TabNav} />
          <Stack.Screen name="Quizz" component={Quizz} />
          <Stack.Screen name="TimePicker" component={AddCalendar} />
          <Stack.Screen name="Thông tin" component={LeagueContent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
