import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import Header from "../components/Header";

const Progress = () => {
  return (
    <Box>
      <Header title="Tiến độ học tập" />
      <Text>Progress</Text>
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
