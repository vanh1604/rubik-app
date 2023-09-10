import { StyleSheet } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";
import Header from "../components/Header";

const Progress = () => {
  return (
    <Box flex={1}>
      <Header title="Tiến độ học tập" />
      <Box width={"80%"} borderWidth={"1"} alignItems={"center"}>
        <Text>Rubik 3x3x3</Text>
      </Box>
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
