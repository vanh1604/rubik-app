import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Column, Switch, Text } from "native-base";
import Header from "../components/Header";
import { useTheme } from "native-base";
import TrainingItem from "../components/Training/TrainingItem";
import Header1 from "../components/Header1";
import { Add, Back, Backward } from "iconsax-react-native";

const Trainning = () => {
  const { colors } = useTheme();

  return (
    <Column flex={1}>
      <Header1
        title="Lịch tập luyện"
        RightBtn={({ color, size }) => (
          <TouchableOpacity>
            <Add color={color} size={size} />
          </TouchableOpacity>
        )}
      />
      <Box flex={1}>
        <TrainingItem time="12:00" />
        <TrainingItem time="17:00" />
        <TrainingItem time="21:00" />
      </Box>
    </Column>
  );
};

export default Trainning;

const styles = StyleSheet.create({});
