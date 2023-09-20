import { Center, Box } from "native-base";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "native-base";
export interface DropdownProps {
  title: string;
}
const NonInteractiveDropdown: any = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme();
  // Content to display when the dropdown is open
  const dropdownContent = (
    <View style={styles.dropdownContent}>
        
      <Text>This is the content of the dropdown</Text>
      <Text>Users can see it but cannot click</Text>
    </View>
  );

  return (
    <Box alignItems="center" justifyContent="center">
      <Center
        mt="8"
        backgroundColor={colors.muted[300]}
        width="70%"
        borderRadius="10"
      >
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <Text style={styles.dropdownHeader}>{props.title}</Text>
        </TouchableOpacity>
        {isOpen && dropdownContent}
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  dropdownHeader: {
    fontSize: 18,
    color: "blue", // Customize the text color
  },
  dropdownContent: {
    backgroundColor: "lightgray", // Customize the background color
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default NonInteractiveDropdown;
