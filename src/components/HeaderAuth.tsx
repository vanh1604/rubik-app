import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";
import { Box, HStack, Text } from "native-base";
import { useTheme } from "native-base";
import BackgroundLayout from "./BackgroundLayout";
import { Add } from "iconsax-react-native";
interface Props {
  title: string;
  handleButtonAdd?: any;
  handleButtonSave?: any;
  handleBtnCancel?: any;
}
const Header = (props: Props) => {
  const { colors } = useTheme();
  const {
    title,
    handleBtnCancel = null,
    handleButtonAdd = null,
    handleButtonSave,
  } = props;
  return (
    <Box height={24}>
      <BackgroundLayout>
        <Box flex={1} justifyContent={"flex-end"} mb={2}>
          <HStack alignItems={"center"} justifyContent={"space-between"} px={2}>
            {handleBtnCancel ? (
              <Box>
                <Text color={"white"} fontWeight={500} fontSize={16}>
                  Hủy
                </Text>
              </Box>
            ) : (
              <Box size={8} />
            )}
            <Box>
              <Text color={"white"} fontWeight={500} fontSize={16}>
                {title}
              </Text>
            </Box>
            {handleButtonAdd && <Add size={32} color="white" />}
            {handleButtonSave && (
              <Box>
                <Text color={"white"} fontWeight={500} fontSize={16}>
                  Lưu
                </Text>
              </Box>
            )}
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
