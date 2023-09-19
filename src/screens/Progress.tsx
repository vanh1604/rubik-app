import { StyleSheet, Picker } from "react-native";
import React, { useState } from "react";
import { Box, Center, Text } from "native-base";
import { useTheme } from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import Header1 from "../components/Header1";
const Progress = () => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <Box flex={1}>
      <Header1 title="Tiến độ học tập" />
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Rubik 3x3x3"
      />
    </Box>
  );
};

export default Progress;

const styles = StyleSheet.create({});
