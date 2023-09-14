import { StyleSheet } from "react-native";
import React from "react";
import { Center, Heading, Row, useTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

type IconBtnProps = {
  size?: number;
  color?: string;
};

type Props = {
  title?: string;
  LeftBtn?: React.FC<IconBtnProps>;
  RightBtn?: React.FC<IconBtnProps>;
};

const Header1 = ({ title, LeftBtn, RightBtn }: Props) => {
  const { colors } = useTheme();
  return (
    <LinearGradient colors={[colors.gradient.color1, colors.gradient.color2]}>
      <Row justifyContent="space-between" safeAreaTop pb="4">
        <Center w="8">{LeftBtn && <LeftBtn size={24} color="white" />}</Center>
        <Heading
          size="md"
          color="white"
          textAlign={"center"}
          fontWeight={500}
          fontSize={16}
        >
          {title}
        </Heading>
        <Center w="8">
          {RightBtn && <RightBtn size={24} color="white" />}
        </Center>
      </Row>
    </LinearGradient>
  );
};

export default Header1;

const styles = StyleSheet.create({});
