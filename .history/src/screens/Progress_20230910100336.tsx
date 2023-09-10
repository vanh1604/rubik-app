import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";
import Header from "../components/Header";
import { useTheme } from "native-base";
import { ArrowDown2 } from "iconsax-react-native";
const Progress = () => {
  const { colors } = useTheme();
  return (
    <Box flex={1}>
      <Header title="Tiến độ học tập" />
      <Box alignItems={"center"}>
        <Box
          width={"80%"}
          borderWidth={"1"}
          borderRadius={"9.9"}
          backgroundColor={colors.muted[50]}
          marginTop={"12"}
        >
          <Box flexDirection={"row"} alignItems={"center"}>
            <Text padding={"2"}>Rubik 3x3x3 </Text>
            <ArrowDown2 size={"16"} color={colors.muted[500]} />
          </Box>
          <Text padding={"2"}>Rubik 2x2x2</Text>
          <Text padding={"2"}>Rubik 4x4x4 trở lên</Text>
          <Text padding={"2"}>Rubik tam giác</Text>
          <Text padding={"2"}>Rubik gương</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
