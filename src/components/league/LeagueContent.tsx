import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, ScrollView, Text, useTheme } from "native-base";
import { LeagueItemProps } from "./LeagueItem";
import { ContentProps, leagueData } from "../../constansts/leagueInfor";
import { useNavigation } from "@react-navigation/native";

import Header1 from "../Header1";
import BackBtn from "../BackBtn";

const LeagueContent = (props: any) => {
  const { colors } = useTheme();

  return (
    <Box>
      <Header1 title="Cuộc thi" LeftBtn={BackBtn} />
      <ScrollView>
        <Box padding={8}>
          <Box>
            <Text lineHeight={20} fontSize={16} fontWeight={700}>
              {ContentProps.title}
            </Text>
          </Box>
          <Box marginTop={4}>
            <Text lineHeight={20} fontSize={16} fontWeight={700}>
              Thời gian:
            </Text>
            <Text
              lineHeight={18}
              fontSize={12}
              fontWeight={400}
              marginTop={2}
              marginBottom={2}
            >
              {ContentProps.time}
            </Text>
          </Box>
          <Box>
            <Text lineHeight={20} fontSize={16} fontWeight={700}>
              Địa Điểm:
            </Text>
            <Text
              lineHeight={18}
              fontSize={12}
              fontWeight={400}
              marginTop={2}
              marginBottom={2}
            >
              {ContentProps.location}
            </Text>
          </Box>
          <Box>
            <Text lineHeight={20} fontSize={16} fontWeight={700}>
              Yêu cầu khi đăng ký:
            </Text>
            <Text
              lineHeight={18}
              fontSize={12}
              fontWeight={400}
              marginTop={2}
              marginBottom={2}
            >
              {ContentProps.signin}
            </Text>
          </Box>
          <Box>
            <Text lineHeight={20} fontSize={16} fontWeight={700}>
              Lệ phí:
            </Text>
            <Text
              lineHeight={18}
              fontSize={12}
              fontWeight={400}
              marginTop={2}
              marginBottom={2}
            >
              {ContentProps.fees}
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default LeagueContent;

const styles = StyleSheet.create({});
