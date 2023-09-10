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
    <Box height={20}>
      <BackgroundLayout>
        <Text>{title}</Text>
      </BackgroundLayout>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "",
  },
  text: {
    color: "#FFFFFF",
  },
});
