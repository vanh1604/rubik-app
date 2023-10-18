import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, FlatList } from "native-base";

import LeagueItem, { LeagueItemProps } from "./LeagueItem";
import { ContentProps } from "../../constansts/leagueInfor";

export type ContentScreenProps = typeof ContentProps;
export interface LeagueItemCardProps {
  data: LeagueItemProps[];
}
const LeagueItemBox = (props: LeagueItemCardProps) => {
  return (
    // <Box>
    //   <LeagueItem
    //     title="Giải Rubik WCA “Hanoi Super Brain Zyo 2023”"
    //     leagueImage={require("../assets/rubikleague.jpg")}
    //     date="10-11-2023"
    //     icon={<Calendar size="20" color="#FF8A65" />}
    //   />
    <Box my={4}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <LeagueItem {...item} />}
      />
    </Box>
  );
};

export default LeagueItemBox;

const styles = StyleSheet.create({});
