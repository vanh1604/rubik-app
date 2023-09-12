import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeagueItemBox from "../components/league/LeagueItemBox";
import { leagueData } from "../constansts/leagueInfor";
type Props = {};
const LeagueSearch = (props: Props) => {
  return (
    <View>
      <LeagueItemBox data={leagueData} />
    </View>
  );
};

export default LeagueSearch;

const styles = StyleSheet.create({});
