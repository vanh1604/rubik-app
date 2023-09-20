import { Center, Box, Row, Text } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "native-base";
import { ArrowDown2, PlayCircle, TickCircle } from "iconsax-react-native";
import { colors } from "../constansts/style";
export interface DropdownProps {
  title: string;
}
const NonInteractiveDropdown: any = (props: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isComp, setIsComp] = useState(false);
  const { colors } = useTheme();
  const hanldeIsComp = () => {
    setIsComp(true);
    console.log("succes");
  };
  // Content to display when the dropdown is open
  const dropdownContent = (
    <Box>
      <Box borderBottomColor="black" borderBottomWidth="1" py="5">
        <TouchableOpacity onPress={hanldeIsComp}>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
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
      <Box borderBottomColor="black" borderBottomWidth="1" py="5">
        <TouchableOpacity onPress={hanldeIsComp}>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
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
      <Box py="5">
        <TouchableOpacity onPress={hanldeIsComp}>
          <Box>
            <Row>
              <Box>
                <Text>Hướng dẫn giải rubik cho người mới bắt đầu</Text>
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
    </Box>
  );

  return (
    <Box alignItems="center" justifyContent="center">
      <Center mt="8" borderRadius="10" width="80%">
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={styles.dropdownContent}
        >
          <Text style={styles.dropdownHeader}>{props.title}</Text>
          <Box>
            <ArrowDown2 size="20" color="black" style={styles.button} />
          </Box>
        </TouchableOpacity>

        {isOpen && dropdownContent}
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
