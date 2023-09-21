import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import LeagueItemBox from "../components/league/LeagueItemBox";
import { leagueData } from "../constansts/leagueInfor";
import Header1 from "../components/Header1";
import { Input, Row, useTheme } from "native-base";
import BackgroundLayout from "../components/BackgroundLayout";
type Props = {};
const LeagueSearch = (props: Props) => {
  const { colors } = useTheme();
  return (
    <View>
      <Header1 title="Tra cứu cuộc thi" search={true} />
      <LeagueItemBox data={leagueData} />
    </View>
  );
};

export default LeagueSearch;

const styles = StyleSheet.create({});
