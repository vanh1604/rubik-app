import { StyleSheet } from "react-native";
import React from "react";
import { Box, Switch, Text } from "native-base";
import Header from "../components/Header";
import { useTheme } from "native-base";
const Trainning = () => {
  const { colors } = useTheme();
  return (
    <Box flex={1}>
      <Header title="Lịch tập luyện" />

      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"4"}
        alignItems={"center"}
        borderBottomWidth={"1"}
        borderBottomColor={colors.muted[300]}
      >
        <Box>
          <Text fontSize={"30px"}>12:00</Text>
          <Text fontSize={"16"}>Hàng ngày</Text>
        </Box>
        <Box>
          <Switch size="lg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Trainning;

const styles = StyleSheet.create({});
