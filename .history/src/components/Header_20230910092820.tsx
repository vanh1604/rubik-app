import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { Box } from "native-base";
type Props = {
  children: ReactNode;
};
const Header = (props: Props) => {
  const { children } = props;
  return (
    <Box style={styles.container}>
      <Text>{children}</Text>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignContent: "center",
  },
});
