import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "native-base";
type Props = {
  children: ReactNode;
};
const BackgroundLayout = (props: Props) => {
  const { children } = props;
  const {colors} = useTheme()
  return (
    <View>
      <LinearGradient
        colors={[colors.gradient.color1,colors.gradient.color2]}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
