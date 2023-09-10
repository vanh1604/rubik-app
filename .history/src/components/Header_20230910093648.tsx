import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Box } from "native-base";
import { useTheme } from "native-base";
interface Props {
  title: string;
}
const Header = (props: Props) => {
  const {colors} = useTheme()
  const { title } = props;
  return (
    <Box style={styles.container}>
      <Text>{title}</Text>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    color:
  },
});
