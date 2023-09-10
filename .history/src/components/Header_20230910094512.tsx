import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Box } from "native-base";
import { useTheme } from "native-base";
import BackgroundLayout from "./BackgroundLayout";
interface Props {
  title: string;
}
const Header = (props: Props) => {
  const { colors } = useTheme();
  const { title } = props;
  return (
    <Box height={24}>
      <BackgroundLayout>
        <Box flex={1} justifyContent={'flex-end'}>
          <Text>{title}</Text>
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
