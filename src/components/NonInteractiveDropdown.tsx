import { Center, Box, Row, Text, Column, ScrollView } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "native-base";
import { ArrowDown2, PlayCircle, TickCircle } from "iconsax-react-native";
import { colors } from "../constansts/style";
import ContentDropdown from "./ContentDropdown";
export interface NonInteractiveDropdownProps {
  title: string;
  content: string[];
}
const NonInteractiveDropdown: React.FC<NonInteractiveDropdownProps> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const { colors } = useTheme();

  return (
    <Box alignItems="center" justifyContent="center">
      <Center mt="8" borderRadius="10" width="80%">
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={styles.dropdownContent}
        >
          <Text style={styles.dropdownHeader}>{title}</Text>
          <Box>
            <ArrowDown2 size="20" color="black" style={styles.button} />
          </Box>
        </TouchableOpacity>
        {isOpen && (
          <Box>
            {content.map((item, index) => (
              <Box borderBottomColor="black" borderBottomWidth="1" py="5">
                <TouchableOpacity>
                  <Box>
                    <Row>
                      <Box>
                        <Text key={index}>{item}</Text>
                        <Row mt="5" alignItems="center">
                          <PlayCircle size="20" color="#FF8A65" />
                          <Text ml="2">24:10</Text>
                        </Row>
                      </Box>
                      <Box>
                        <TickCircle size="20" color="green" />
                      </Box>
                    </Row>
                  </Box>
                </TouchableOpacity>
              </Box>
            ))}
          </Box>
        )}
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  dropdownHeader: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "black", // Customize the text color
    textAlign: "left",
  },
  dropdownContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: 20,
    borderColor: "#D4D4D4",
    borderWidth: 1,
  },
  button: {
    marginRight: 10,
  },
});

export default NonInteractiveDropdown;
