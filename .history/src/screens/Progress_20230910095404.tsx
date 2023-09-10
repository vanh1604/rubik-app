import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";
import Header from "../components/Header";
import { useTheme } from "native-base";
const Progress = () => {
  const { colors } = useTheme();
  return (
    <Box flex={1}>
      <Header title="Tiến độ học tập" />
      <Box
        width={"80%"}
        borderWidth={"1"}
        borderRadius={"9.9"}
        backgroundColor={colors.muted[50]}
      >
        <Text padding={"1"}>Rubik 3x3x3</Text>
      </Box>
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
