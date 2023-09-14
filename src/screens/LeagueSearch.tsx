import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LeagueItemBox from "../components/league/LeagueItemBox";
import { leagueData } from "../constansts/leagueInfor";
import Header1 from "../components/Header1";
type Props = {};
const LeagueSearch = (props: Props) => {
  return (
    <View>
      <Header1 title="Tra cứu cuộc thi" />
      <LeagueItemBox data={leagueData} />
    </View>
  );
};

export default LeagueSearch;

const styles = StyleSheet.create({});
