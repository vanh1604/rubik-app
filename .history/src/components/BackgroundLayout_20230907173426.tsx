import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
const BackgroundLayout = () => {
  return (
    <View>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
      ></LinearGradient>
    </View>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
