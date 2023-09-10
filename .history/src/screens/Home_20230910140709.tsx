import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box, Switch } from "native-base";
import Header from "../components/Header";

type Props = {};

const Home = (props: Props) => {
  return (
    <BackgroundLayout>
      <Box flex={1} justifyContent={"center"}>
        <Text>Home</Text>
      </Box>
    </BackgroundLayout>
  );
};

export default Home;

const styles = StyleSheet.create({});
