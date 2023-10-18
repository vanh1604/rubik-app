import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";

import LoadingOverlay from "../components/LoadingOverlay";

import Quizz from "../screens/Quizz/Quizz";

import LogInScreen from "../screens/Auth/SignIn/LogInScreen";

import ChangePassword from "../screens/PersonalProfile/ChangePassword";
import UserProfile from "../screens/Profile";
import PrivacyPolicy from "../screens/PersonalProfile/PrivacyPolicy";
import TabNav from "./TabNav";
import AddCalendar from "../screens/AddCalendar";
import LeagueContent from "../components/league/LeagueContent";
import Answer from "../screens/Quizz/Answer";
import ForgotPassword1 from "../screens/Auth/ForgotPassword/ForgotPassword1";

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
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="HomeTab" component={TabNav} />
          <Stack.Screen name="Quizz" component={Quizz} />
          <Stack.Screen name="TimePicker" component={AddCalendar} />
          <Stack.Screen name="Thông tin" component={LeagueContent} />
          <Stack.Screen name="AvatarChanger" component={ForgotPassword1} />
          <Stack.Screen name="PasswordChanger" component={ChangePassword} />
          <Stack.Screen name="Policy" component={PrivacyPolicy} />
          <Stack.Screen name="InformationChanger" component={UserProfile} />
          <Stack.Screen name="Answer" component={Answer} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
