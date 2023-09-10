import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Header = (props: Props) => {
  const { children } = Props;
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
