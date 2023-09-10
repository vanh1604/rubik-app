import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { newColorTheme } from "../theme";
const BackgroundLayout = () => {
  return (
    <View>
      <LinearGradient
        colors={[newColorTheme.gradient.color1, newColorTheme.gradient.color2]}
      >
        {}
      </LinearGradient>
    </View>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
