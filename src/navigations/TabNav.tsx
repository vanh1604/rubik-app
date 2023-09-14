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
} from "iconsax-react-native";
import Home from "../screens/Home";

import { useTheme } from "native-base";

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
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Progress}
        options={{
          tabBarIcon: ({ color, size }) => <Chart size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Trainning}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cup"
        component={LeagueSearch}
        options={{
          tabBarIcon: ({ color, size }) => <Cup size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InformationPerson}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileCircle size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
