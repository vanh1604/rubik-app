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

import Progress from "../screens/Progress";
import TabNav from "./TabNav";

import SplashScreen from "../screens/Home2";
import Quizz from "../screens/Quizz/Quizz";

import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterOTP from "../screens/RegisterOTP";
import ForgotPassword1 from "../screens/ForgotPassword1";
import ForgotPassword2 from "../screens/ForgotPassword2";
import ForgotPassword3 from "../screens/ForgotPassword3";
import { Information, Profile } from "iconsax-react-native";
import ThongTin from "../screens/Information";
import InformationPerson from "../screens/Information";
import ChangePassword from "../screens/ChangePassword";
import UserProfile from "../screens/Profile";
import PrivacyPolicy from "../screens/PrivacyPolicy";

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
        >
          <Stack.Screen name="Policy" component={PrivacyPolicy} />
          {/* <Stack.Screen name="Quizz" component={Quizz} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
