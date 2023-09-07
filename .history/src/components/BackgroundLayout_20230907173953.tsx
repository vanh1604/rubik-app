import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { newColorTheme } from "../theme";
type Props = {
  children: ReactNode;
};
const BackgroundLayout = (props: props) => {
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
