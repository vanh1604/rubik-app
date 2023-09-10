import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import Header from "../components/Header";

const Progress = () => {
  return (
    <Box flex={1}>
      <Header title="Tiến độ học tập" />
      <Text>Rubik 3x3x3</Text>
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
