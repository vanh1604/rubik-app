import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { Box, HStack, Text } from "native-base";
import { useTheme } from "native-base";
import BackgroundLayout from "./BackgroundLayout";
interface Props {
  title: string;
  handleButtonAdd?: any;
  handleButtonSave?: any;
}
const Header = (props: Props) => {
  const { colors } = useTheme();
  const { title } = props;
  return (
    <Box height={24}>
      <BackgroundLayout>
        <Box flex={1} justifyContent={"flex-end"} alignItems={"center"} mb={2}>
          <HStack>
            <Text color={"white"} fontWeight={500} fontSize={16}>
              {title}
            </Text>
          </HStack>
        </Box>
      </BackgroundLayout>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
  },
});
