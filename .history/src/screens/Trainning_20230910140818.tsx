import { StyleSheet } from "react-native";
import React from "react";
import { Box, Switch, Text } from "native-base";
import Header from "../components/Header";

const Trainning = () => {
  return (
    <Box flex={1}>
      <Header title="Lịch tập luyện" />
      <Box>
        <Text>12:00</Text>
      </Box>
    </Box>
  );
};

export default Trainning;

const styles = StyleSheet.create({});
